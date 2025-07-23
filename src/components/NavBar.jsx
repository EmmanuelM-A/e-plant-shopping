import '../styles/NavBar.css';

function Navbar({ onHomeClick, onCartClick, onPlantsClick }) {
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
                <a href="#" onClick={onCartClick}>
                    <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <circle cx="80" cy="216" r="12"></circle>
                        <circle cx="184" cy="216" r="12"></circle>
                        <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                            fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;

/**
 * 
 * 
 * <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
                </div>
            </div>
 */