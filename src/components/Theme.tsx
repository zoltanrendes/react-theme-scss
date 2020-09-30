import React from "react";

interface ITheme {
  children: JSX.Element;
  themeName: string;
}

export const Theme: React.FC<ITheme> = ({ children, themeName }: ITheme) => {
  return <div className={themeName}>{children}</div>;
};
