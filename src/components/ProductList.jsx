import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import { addItem } from '../redux/CartSlice';

import '../styles/CartItem.css';
import Navbar from './NavBar';
import plantsData from '../assets/data/plants-data.json';
import '../styles/ProductList.css';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});

    const [plantsArray, setPlantsArray] = useState([]);

    // Get cart items from Redux store
    const cartItems = useSelector(state => state.cart.items);

    // Calculate total quantity of items in the cart
    const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

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
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
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
                cartItemCount={totalCartQuantity} // Pass totalCartQuantity to Navbar
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