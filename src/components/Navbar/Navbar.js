import React from 'react';
import './Navbar.css';
import brandimg from '../../assets/brand-img.png';
import roundOutline from '../../assets/round-outline.png';
import heroSideImg from '../../assets/hero-side-img.png';
import {RiSearchLine} from 'react-icons/ri';
import {BsWallet2} from 'react-icons/bs';  
import {FaBars} from 'react-icons/fa';  

const Navbar = () => {
	return (
		<section id="home">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<div className='navar-left-side-content'>
						<a className="navbar-brand" href="#"><img className='brandimg' src={brandimg} alt="brand-img" />OpenSea</a>
					</div>
					<div className="navbar-right-side-content">
						<input type="text" className="search-input" placeholder='Search' /><RiSearchLine className='search-navbar-icons' />
						<BsWallet2 className='navbar-icons' />
						<FaBars className='navbar-icons' />
					</div>
				</div>
			</nav>
			{/*container-------------------*/}
			<div className="container-fluid home-headings">
				<div className="row">
					<div className="col-lg-6 first-col">
						<div className="content-box">
							<h1 className='home-headings_first-heading'>Discover. Collect & Sell. Extraodinary</h1>
							<h1 className='home-headings_second-heading'>NFT's <img src={roundOutline} alt="roundOutline" /></h1>
							<p className="home-headings_first-para">On the world's first & largest NFT marketplace</p>
							<button className="home-headings-button">Explore</button>
							<button className="home-headings-button border">Create</button>
							<p className="home-headings_second-para"><a href=""> Get Featured on the homepage</a></p>
						</div>
					</div>
					<div className="col-lg-6 second-col">
						<div className="img-col-div">
							<img src={heroSideImg} alt="" />
							<p className='img_first-para'><a href="#">SoulCurryArt</a></p>
							<p className='img_second-para'>A play of light and shade, chairoscurse is the realm between the light and dark</p>
							<button className="img_button">Place bid</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Navbar