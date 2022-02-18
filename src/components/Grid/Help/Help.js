import React, {useState} from 'react'
import './Help.css'
import {IoChevronDownSharp} from 'react-icons/io'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import HelpData from '../../../data/HelpData'

const Help = () => {
	const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }

        setClicked(index);
    };
	return (
		<section id="help">		
			<div className='container-fluid'>
				<div className="row">
					<div className="col-lg-6">
						<div className="help_content-box">
							<h1 className='help_content-box-1-h1'>We will try to help you if you are confused.</h1>
							<p className='help_content-box-1-para'>A frequently asked question (FAQ) forum is often used in articles, 
							websites, email, lists and online forums where is common questions tend to recur.</p>
						</div>
					</div>
					<div className="col-lg-6">
						{HelpData.map((item,index) => {
							return(
							<div className="help_content-box-2" onClick={() => toggle(index)} key={index}>
								<div className="help_content-box-2-inner-box">
									<h5 className="help_content-box-2-inner-box-h5">{item.h5}</h5>
									<span>{clicked === index ?<MdKeyboardArrowUp className='arrow-icon' /> : <MdKeyboardArrowDown className='arrow-icon' />}</span>
								</div>
								{clicked === index ? (
									<p className='help_content-box-2-para'>{item.p}</p>
								):null}
							</div>
							)
						})}
						<button className='help-button'>View all</button>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Help