import React from 'react'
import './Grid.css'
import GridImg1 from '../../assets/grid-img-1.png'
import GridImg2 from '../../assets/grid-img-2.png'
import GridImg3 from '../../assets/grid-img-3.png'
import GridImg4 from '../../assets/grid-img-4.png'
import BrandImg1 from '../../assets/brand-img-1.png'
import BrandImg2 from '../../assets/brand-img-2.png'
import BrandImg3 from '../../assets/brand-img-3.png'
import BrandImg4 from '../../assets/brand-img-4.png'
import BrandImg5 from '../../assets/brand-img-5.png'
import BrandImg6 from '../../assets/brand-img-6.png'
import Customer from './Customer/Customer'
import Categories from './Categories/Categories' 
import Help from './Help/Help' 

const Grid = () => {
	return (
		<section id="grid">
			<div className='container-fluid'>
				<div className="row">

					<div className="col-lg-8">
						<div className="row">
							<div className="col-lg-6"><img className='img-1' src={GridImg1} alt="Grid-Img" /></div>
							<div className="col-lg-6"><img className='img-2' src={GridImg2} alt="Grid-Img" /></div>
							<div className="col-lg-6"><img className='img-3' src={GridImg3} alt="Grid-Img" /></div>
							<div className="col-lg-6"><img className='img-4' src={GridImg4} alt="Grid-Img" /></div>
						</div>	
					</div>

					<div className="col-lg-4">
						<h1>Notable Drops</h1>
						<p>Upload your work (image, video, audio or 3D art), add a title and description, and customize your NFT's stats and unclockable content.</p>
						<button>View all</button>
					</div>
				</div>
			</div>
			<div className="container-fluid brand-container">
				<div className="row">
					<div className="col-lg-12">
						<img src={BrandImg2} alt="brand-img" className="col-brand_img" />
						<img src={BrandImg1} alt="brand-img" className="col-brand_img" />
						<img src={BrandImg3} alt="brand-img" className="col-brand_img" />
						<img src={BrandImg4} alt="brand-img" className="col-brand_img" />
					</div>
					<div className="col-lg-12">
						<img src={BrandImg5} alt="brand-img" className="col-brand_img" />
						<img src={BrandImg6} alt="brand-img" className="col-brand_img" />
					</div>
				</div>
			</div>
			<Customer />
			<Categories />
			<Help />
		</section>
	)
}

export default Grid