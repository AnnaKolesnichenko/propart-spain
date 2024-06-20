'use client';
import { CheckPicker } from 'rsuite';
import Image from 'next/image';
import '../MapDropdownCheckbox/DropDawnCheckbox.scss'

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
export const DropDawnCheckboxMob = ({ data, title, value, onChange }: DropDawnCheckboxProps) => {
  return (
    <div
      className="custom-checkpicker-container-mob"
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
      //  container={() => document.body}
      ></CheckPicker>
    </div>
  );
};
