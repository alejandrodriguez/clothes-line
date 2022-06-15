import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import { hatsrc } from "./product-images/hat.jpg";
import { shirtsrc } from "./product-images/shirt.jpg";
import { pantssrc } from "./product-images/pants.jpg";
import { shoessrc } from "./product-images/shoes.jpg";
import { suitsrc } from "./product-images/suit.jpg";
import { watchsrc } from "./product-images/watch.jpg";

function App() {
    const productsData = [
        {
            name: "hat",
            src: hatsrc,
            id: 1,
            quantityInShoppingCart: 0
        },
        {
            name: "shirt",
            src: shirtsrc,
            id: 2,
            quantityInShoppingCart: 0
        },
        {
            name: "pants",
            src: pantssrc,
            id: 3,
            quantityInShoppingCart: 0
        },
        {
            name: "shoes",
            src: shoessrc,
            id: 4,
            quantityInShoppingCart: 0
        },
        {
            name: "suit",
            src: suitsrc,
            id: 5,
            quantityInShoppingCart: 0
        },
        {
            name: "watch",
            src: watchsrc,
            id: 6,
            quantityInShoppingCart: 0
        }
    ];

    const [products, setProducts] = useState(productsData);

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Home path="/" />
                <Shop path="/shop" />
            </Routes>
        </div>
    );
}

export default App;
