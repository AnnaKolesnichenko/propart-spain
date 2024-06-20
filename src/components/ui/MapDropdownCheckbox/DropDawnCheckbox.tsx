'use client';
import './DropDawnCheckbox.scss';
import { useState, useEffect } from 'react';
import { CheckPicker } from 'rsuite';
import Image from 'next/image';

interface DropDawnCheckboxProps {
  data: any[];
  title: string;
  value: string[];
  onChange: (values: string[]) => void;
}

export const CustomIcon = () => (
  <Image
    alt="chevron icon"
    width={16}
    height={16}
    src="/assets/icons/chevron-filter.svg"
    style={{ verticalAlign: 'middle' }}
  />
);
export const DropDawnCheckbox = ({ data, title, value, onChange }: DropDawnCheckboxProps) => {
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const [open, setOpen] = useState(false);
  return (
    isClient && (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="custom-checkpicker-container"
      >
        <CheckPicker
          caretAs={CustomIcon}
          className="custom-checkpicker"
          data={data}
          placeholder={' '}
          label={title}
          searchable={false}
          onSelect={onChange}
          value={value}
          defaultValue={[]}
          onClean={() => onChange([])}
          open={open}
       
        ></CheckPicker>
      </div>
    )
  );
};
