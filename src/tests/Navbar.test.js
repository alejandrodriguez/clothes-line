import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

function MockNavbar() {
    return (
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
}

it("renders 3 links on the screen", () => {
    render(<MockNavbar />);
    expect(screen.getAllByRole("link").length).toBe(3);
});
