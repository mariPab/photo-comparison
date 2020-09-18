
import React, { FunctionComponent, useCallback } from 'react';
import { Input, Label } from './Input.style';
import { flexLabel, formInputTitles } from '../../../settings/inputTitles';

export interface InputProps {
  name: string;
  type: string;
  onChange: any;
  value?: string | number;
  [key: string]: any;
}

const Component: FunctionComponent<InputProps> = ({ name, type, onChange, value }: InputProps) => {
  const generateTitle = useCallback((name: string): string | null => {
    return formInputTitles.hasOwnProperty(name) ? formInputTitles[name] : null;
  }, []);
  const renderInput = useCallback(() => {
    switch (type) {
      case 'text':
        return (
          <Input
            id={name}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
            autoComplete="off"
            minLength={10}
            required
            placeholder={generateTitle(name)}
          />
        );
      case 'number':
        return (
          <Input
            name={name}
            type={type}
            onChange={onChange}
            value={value}
            min={100}
            max={800}
          />
        );
      case 'file':
        return (
          <Input
            id={name}
            name={name}
            type={type}
            onChange={onChange.bind(null)}
          />
        );
      default:
        return null;
    }
  }, [value]);

  return (
    <Label flex={flexLabel.includes(name)}>
      {generateTitle(name)}
      {renderInput()}
      {flexLabel.includes(name) && 'px'}
    </Label>
  );
};
export {
  Component as Input,
};
