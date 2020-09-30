import React from "react";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { App } from "./App";

describe("theme rendering", () => {
  test("renders dark theme by default", () => {
    const { getByText, queryByDisplayValue } = render(<App />);
    const themeTextLabel = getByText(/Theme:/i);
    const themeValueDark = queryByDisplayValue(/dark/i);
    expect(themeTextLabel).toBeInTheDocument();
    expect(themeValueDark).toBeInTheDocument();
  });

  test("changes dark theme to light", () => {
    const { queryByDisplayValue } = render(<App />);
    const themeChanger = queryByDisplayValue(/dark/i);
    expect(themeChanger).toBeInTheDocument();
    if (themeChanger) {
      fireEvent.change(themeChanger, {
        target: { value: "light-theme" },
      });
    }
    const themeChangerLight = queryByDisplayValue(/light/i);
    expect(themeChangerLight).toBeInTheDocument();
  });
});
