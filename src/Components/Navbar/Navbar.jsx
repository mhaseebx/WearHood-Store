import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Media-Assets/logo.png'
import cart_icon from '../Media-Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState('shop')
    const {getTotalCartItems} = useContext(ShopContext)

    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>WearHood</p>
                </div>

                <ul className='nav-menu'>
                    <li onClick={() => setMenu('shop')}><NavLink style={{ textDecoration: 'none', color: '#626262' }} to='/'>Shop</NavLink> {menu === 'shop' ? <hr /> : ''} </li>

                    <li onClick={() => setMenu('men')}> <NavLink style={{ textDecoration: 'none', color: '#626262' }} to='/men' > Men </NavLink> {menu === 'men' ? <hr /> : ''} </li>

                    <li onClick={() => setMenu('women')}><NavLink style={{ textDecoration: 'none', color: '#626262' }} to='/women' > Women </NavLink> {menu === 'women' ? <hr /> : ''}</li>

                    <li onClick={() => setMenu('kids')}> <NavLink style={{ textDecoration: 'none', color: '#626262' }} to='/kids' > Kids </NavLink> {menu === 'kids' ? <hr /> : ''}</li>
                </ul>

                <div className="nav-login-cart">
                    <NavLink to='/login'><button>Login</button></NavLink>

                    <NavLink to='/cart'><img src={cart_icon} alt="" /></NavLink>

                    <div className="nav-cart-count">
                        {getTotalCartItems()}
                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar