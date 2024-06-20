import React, { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import './ManualInput.scss';
import { StateType } from '../MapDropDownCombine/DropDawnCombine';

interface ManualInputProps {
  getValues: (name: string, value: StateType) => void;
  name: string;
  closeManualInputs: () => void;
  type: string;
  title: string;
  oppositeValue: number;
}

const ManualInput = ({
  getValues,
  name,
  closeManualInputs,
  type,
  title,
  oppositeValue,
}: ManualInputProps) => {
  const [value, setValue] = useState<StateType>(['', 0]);
  const [isSubmitError, setError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (oppositeValue && isCompareInvalid(value[1], oppositeValue)) {
      setError(true);
      return;
    }

    getValues(name, value);
    setValue(['', 0]);
    closeManualInputs();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    const inputValue = e.target.value;
    const numberPattern = inputValue.replace(/[^0-9]/g, '');
    const numericValue = parseInt(numberPattern);
    const replacedMaxValue = replaceMaxValue(numericValue);
    if (isNaN(replacedMaxValue)) {
      setValue(['', 0]);
      return;
    }
    setValue([formatWithCommas(replacedMaxValue), replacedMaxValue]);
  };
  const replaceMaxValue = (current: number) => {
    let resultValue = current;
    if (type === 'Price') {
      const maxPriceValue = 50000000;
      if (current > maxPriceValue) resultValue = maxPriceValue;
    } else {
      const maxSizeValue = 500;
      if (current > maxSizeValue) resultValue = maxSizeValue;
    }
    return resultValue;
  };
  const isCompareInvalid = (currValue: number, other: number) => {
    if (name === 'min') return currValue >= other;
    return currValue <= other;
  };
  const formatWithCommas = (convertedValue: number) => {
    return convertedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <form onSubmit={handleSubmit} className={`manual__input ${isSubmitError ? 'error' : ''}`}>
      <input
        autoFocus
        onChange={handleChange}
        value={value[0]}
        placeholder={title}
        type="text"
      />
      <button title="Apply" type="submit">
        <Image
          style={{ filter: 'invert(100%)' }}
          src="/assets/icons/done.svg"
          alt="Search Icon"
          width={17}
          height={17}
        />
      </button>
    </form>
  );
};

export default ManualInput;
