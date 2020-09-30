import React from "react";

interface IThemeSelector {
  setThemeName: React.Dispatch<React.SetStateAction<string>>;
  themeNames: {
    dark: string;
    light: string;
  };
}

export const ThemeSelector: React.FC<IThemeSelector> = ({
  setThemeName,
  themeNames,
}: IThemeSelector) => {
  return (
    <div>
      <label>Theme: </label>
      <select onChange={(e) => setThemeName(e.target.value)}>
        {Object.entries(themeNames).map(([key, value]) => (
          <option value={value} key={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};
