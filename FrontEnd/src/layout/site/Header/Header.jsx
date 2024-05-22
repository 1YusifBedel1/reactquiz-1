import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
return (
    <nav>
        <div className="container">
            <div className="navTop">
                <div className="navIcons">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="navContact">
                    <p><i class="fa-solid fa-phone"></i> (+1) 234 5678 9101</p>
                    <p><i class="fa-regular fa-envelope"></i> shop@yourdomain.com</p>
                </div>
            </div>
            <div className="navBottom">
                <Link className='navA' to={"/"}>SELLING <span>.</span></Link>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/basket"}>Basket</Link></li>
                    <li><Link to={"/admin"}>Admin</Link></li>
                    <li><Link to={"#"}>Blog</Link></li>
                    <li><Link to={"#"}>Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
)
}

export default Header