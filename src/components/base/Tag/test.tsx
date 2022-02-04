import { render, screen } from '@testing-library/react';
import { Input } from 'antd';
import React from 'react';

describe('Test ButtonButton ', () => {
  render(<Input />);
  it(`works and renders`, () => {
    expect(screen.getByRole('input')).toBeTruthy();
  });
});
