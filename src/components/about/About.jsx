import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to [Your Company Name], your trusted partner in finding the perfect rental home. Our mission is to provide exceptional rental properties and outstanding service to tenants and property owners alike. With years of experience in the real estate market, we have built a reputation for reliability, professionalism, and customer satisfaction.</p>
            <p>We specialize in a wide range of rental properties, including single-family homes, apartments, townhouses, and luxury estates. Our comprehensive services include:

Property Listings: A diverse selection of rental properties to suit every budget and lifestyle.
Tenant Services: Personalized assistance throughout the rental process, from finding the right home to ongoing support during your tenancy.
Property Management: Professional management services for property owners, ensuring their investments are well-maintained and generating optimal returns.</p>
            <button className='btn2'>About us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
