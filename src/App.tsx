import "./App.scss";
import React, { useState } from "react";
import { Theme } from "./components/Theme";
import { ThemedContent } from "./components/ThemedContent";
import { themeNames } from "./themeNames";

export const App: React.FC = () => {
  const [themeName, setThemeName] = useState(themeNames.dark);

  return (
    <Theme themeName={themeName}>
      <ThemedContent themeNames={themeNames} onSetThemeName={setThemeName} />
    </Theme>
  );
};
