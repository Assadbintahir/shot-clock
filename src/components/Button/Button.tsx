import React, { MouseEvent } from "react";
import { ButtonType, getButtonTheme } from "./config";

interface IButtonProps {
  buttonText: string;
  type: ButtonType;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = (props: IButtonProps): React.ReactElement => {
  return (
    <button
      data-testid="button"
      disabled={props.disabled}
      onClick={props.onClick}
      className={`m-3 p-3 px-10 shadow-md rounded-lg border-transparent ${getButtonTheme(
        props.type,
        Boolean(props.disabled)
      )}`}
    >
      <span className="font-semibold text-white">{props.buttonText}</span>
    </button>
  );
};

export default Button;
