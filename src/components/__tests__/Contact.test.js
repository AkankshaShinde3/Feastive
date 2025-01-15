import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {

  beforeAll(() => {

  });
  
  test("Should check whether the contact is loaded on to the document", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  //another test
  it("Should check whether the button is inside the contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside the Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("", () => {
    render(<Contact />);

    const inputBox = screen.getAllByRole("textbox");

    expect(inputBox.length).toBe(2);
  });
});
