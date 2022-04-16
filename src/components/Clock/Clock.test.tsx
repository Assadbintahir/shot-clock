import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Clock from "./Clock";
import { ButtonLabels } from "./config";
import { TICK, DEFAULT_COUNTDOWN } from '../../utils/constants';

jest.spyOn(global, "setInterval");

describe("Clock component tests", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })

  afterEach(() => {
    jest.resetAllMocks();
    jest.useRealTimers();
  })

  test("should run the clock upon clicking start button", () => {
    const { getByText, getByTestId } = render(<Clock />);

    expect(getByText(ButtonLabels.start)).toBeInTheDocument();
    userEvent.click(getByText(ButtonLabels.start));
    expect(getByText(ButtonLabels.stop)).toBeInTheDocument();
    
    act(() => {
      jest.advanceTimersByTime(TICK);
    })
    
    expect(getByTestId('countdown').textContent).toBe(String(DEFAULT_COUNTDOWN - 1));
    userEvent.click(getByText(ButtonLabels.stop));
    expect(getByText(ButtonLabels.start)).toBeInTheDocument();
  });

  test("should reset the clock upon clicking reset button", () => {
    const { getByText, getByTestId } = render(<Clock />);

    expect(getByText(ButtonLabels.start)).toBeInTheDocument();
    userEvent.click(getByText(ButtonLabels.start));
    expect(getByText(ButtonLabels.stop)).toBeInTheDocument();
    
    act(() => {
      jest.advanceTimersByTime(TICK*2);
    })
    
    expect(getByTestId('countdown').textContent).toBe(String(DEFAULT_COUNTDOWN - 2));
    userEvent.click(getByText(ButtonLabels.reset));
    expect(getByTestId('countdown').textContent).toBe(String(DEFAULT_COUNTDOWN));
    expect(getByText(ButtonLabels.start)).toBeInTheDocument();
  });

  test("should reset the clock when countdown reaches 0", () => {
    const { getByText, getByTestId } = render(<Clock />);

    expect(getByText(ButtonLabels.start)).toBeInTheDocument();
    userEvent.click(getByText(ButtonLabels.start));
    
    act(() => {
      jest.advanceTimersByTime(TICK*DEFAULT_COUNTDOWN);
    })
    
    expect(getByTestId('countdown').textContent).toBe(String(0));
    act(() => {
      jest.advanceTimersByTime(TICK);
    })
    expect(getByTestId('countdown').textContent).toBe(String(DEFAULT_COUNTDOWN));
    expect(getByText(ButtonLabels.start)).toBeInTheDocument();
  });
});
