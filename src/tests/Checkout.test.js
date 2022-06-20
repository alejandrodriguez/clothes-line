import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkout from "../components/Checkout.js";
import { BrowserRouter } from "react-router-dom";

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

function MockCheckout() {
    return (
        <BrowserRouter>
            <Checkout
                handleQuantityChange={jest.fn()}
                products={mockProducts}
            />
        </BrowserRouter>
    );
}

it("only renders items with quantity > 1", () => {
    render(<MockCheckout />);
    expect(screen.getAllByTestId(/product/i).length).toBe(1);
});
