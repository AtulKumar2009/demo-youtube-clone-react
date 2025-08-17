import { screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";
import App from "../App";

test("Slide panel to be present", () => {
  renderWithProviders(<App />, {
    preloadedState: {
      app: { isMenuOpen: true },
    },
  });
  expect(screen.getByText((content) => content === "Home")).toBeInTheDocument();
});
