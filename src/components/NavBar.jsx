import '../styles/NavBar.css';

function Navbar({ onHomeClick, onCartClick, onPlantsClick, cartItemCount }) { // Add cartItemCount prop
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img
                    src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                    alt="Logo"
                    className="logo"
                    onClick={onHomeClick}
                />
                <div className="branding" onClick={onHomeClick}>
                    <h3>Paradise Nursery</h3>
                    <i>Where Green Meets Serenity</i>
                </div>
            </div>
            <div className="navbar-right">
                <a href="#" onClick={onPlantsClick}>Plants</a>
                <a href="#" onClick={onCartClick} className="cart-icon-container"> {/* Add a class for styling */}
                    <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <circle cx="80" cy="216" r="12"></circle>
                        <circle cx="184" cy="216" r="12"></circle>
                        <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                            fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    {cartItemCount > 0 && ( // Conditionally render the count if greater than 0
                        <span className="cart-item-count">{cartItemCount}</span>
                    )}
                </a>
            </div>
        </nav>
    );
}

export default Navbar;