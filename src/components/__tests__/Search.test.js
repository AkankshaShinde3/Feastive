import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component with Search Component", async () => {

  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", {name: "Search"});

  expect(searchBtn).toBeInTheDocument();

});

it("Should render the body component with Search Component", async () => {

  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", {name: "Search"});
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, {target: {value: "cafe"}});
  // expect(searchBtn).toBeInTheDocument();

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);
});


it("Should filter the Top Rated Restaurant", async () => {
  
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
  fireEvent.click(topRatedBtn);

  const cardAfterFilter = screen.getAllByTestId("resCard"); 
  expect(cardAfterFilter.length).toBe(6);
})