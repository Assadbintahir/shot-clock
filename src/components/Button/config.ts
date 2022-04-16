export type ButtonType = "normal" | "danger";

/**
 * simple function to return button theme
 * @param ButtonType
 * @param disabled
 * @returns tailwind color theme
 */
export const getButtonTheme = (type: ButtonType, disabled: boolean) => {
  let theme = "bg-blue-600";
  if (type === "danger") {
    theme = disabled ? "bg-red-300" : "bg-red-600";
  }

  return theme;
};
