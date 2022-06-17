import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import hatsrc from "./images/hat.jpg";
import shirtsrc from "./images/shirt.jpg";
import pantssrc from "./images/pants.jpg";
import shoessrc from "./images/shoes.jpg";
import suitsrc from "./images/suit.jpg";
import watchsrc from "./images/watch.jpg";

function App() {
    const productsData = [
        {
            name: "Zebra Print Hat",
            className: "hat",
            price: 20,
            src: hatsrc,
            id: 1,
            quantityInCart: 0
        },
        {
            name: "Navy Blue Shirt",
            className: "shirt",
            price: 30,
            src: shirtsrc,
            id: 2,
            quantityInCart: 0
        },
        {
            name: "Bell Bottom Pants",
            className: "pants",
            price: 40,
            src: pantssrc,
            id: 3,
            quantityInCart: 0
        },
        {
            name: "Black Boots",
            className: "shoes",
            price: 60,
            src: shoessrc,
            id: 4,
            quantityInCart: 0
        },
        {
            name: "Gray Suit",
            className: "suit",
            price: 150,
            src: suitsrc,
            id: 5,
            quantityInCart: 0
        },
        {
            name: "Luxury Watch",
            className: "watch",
            price: 250,
            src: watchsrc,
            id: 6,
            quantityInCart: 0
        }
    ];

    const [products, setProducts] = useState(productsData);

    function handleQuantityChange(numOrOperation, product) {
        const index = products.indexOf(product);
        if (index === -1) {
            throw new Error("Product could not be found.");
        }
        let updatedProducts = [...products];
        updatedProducts[index] = { ...product };
        if (typeof numOrOperation === "number") {
            updatedProducts[index].quantityInCart = numOrOperation;
        } else if (numOrOperation === "add") {
            updatedProducts[index].quantityInCart =
                updatedProducts[index].quantityInCart + 1;
        } else {
            updatedProducts[index].quantityInCart =
                updatedProducts[index].quantityInCart - 1;
        }
        setProducts(updatedProducts);
    }

    function getProductsInCart() {
        return products.filter(product => product.quantityInCart > 0).length;
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar productsInCart={getProductsInCart()} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/shop"
                        element={
                            <Shop
                                products={products}
                                handleQuantityChange={handleQuantityChange}
                            />
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <Checkout
                                handleQuantityChange={handleQuantityChange}
                                products={products}
                            />
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
