import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

import '../styles/CartItem.css';
import Navbar from './NavBar';
import plantsData from '../assets/data/plants-data.json';
import '../styles/ProductList.css';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart, setAddedToCart] = useState({});

    const [plantsArray, setPlantsArray] = useState([]);

    useEffect(() => {
        setPlantsArray(plantsData);
        console.log("Loaded data:", plantsData);
    }, []);

    const dispatch = useDispatch();

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prev) => ({
            ...prev,
            [plant.name]: true
        }));
    };


    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <Navbar
                onHomeClick={handleHomeClick}
                onCartClick={handleCartClick}
                onPlantsClick={handlePlantsClick}
            />
            {showCart ? (
                <CartItem onContinueShopping={handleContinueShopping} />
            ) : (
                <div className="product-grid">
                    {plantsArray.map(category =>
                        category.plants.map(plant => (
                            <div key={plant.name} className="product-card">
                                <img src={plant.image} alt={plant.name} style={{ width: '200px', height: '200px' }} />
                                <h3>{plant.name}</h3>
                                <p>{plant.description}</p>
                                <p>{plant.cost}</p>
                                <button
                                    onClick={() => handleAddToCart(plant)}
                                    disabled={!!addedToCart[plant.name]}
                                >
                                    {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                                </button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default ProductList;
