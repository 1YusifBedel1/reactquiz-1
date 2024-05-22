import React from 'react'
import './Footer.css'
const Footer = () => {
return (
    <footer>
        <div className="container">
            <div className='footTop'>
            <div className='footerDiv'>
                <h3>ABOUT US</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
            </div>
            <div className='footerDiv'>
                <h3>QUICK LINKS</h3>
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='footerDiv'>
                <h3>FOLLOW US</h3>
                <ul style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px"}}>
                    <li> <i class="fa-brands fa-facebook-f"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-linkedin-in"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
            </div>
            </div>
            <div className='footBottom'>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</div>
        </div>
    </footer>
)
}

export default Footer
                    