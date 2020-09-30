import React from "react";
import { ThemeSelector } from "./ThemeSelector";

interface IThemeObject {
  dark: string;
  light: string;
}

interface IThemedContent {
  themeNames: IThemeObject;
  onSetThemeName: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemedContent: React.FC<IThemedContent> = ({
  themeNames,
  onSetThemeName,
}: IThemedContent) => {
  return (
    <div className="themed-content">
      <main>
        <header>Header</header>
        <div className="content">
          <ThemeSelector
            setThemeName={onSetThemeName}
            themeNames={themeNames}
          />
        </div>
        <footer>Footer</footer>
      </main>
    </div>
  );
};
