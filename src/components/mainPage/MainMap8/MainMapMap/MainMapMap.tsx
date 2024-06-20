"use client";
import React, { useEffect, useRef } from "react";
import Mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import jsonData from "@/constants/allAreas.json";
import { createGeoJSON } from "@/utils/createGeoJSON";
import {
  clastersLayer,
  clastersCountLayer,
  unclastersLayer,
} from "@/constants/map";
import "./MainMapMap.scss";

const token =
  "pk.eyJ1IjoiYW5uYS1rb2xlc25pY2hlbmtvIiwiYSI6ImNseG42eWxtcTAwbGkyaXNmcmFtbzg4ZnMifQ.D30wch4DV3pL-kExhlFiZg";

if (token) {
  Mapboxgl.accessToken = token;
} else {
  console.error("Mapbox access token is not provided or invalid.");
}
interface MainMapMapProps {
  mapCoordinates: [number, number];
  mapZoom: number;
  setLoad?: (flag: boolean) => void;
}

const MainMapMap = ({ mapCoordinates, mapZoom, setLoad }: MainMapMapProps) => {
  const mapContainer = useRef(null);
  const map = useRef<Mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!map.current) {
      map.current = new Mapboxgl.Map({
        container: mapContainer.current!,
        style: "mapbox://styles/abiespana/cltantp6a00ut01pj4v9h0srk",
        center: mapCoordinates, //[-5.146848, 36.426807],
        zoom: mapZoom, //11,
        minZoom: 5, // встановлює мінімальний zoom
        maxZoom: 18, // встановлює максимальний zoom
      });

      if (setLoad) setLoad(false);

      map.current.on("load", () => {
        map.current?.addSource("projects", {
          type: "geojson",
          data: createGeoJSON(jsonData),
          cluster: true,
          clusterRadius: 80,
        });

        map.current?.addLayer(clastersLayer);
        map.current?.addLayer(clastersCountLayer);
        map.current?.addLayer(unclastersLayer);
      });
      //відслідковування кліку по маркеру
      map.current.on("click", (event: any) => {
        const features = map.current?.queryRenderedFeatures(event.point, {
          //popap з'являється по кліку тільки по макерах
          layers: ["unclustered-point"],
        });
        if (!features || !features.length) {
          return;
        }
        const feature = features[0];
        // console.log(feature);
        //Перевірка чи доступні властивості
        if (feature.properties && feature.geometry.type === "Point") {
          const popup = new Mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat(feature.geometry.coordinates as [number, number])
            .setHTML(
              `
            <a class='link' href="/project/${feature.properties.id}">
              <div class='image'>
                <img src=${
                  feature.properties.photo
                    ? feature.properties.photo
                    : "/icons/icons-villa.png"
                } alt="React Image" />
              </div>
              <div class='info'>
                <span>${feature.properties.name}</span>
                <p>${feature.properties.price} €</p>
              </div>
            </a>`
            )
            .addTo(map.current!);
        }
      });

      // Додавання слухача для клацання по кластеру
      map.current.on("click", (event: any) => {
        const features = map.current?.queryRenderedFeatures(event.point, {
          layers: ["clusters"],
        });
        if (!features || !features.length) {
          return;
        }
        const feature = features[0];
        if (!feature) {
          return;
        }
        const clusterId = feature.properties?.cluster_id;
        if (!clusterId) {
          return;
        }
        const source = map.current?.getSource(
          "projects"
        ) as Mapboxgl.GeoJSONSource;
        source.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return;
          const coordinates = (feature.geometry as GeoJSON.Point).coordinates;
          map.current?.easeTo({
            center: coordinates as [number, number],
            zoom: zoom + 1,
          });
        });
      });

      // Зміна курсора при наведенні на кластер та маркер
      map.current.on("mouseenter", ["clusters", "unclustered-point"], () => {
        map.current!.getCanvas().style.cursor = "pointer";
      });
      map.current.on("mouseleave", ["clusters", "unclustered-point"], () => {
        map.current!.getCanvas().style.cursor = "";
      });
      //панель управління
      map.current.addControl(new Mapboxgl.NavigationControl(), "top-right");
    }
    //взаємодія при скролі колесом мишки
    map.current.on("wheel", (event) => {
      if (event.originalEvent.ctrlKey) {
        return;
      }
      if (event.originalEvent.metaKey) {
        return;
      }
      if (event.originalEvent.altKey) {
        return;
      }
      event.preventDefault();
    });
    //eslint-disable-next-line
  }, []);

  return <div ref={mapContainer} className="main-map-container"></div>;
};

export default MainMapMap;
