import React from 'react'
import './Section1.scss'
const Section1 = () => {
  return (
    <section className='section1'>
        <div className="container">
            <h2>Shop With Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam <br /> assumenda ea quo cupiditate facere deleniti fuga officia.</p>
            <div className="s1Buttons">
                <a href="#">SHOP NOW</a>
                <a style={{color:"black",background:"white"}} href="#">CLUB MEMBERSHIP</a>
            </div>
        </div>
    </section>
  )
}

export default Section1