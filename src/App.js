import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import hatsrc from "./product-images/hat.jpg";
import shirtsrc from "./product-images/shirt.jpg";
import pantssrc from "./product-images/pants.jpg";
import shoessrc from "./product-images/shoes.jpg";
import suitsrc from "./product-images/suit.jpg";
import watchsrc from "./product-images/watch.jpg";

function App() {
    const productsData = [
        {
            name: "hat",
            price: 20,
            src: hatsrc,
            id: 1,
            quantityInCart: 0
        },
        {
            name: "shirt",
            price: 30,
            src: shirtsrc,
            id: 2,
            quantityInCart: 0
        },
        {
            name: "pants",
            price: 40,
            src: pantssrc,
            id: 3,
            quantityInCart: 0
        },
        {
            name: "shoes",
            price: 60,
            src: shoessrc,
            id: 4,
            quantityInCart: 0
        },
        {
            name: "suit",
            price: 150,
            src: suitsrc,
            id: 5,
            quantityInCart: 0
        },
        {
            name: "watch",
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
