'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { Dropdown, Stack } from 'rsuite';
import './CustomDropDownCombi.scss';
import { CustomIcon } from '@/components/ui/MapDropdownCheckbox/DropDawnCheckbox';

interface DropDawnCombineProps {
  data: {
    value: number;
    label: string;
  }[];
  title: string;
  type: string; 
  valueNum: number[];
  onChange: (values: number[]) => void;
  reset: boolean;
}

export type StateType = [string, number];

type SelectsState = {
  min: StateType;
  max: StateType;
};

const DropDawnCombine = ({
  data,
  title,
  type, // отримання пропса type
  valueNum,
  onChange,
  reset,
}: DropDawnCombineProps) => {
  const [open, setOpen] = useState({
    main: false,
    min: false,
    max: false,
  });

  const [value, setValue] = useState<SelectsState>({
    min: ['', valueNum[0]],
    max: ['', valueNum[1]],
  });

  // Displayed values
  const valuePrefix = type === 'Price' ? '$' : 'm²'; // використання type для префіксу

  const handleSelect = (name: string, selectedValue: { label: string; value: number }) => {
    const { value: number, label: string } = selectedValue;
    setValue(prev => ({ ...prev, [name]: [string, number] }));
    setOpen(prev => ({
      ...prev,
      main: true, // Завжди залишаємо основне меню відкритим
      min: name === 'min' ? false : prev.min, // Закриваємо min список, якщо вибрано min
      max: name === 'max' ? false : prev.max, // Закриваємо max список, якщо вибрано max
    }));
  };

  const handleToggle = (name: keyof typeof open) => {
    setOpen(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleClose = () => {
    setOpen({
      main: false,
      min: false,
      max: false,
    });
  };

  useEffect(() => {
    setValue({
      min: ['', 0],
      max: ['', 0],
    });
  }, [reset]);

  useEffect(() => {
    const selectedValues = [value.min[1], value.max[1]].filter(val => val !== 0);
    onChange(selectedValues);
    // eslint-disable-next-line
  }, [value]);

  const disabledOptionsMin = useMemo(() => {
    return value.max[1] ? data.filter(item => item.value >= value.max[1]) : [];
  }, [value.max, data]);

  const disabledOptionsMax = useMemo(() => {
    return value.min[1] ? data.filter(item => item.value <= value.min[1]) : [];
  }, [value.min, data]);

  return (
    <div
      onMouseEnter={() => handleToggle('main')}
      onMouseLeave={handleClose}
      className="custom-checkpicker-container-combi-map"
    >
      <Dropdown
        noCaret
        appearance="ghost"
        className="custom-combine-dropdawn"
        open={open.main}
        title={title}
        icon={<CustomIcon />}
      >
        <Stack>
          <label htmlFor="min">
            Min {title}
            <div onClick={() => handleToggle('min')} className="custom-dropdawn-container">
              <Dropdown
                className="custom-dropdawn"
                appearance="ghost"
                id="min"
                open={open.min}
                onSelect={value => handleSelect('min', value)}
                title={value.min[0] || 'No min'}
              >
                <div className="dropdown-list-container">
                  <Dropdown.Item eventKey={''}>No min</Dropdown.Item>
                  {data.map(p => (
                    <Dropdown.Item
                      key={p.label}
                      eventKey={p}
                      disabled={disabledOptionsMin.some(item => item.value === p.value)}
                    >
                      {p.label} {valuePrefix}
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </div>
          </label>

          <label htmlFor="max">
            Max {title}
            <div onClick={() => handleToggle('max')} className="custom-dropdawn-container">
              <Dropdown
                appearance="ghost"
                className="custom-dropdawn"
                id="max"
                open={open.max}
                onSelect={value => handleSelect('max', value)}
                title={value.max[0] || 'No max'}
              >
                <div className="dropdown-list-container">
                  <Dropdown.Item eventKey={''}>No max</Dropdown.Item>
                  {data.map(p => (
                    <Dropdown.Item
                      disabled={disabledOptionsMax.some(item => item.value === p.value)}
                      key={p.value}
                      eventKey={p}
                    >
                      {p.label} {valuePrefix}
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </div>
          </label>
        </Stack>
      </Dropdown>
    </div>
  );
};

export default DropDawnCombine;


/*

'use client';

import React, { useState, useEffect } from 'react';
import './CustomDropDownCombi.scss';

interface DropDawnCombineProps {
  data: {
    value: number;
    label: string;
  }[];
  title: string;
  type: string;
  valueNum: number[];
  onChange: (values: number[]) => void;
  reset: boolean;
}

export type StateType = [string, number];

const CustomDropDownCombine = ({
  data,
  title,
  type,
  valueNum,
  onChange,
  reset,
}: DropDawnCombineProps) => {
  const [openMain, setOpenMain] = useState(false);
  const [openMin, setOpenMin] = useState(false);
  const [openMax, setOpenMax] = useState(false);
  const [value, setValue] = useState(valueNum);

  return (
    <div
      onMouseEnter={() => setOpenMain(true)}
      onMouseLeave={() => setOpenMain(false)}
      className="my-custom-dropdown-combi"
    >
      <button>{title}</button>
      {openMain && (
        <div className="my-custom-dropdown-combi-list">
          Min {title}
          <div className="min-list-container">
            {openMin && (
              <div className="min-list-list-container">
                <ul className="min-list-list">
                  {data &&
                    data.map((item, index) => (
                      <li key={index} onClick={() => console.log(item.value)}>
                        {item.label}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
          <div className="max-list-container">
            Max {title}
            {openMax && (
              <div className="max-list-list-container">
                <ul className="max-list-list">
                  {data &&
                    data.map((item, index) => (
                      <li key={index} onClick={() => console.log(item.value)}>
                        {item.label}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropDownCombine;
*/
/*
'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { Dropdown, Stack } from 'rsuite';
import './CustomDropDownCombi.scss';
import { CustomIcon } from '@/components/ui/MapDropdownCheckbox/DropDawnCheckbox';

interface DropDawnCombineProps {
  data: {
    value: number;
    label: string;
  }[];
  title: string;
  type: string;
  valueNum: number[];
  onChange: (values: number[]) => void;
  reset: boolean;
}

export type StateType = [string, number];

type SelectsState = {
  min: StateType;
  max: StateType;
};

const DropDawnCombine = ({
  data,
  title,
  type,
  valueNum,
  onChange,
  reset,
}: DropDawnCombineProps) => {
  const [open, setOpen] = useState( { main: false, min: false, max: false });
  const [value, setValue] = useState<SelectsState>({
    min: ['', valueNum[0]],
    max: ['', valueNum[1]],
  });

  // Displayed values
  const valuePrefix = type === 'Price' ? '$' : 'm²';
  //функція спрацьовує по кліку елемента списку

  const handleSelect = (name: string, selectedValue: { label: string; value: number }) => {
    const { value: number, label: string } = selectedValue;
    setValue(prev => ({ ...prev, [name]: [string, number] }));
  
    // Оновіть стан open відповідно до вибраного пункту списку
    setOpen(prev => ({
      ...prev,
      main: true,  // Завжди залишаємо основне меню відкритим
      min: name === 'min' ? false : prev.min,  // Закриваємо min список, якщо вибрано min
      max: name === 'max' ? false : prev.max,  // Закриваємо max список, якщо вибрано max
    }));
  };
  
  // Змініть умову для відкриття/закриття списку
  const handleToggle = (name: keyof typeof open) => {
    setOpen(prev => ({ ...prev, [name]: !prev[name] }));
  };
  // закривання всього елемента
  const handleClose = () => {
    setOpen({
      main: false,
      min: false,
      max: false,
    });
  };
  // Очищення значень при зміні пропса reset
  useEffect(() => {
    setValue({
      min: ['', 0],
      max: ['', 0],
    });
  }, [reset]);
  // обрані значення
  useEffect(() => {
    const selectedValues = [value.min[1], value.max[1]].filter(val => val !== 0);
    onChange(selectedValues);
    // eslint-disable-next-line
  }, [value]);
  // Робимо неактивні елементи списку
  const disabledOptionsMin = useMemo(() => {
    return value.max[1] ? data.filter(item => item.value >= value.max[1]) : [];
  }, [value.max, data]);
  const disabledOptionsMax = useMemo(() => {
    return value.min[1] ? data.filter(item => item.value <= value.min[1]) : [];
  }, [value.min, data]);

  return (
    <div
      onMouseEnter={() => handleToggle('main')}
      onMouseLeave={handleClose}
      className="custom-checkpicker-container-combi-map"
    >
      <Dropdown
        noCaret
        appearance="ghost"
        className="custom-combine-dropdawn"
        open={open.main}
        title={title}
        icon={<CustomIcon />}
      >
        <Stack>
          <label htmlFor="min">
            Min {title}
            <div onClick={() => handleToggle('min')} className="custom-dropdawn-container">
              <Dropdown
                className="custom-dropdawn"
                appearance="ghost"
                id="min"
                open={open.min}
                onSelect={value => handleSelect('min', value)}
                title={value.min[0] || 'No min'}
              >
                <div className="dropdown-list-container">
                  <Dropdown.Item eventKey={''}>No min</Dropdown.Item>
                  {data.map(p => (
                    <Dropdown.Item
                      key={p.label}
                      eventKey={p}
                      disabled={disabledOptionsMin.some(item => item.value === p.value)}
                    >
                      {p.label} {valuePrefix}
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </div>
          </label>

          <label htmlFor="max">
            Max {title}
            <div onClick={() => handleToggle('max')} className="custom-dropdawn-container">
              <Dropdown
                appearance="ghost"
                className="custom-dropdawn"
                id="max"
                open={open.max}
                onSelect={value => handleSelect('max', value)}
                title={value.max[0] || 'No max'}
              >
                <div className="dropdown-list-container">
                  <Dropdown.Item eventKey={''}>No max</Dropdown.Item>
                  {data.map(p => (
                    <Dropdown.Item
                      disabled={disabledOptionsMax.some(item => item.value === p.value)}
                      key={p.value}
                      eventKey={p}
                    >
                      {p.label} {valuePrefix}
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </div>
          </label>
        </Stack>
      </Dropdown>
    </div>
  );
};

export default DropDawnCombine;



*/
