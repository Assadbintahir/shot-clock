import React from "react";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./Button";
import { getButtonTheme } from './config';

describe("Shot Clock tests", () => {
  test("should verify button structure", () => {
    const buttonText = 'test Button';
    const { getByText, getByTestId } = render(
      <App
        buttonText={buttonText}
        type="normal"
        onClick={jest.fn()}
        disabled={true}
      />
    );
    const titleElement = getByText(buttonText);
    expect(titleElement).toBeInTheDocument();
    expect(getByTestId('button')).toHaveAttribute('disabled');
  });

  test("should run callBack when button is clicked", () => {
    const buttonText = 'test Button';
    const buttonCallback = jest.fn();
    const { getByTestId } = render(
      <App
        buttonText={buttonText}
        type="normal"
        onClick={buttonCallback}
        disabled={false}
      />
    );
    
    userEvent.click(getByTestId('button'));
    expect(buttonCallback).toHaveBeenCalledTimes(1);
  });

  test("should return relevant theme for button", () => {
    const theme = getButtonTheme('danger', false);
    expect(theme).toBe('bg-red-600');

    const disabledTheme = getButtonTheme('danger', true);
    expect(disabledTheme).toBe('bg-red-300');

    const normalTheme = getButtonTheme('normal', false);
    expect(normalTheme).toBe('bg-blue-600');
  });
});
