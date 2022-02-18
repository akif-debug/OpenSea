import React from 'react'
import './Customer.css'
import BlueTick from '../../../assets/bluetick.png'
import CustomerData from '../../../data/CustomerData'

const Customer = () => {
	return (
		<section id='customer'>
		<div className='container-fluid customer'>
		<h1 className='customer-heading'>Trending in All Categories</h1>
		<p className='customer-heading-para'>A play of light and shade, chairoscuro is the realm between the light and dark.</p>
			<div className="row">
				
			{CustomerData.map((item, index) => {
				return(
				<div className="col-lg-4">
					<div className="content-div">
						<img className='CustomerBg' src={item.CustomerBg} alt="CustomerBgOne" />
					</div>
					<div className="text-content-div">
						<img className='customer-img' src={item.CustomerImg} alt="Customer1" />
						<h1 className='customer-name'>{item.CustomerName} <img src={BlueTick} alt="BlueTick" className='bluetick' /></h1>
						<p className='customer-para'>{item.CustomerPara}</p>
					</div>
				</div>
				)
			})}
			</div>
		</div>
		</section>
	)
}

export default Customer