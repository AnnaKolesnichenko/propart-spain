'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { Dropdown, Stack } from 'rsuite';
import './DropDawnCombine.scss';
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
  const [open, setOpen] = useState( { main: false, min: false, max: false },
);
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
    // якщо клікаємо по min value, цей список закривається і  автоматично відкривається список max value
    // якщо клікаємо по max value закривається max value, основне меню відкрите доки не заберемо ховер
    if (name === 'min') {
      setOpen({ main: true, min: false, max: true });
    } else {
      setOpen({ main: true, min: false, max: false });
    }
  };
  //відкривання і закривання списку
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


/*

'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { Dropdown, Stack } from 'rsuite';
import './DropDawnCombine.scss';
import { CustomIcon } from '@/components/ui/MapDropdownCheckbox/DropDawnCheckbox';
import ManualInput from '@/components/ui/dropdawn/ManualInput';
import ManualToggler from '@/components/ui/dropdawn/ManualToggler';

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
  const [open, setOpen] = useState({ main: false, min: false, max: false });
  console.log(open)
  const [value, setValue] = useState<SelectsState>({
    min: ['', valueNum[0]],
    max: ['', valueNum[1]],
  });
  const [manualVisible, setManualVisible] = useState<{ [key: string]: boolean }>({
    min: false,
    max: false,
  });
  // Displayed values
  const valuePrefix = type === 'Price' ? '$' : 'm²';

  const toggleManual = (name: string) => {
    setManualVisible(prev => ({ ...prev, [name]: !prev[name] }));
    setValue(prev => ({ ...prev, [name]: ['', 0] }));
  };
  //функція спрацьовує по кліку елемента списку
  const handleSelect = (name: string, selectedValue: { label: string; value: number }) => {
    const { value: number, label: string } = selectedValue;
    setValue(prev => ({ ...prev, [name]: [string, number] }));
    // якщо клікаємо по min value, цей список закривається і  автоматично відкривається список max value
    // якщо клікаємо по max value закривається max value, основне меню відкрите доки не заберемо ховер
    if (name === 'min') {
      setOpen(prev => ({ ...prev, min: false, max: true }));
      console.log('close min')
    } else {
      setOpen(prev => ({ ...prev, max: false }));
      console.log('close max')
    }
  };
//відкривання і закривання списку
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
    handleManualInputClose();
  };

  const handleManualInputClose = () => {
    setManualVisible(prev => ({ ...prev, min: false, max: false }));
  };
  const handleGetValues = (name: string, newValue: StateType) => {
    setValue(prev => ({ ...prev, [name]: newValue }));
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
       // open={open.main}
        open={true}
        title={title}
        icon={<CustomIcon />}
        onClick={() => handleToggle('main')}
      >
        <Stack>
          <label htmlFor="min">
            <ManualToggler name="min" onToggle={toggleManual} visible={manualVisible.min}>
              <>Min {title}</>
            </ManualToggler>
            {manualVisible.min ? (
              <ManualInput
                title={title}
                type={type}
                closeManualInputs={handleManualInputClose}
                name="min"
                getValues={handleGetValues}
                oppositeValue={value.max[1]}
              />
            ) : (
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
            )}
          </label>

          <label htmlFor="max">
            <ManualToggler name="max" onToggle={toggleManual} visible={manualVisible.max}>
              <>Max {title}</>
            </ManualToggler>
            {manualVisible.max ? (
              <ManualInput
                oppositeValue={value.min[1]}
                title={title}
                type={type}
                closeManualInputs={handleManualInputClose}
                name="max"
                getValues={handleGetValues}
              />
            ) : (
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
            )}
          </label>
        </Stack>
      </Dropdown>
    </div>
  );
};

export default DropDawnCombine;
*/
