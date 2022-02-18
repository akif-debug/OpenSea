import React from 'react'
import './Categories.css'
import CategoriesData from '../../../data/CategoriesData'

const Categories = () => {
	return (
		<section id="Categories">
				<h1 className='categories-heading'>Explore Categories</h1>
				<p className="categories-para">A play of light and shade, chairoscuro is the realm between the light and dark.</p>			
			<div className="container-fluid">
				<div className="row">
				{CategoriesData.map((item,index) => {
					return(
					<div className="col-lg-3">
						<div className="content-box">
							<img src={item.img} alt="Categories" />
							<h4>{item.title} <p>{item.para}</p></h4>
						</div>
					</div>
					)
				})}
				</div>
			</div>
			<button>Explore Marketplace</button> 
		</section>
	)
}

export default Categories