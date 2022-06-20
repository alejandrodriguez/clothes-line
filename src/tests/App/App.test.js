import MockApp from "./MockApp";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(() => (global.window = { location: { pathname: "/" } }));

it("allows you to add an item to cart, increasing that products quantity by 1", () => {
    render(<MockApp />);
    const shopLink = screen.getByText(/shop/i);
    fireEvent.click(shopLink);
    const [addToCartBtn] = screen.getAllByText(/add to cart/i);
    fireEvent.click(addToCartBtn);
    const cartLink = screen.getByRole("link", {
        name: /shopping cart icon/i
    });
    fireEvent.click(cartLink);
    expect(screen.getByText(/quantity: 1/i)).toBeInTheDocument();
});

it("allows you to increase an item's quantity in your cart by one when the add button is pressed", () => {
    render(<MockApp />);
    fireEvent.click(screen.getByText(/home/i)); // redirect to home page
    const shopLink = screen.getByText(/shop/i);
    fireEvent.click(shopLink);
    const [addToCartBtn] = screen.getAllByText(/add to cart/i);
    fireEvent.click(addToCartBtn);
    const cartLink = screen.getByRole("link", {
        name: /shopping cart icon/i
    });
    fireEvent.click(cartLink);
    const addBtn = screen.getByRole("button", { name: /\+/ });
    fireEvent.click(addBtn);
    expect(screen.getByText(/quantity: 2/i)).toBeInTheDocument();
});

it("allows you to decrease an item's quantity in your cart by one when the subtract button is pressed", () => {
    render(<MockApp />);
    fireEvent.click(screen.getByText(/home/i)); // redirect to home page
    const shopLink = screen.getByText(/shop/i);
    fireEvent.click(shopLink);
    const [addToCartBtn] = screen.getAllByText(/add to cart/i);
    fireEvent.click(addToCartBtn);
    const cartLink = screen.getByRole("link", {
        name: /shopping cart icon/i
    });
    fireEvent.click(cartLink);
    const addBtn = screen.getByRole("button", { name: /-/ });
    fireEvent.click(addBtn);
    expect(screen.queryByTestId(/product/i)).not.toBeInTheDocument();
});
