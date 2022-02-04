import React from 'react';
import { Select } from 'antd';
import { SelectProps } from 'components/antd/Select';

const { Option } = Select;

export function CustomSelect(props: SelectProps) {
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  return (
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      suffixIcon={<span>H</span>}
      onChange={handleChange}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  );
}
