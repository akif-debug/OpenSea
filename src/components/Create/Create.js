import React from 'react'
import './Create.css'
import CreateData from '../../data/CreateData.js'

const Create = () => {
	return (
		<section id="create">
			<div className='container'>
				<div className="row">
					<h1 className='create_heading'>Create & Sell Your NFT's</h1>
					<p className='create_para'>A Play of light and shade, chairoscuro is the realm between light and dark</p>
					{CreateData.map((item, index) => {
						return(
							<div className="col-lg-3">
								<div className="text-content_div">
									<h1 className="text-content_div_title">{item.title}</h1>
									<p className="text-content_div_para">{item.para}</p>
								</div>	
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Create