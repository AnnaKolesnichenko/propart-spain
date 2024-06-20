'use client';
import React, { useMemo, useState, useEffect } from 'react';
import { Dropdown, Stack } from 'rsuite';
import './DropDawnCombineMob.scss';
import { CustomIcon } from '@/components/ui/MapDropdownCheckbox/DropDawnCheckbox';
import ManualInput from '@/components/ui/dropdawn/ManualInput';
import ManualToggler from '@/components/ui/dropdawn/ManualToggler';

interface DropDawnCombineMobProps {
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

const DropDawnCombineMob = ({
  data,
  title,
  type,
  valueNum,
  onChange,
  reset,
}: DropDawnCombineMobProps) => {
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

  const handleSelect = (
    name: keyof SelectsState,
    selectedValue: { label: string; value: number }
  ) => {
    const { value: number, label } = selectedValue;
    setValue(prev => ({ ...prev, [name]: [label, number] }));
  };

  const handleManualInputClose = () => {
    setManualVisible({ min: false, max: false });
  };
  const handleGetValues = (name: string, value: StateType) => {
    setValue(prev => ({ ...prev, [name]: value }));
  };

  // Очищення значень при зміні пропса reset
  useEffect(() => {
    setValue({
      min: ['', 0],
      max: ['', 0],
    });
  }, [reset]);

  //обрані значення
  useEffect(() => {
    const selectedValues = [value.min[1], value.max[1]].filter(val => val !== 0);
    onChange(selectedValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Disabled options
  const disabledOptionsMin = useMemo(() => {
    return value.max[1] ? data.filter(item => item.value >= value.max[1]) : [];
  }, [value.max, data]);

  const disabledOptionsMax = useMemo(() => {
    return value.min[1] ? data.filter(item => item.value <= value.min[1]) : [];
  }, [value.min, data]);

  return (
    <div className="dropdown-combine-mob-container">
      <div className="dropdown-combine-mob-block-container">
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
          <div className="custom-dropdawn-container">
            <Dropdown
              className="custom-dropdawn"
              appearance="ghost"
              id="min"
              onSelect={selectedValue => handleSelect('min', selectedValue)}
              title={value.min[0] || 'No min'}
            >
              <Dropdown.Item eventKey={{ label: '', value: 0 }}>No min</Dropdown.Item>
              {data.map(p => (
                <Dropdown.Item
                  key={p.label}
                  eventKey={p}
                  disabled={disabledOptionsMin.some(item => item.value === p.value)}
                >
                  {p.label} {valuePrefix}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
        )}
      </div>

      <div className="dropdown-combine-mob-block-container">
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
          <div className="custom-dropdawn-container">
            <Dropdown
              appearance="ghost"
              className="custom-dropdawn"
              id="max"
              onSelect={selectedValue => handleSelect('max', selectedValue)}
              title={value.max[0] || 'No max'}
            >
              <Dropdown.Item eventKey={{ label: '', value: 0 }}>No max</Dropdown.Item>
              {data.map(p => (
                <Dropdown.Item
                  disabled={disabledOptionsMax.some(item => item.value === p.value)}
                  key={p.value}
                  eventKey={p}
                >
                  {p.label} {valuePrefix}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDawnCombineMob;

/*

'use client';
import React, { useMemo, useState, useEffect } from 'react';
import { Dropdown, Stack } from 'rsuite';
import './DropDawnCombineMob.scss';
import { CustomIcon } from '@/components/ui/MapDropdownCheckbox/DropDawnCheckbox';
import ManualInput from '@/components/ui/dropdawn/ManualInput';
import ManualToggler from '@/components/ui/dropdawn/ManualToggler';

interface DropDawnCombineMobProps {
  data: {
    value: number;
    label: string;
  }[];
  title: string;
  valueNum: number[];
  onChange: (values: number[]) => void;
  reset: boolean;
}

export type StateType = [string, number];

type SelectsState = {
  min: StateType;
  max: StateType;
};

const DropDawnCombineMob = ({
  data,
  title,
  valueNum,
  onChange,
  reset,
}: DropDawnCombineMobProps) => {
 // const [open, setOpen] = useState({ min: false, max: false });
  const [value, setValue] = useState<SelectsState>({
    min: ['', valueNum[0]],
    max: ['', valueNum[1]],
  });
  const [manualVisible, setManualVisible] = useState<{ [key: string]: boolean }>({
    min: false,
    max: false,
  });

  // Displayed values
  const valuePrefix =
    title === 'Price' || title === 'Вартість' || title === 'Стоимость' ? '$' : 'm²';

  const toggleManual = (name: string) => {
    setManualVisible(prev => ({ ...prev, [name]: !prev[name] }));
    setValue(prev => ({ ...prev, [name]: ['', 0] }));
  };

  const handleSelect = (name: keyof SelectsState, selectedValue: { label: string; value: number }) => {
    const { value: number, label } = selectedValue;
    setValue(prev => ({ ...prev, [name]: [label, number] }));
   // handleClose(name);
  };
  */
/*
  const handleOpen = (name: keyof typeof open) => {
    setOpen(prev => ({ ...prev, [name]: true }));
  };
*/
/*
  const handleClose = (name: keyof typeof open) => {
    setOpen(prev => ({ ...prev, [name]: false }));
    handleManualInputClose();
  };


*/
/*
const handleManualInputClose = () => {
  setManualVisible({ min: false, max: false });
};

const handleGetValues = (name: string, value: StateType) => {
  setValue(prev => ({ ...prev, [name]: value }));
};

// Очищення значень при зміні пропса reset
useEffect(() => {
  setValue({
    min: ['', 0],
    max: ['', 0],
  });
}, [reset]);

//обрані значення
useEffect(() => {
  const selectedValues = [value.min[1], value.max[1]].filter(val => val !== 0);
  onChange(selectedValues);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [value]);

// Disabled options
const disabledOptionsMin = useMemo(() => {
  return value.max[1] ? data.filter(item => item.value >= value.max[1]) : [];
}, [value.max, data]);

const disabledOptionsMax = useMemo(() => {
  return value.min[1] ? data.filter(item => item.value <= value.min[1]) : [];
}, [value.min, data]);

return (
  <div className='dropdown-combine-mob-container'>

    <label htmlFor="min">
      <ManualToggler name="min" onToggle={toggleManual} visible={manualVisible.min}>
        <>Min {title}</>
      </ManualToggler>
      {manualVisible.min ? (
        <ManualInput
          type={title}
          closeManualInputs={handleManualInputClose}
          name="min"
          getValues={handleGetValues}
          oppositeValue={value.max[1]}
        />
      ) : (
        <div className="custom-dropdawn-container">
          <Dropdown
            className="custom-dropdawn"
            appearance="ghost"
            id="min"
            onSelect={selectedValue => handleSelect('min', selectedValue)}
            title={value.min[0] || 'No min'}
          >
            <Dropdown.Item eventKey={{ label: '', value: 0 }}>No min</Dropdown.Item>
            {data.map(p => (
              <Dropdown.Item
                key={p.label}
                eventKey={p}
                disabled={disabledOptionsMin.some(item => item.value === p.value)}
              >
                {p.label} {valuePrefix}
              </Dropdown.Item>
            ))}
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
          type={title}
          closeManualInputs={handleManualInputClose}
          name="max"
          getValues={handleGetValues}
        />
      ) : (
        <div className="custom-dropdawn-container">
          <Dropdown
           // caretAs={CustomIcon}
            appearance="ghost"
            className="custom-dropdawn"
            id="max"
           // onOpen={() => handleOpen('max')}
           // onClose={() => handleClose('max')}
           // open={open.max}
            onSelect={selectedValue => handleSelect('max', selectedValue)}
            title={value.max[0] || 'No max'}
          >
            <Dropdown.Item eventKey={{ label: '', value: 0 }}>No max</Dropdown.Item>
            {data.map(p => (
              <Dropdown.Item
                disabled={disabledOptionsMax.some(item => item.value === p.value)}
                key={p.value}
                eventKey={p}
              >
                {p.label} {valuePrefix}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
      )}
    </label>

  </div>
);
};

export default DropDawnCombineMob;

*/
