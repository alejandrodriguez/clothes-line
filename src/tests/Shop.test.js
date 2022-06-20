import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "../components/Shop.js";

const mockProducts = [
    {
        name: "Zebra Print Hat",
        className: "hat",
        price: 20,
        id: 1,
        quantityInCart: 1
    },
    {
        name: "Navy Blue Shirt",
        className: "shirt",
        price: 30,
        id: 2,
        quantityInCart: 0
    },
    {
        name: "Bell Bottom Pants",
        className: "pants",
        price: 40,
        id: 3,
        quantityInCart: 0
    }
];

it("renders all items on the screen, irrespective of quantityInCart", () => {
    render(<Shop products={mockProducts} handleQuantityChange={jest.fn()} />);
    expect(screen.getAllByTestId(/product/i).length).toBe(3);
});
