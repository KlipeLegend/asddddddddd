import React, { useState } from 'react'
import { All2, CardThree, Love } from './All'

export const Home = () => {
  const[card,setCard] = useState([
    {
      id:0,
      img:'./img/icon1.svg',
      h1:'ABOUT US',
      p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id:0,
      img:'./img/icon2.svg',
      h1:'GET INVOLVED',
      p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id:0,
      img:'./img/icon3.svg',
      h1:'GIVING BACK',
      p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ])
  return (
      <>
      <div className='gril'>
        <p>Welcome to our CHURCH</p>
        <h1>Become a part of <br /> our community</h1>
        <button className='all_button1111'>Learn more</button>
        <h2>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</h2>
      </div>
      <div className='hedlayn'>
        <p>SUB-HEADLIE</p>
        <h1>a church that's relevant</h1>
      </div>
      <div className="cont">
        {
        card.map((val)=>(
          <div className="cond" key={val.id}>
            <img src={val.img} alt="" />
            <h1>{val.h1}</h1>
            <p>{val.p}</p>
          </div>
        ))
        }
      </div>
    
      <Love/>
      <CardThree/>
      <All2/>
      </>
  )
}
