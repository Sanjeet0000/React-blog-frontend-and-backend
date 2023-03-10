import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    const{imgUrl, title, description, articleid, category, date} = props;
  return (
    <NavLink className='link' state={{ title: title, img: imgUrl, description: description, category: category, date: date}}  to={`/category/${articleid}`}>
        <div className={articleid} >
            <div className='card_main'>
                <div className='card_img'>
                    <img src={imgUrl} alt= "News-data"/>
                </div>
                <div className='card_details'>
                    <h3>{title}</h3>
                    <p>{description}...<span style={{color:"gray"}}>Read More</span></p>
                </div>
            </div>
            
        </div>
    </NavLink>
    )
}

export default Card;