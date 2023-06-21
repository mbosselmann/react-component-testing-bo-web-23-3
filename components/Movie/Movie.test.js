import Movie from "./index.js";
import { render, screen } from "@testing-library/react";

// test("renders a movie", () => {
//   render(<Movie name="Super Mario Brothers" />);

//   const superMarioBrothers = screen.getByText("Super Mario Brothers");

//   expect(superMarioBrothers).toBeInTheDocument();
// });

test("renders a movie", () => {
  render(<Movie name="Super Mario Brothers" />);

  const superMarioBrothers = screen.getByRole("heading", {
    name: "Super Mario Brothers",
  });

  expect(superMarioBrothers).toBeInTheDocument();
});

test("renders a movie with a button that has the name 'unlike Super Mario Brothers'", () => {
  render(<Movie name="Super Mario Brothers" isLiked={true} />);

  const unlikeButton = screen.getByRole("button", {
    name: "unlike Super Mario Brothers",
  });

  expect(unlikeButton).toBeInTheDocument();
});
