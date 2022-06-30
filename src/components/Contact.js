import React from 'react'
import { BacomContact1 } from './All'

export const Contact = () => {
    return (
        <div>
            <BacomContact1 />
            <h1 className='salom'>CONTACT FORM:</h1>
            <div className="batle">

                <div className="b1">
                    <input type="text" placeholder='Your full Name' />
                    <input type="Email" placeholder='Yur Email' />
                    <input type="text" placeholder='Query Related' />
                    <input type="text" placeholder='Message' className='message' />
                    <button className='mes'>SEND MESSAGE</button>
                </div>
                <div className="b2">
                    <p>Adress</p>
                    <h1>NH 234   Public Square <br />
                        San Francisco  65368</h1>
                    <p>Contact Details</p>
                    <h1>(480) 555-0103 <br /> finsweet@example.com</h1>
                    <p>Find us here</p>
                    <div className='ads'>
        <img src="./img/fa.svg" alt="" />
                    <img src="./img/tw.svg" alt="" />

                    <img src="./img/in.svg" alt="" />
                    </div>
            

                </div>
            </div>
        </div>
    )
}

