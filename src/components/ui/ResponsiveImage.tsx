import Image from 'next/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const blurSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="22.09%" style="stop-color:rgba(0, 0, 0, 0.6);stop-opacity:1" />
          <stop offset="43.15%" style="stop-color:rgba(1, 0, 0, 0);stop-opacity:1" />
          <stop offset="93.68%" style="stop-color:rgba(0, 0, 0, 0.36);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  `;
const ResponsiveImage = ({ src, alt, width, height, className }: ResponsiveImageProps) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        paddingTop: `${(height / width) * 100}%`,
      }}
    >
      <Image
        // className={className}
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${btoa(blurSVG)}`}
      />
    </div>
  );
};

export default ResponsiveImage;
