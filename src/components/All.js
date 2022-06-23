import React, { useState } from 'react'
import Carusel from './Carusel'
export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='fits'>
                    <img src="./img/fit.svg" alt="" />
                    <h3>© Copyright Finsweet 2022</h3>
                    <h3>(480) 555-0103</h3>
                    <h3>4517 Washington Ave. </h3>
                    <h3>finsweet@example.com</h3>
                </div>
                <div className='qaicjk'>
                    <h1>Quicklinks</h1>
                    <h3>About us</h3>
                    <h3>Sermons</h3>
                    <h3>EVENTS</h3>
                    <h3>BLOG</h3>
                </div>
                <div className='qaicjk'>
                    <h1>Connect</h1>
                    <div className='qa'>
                        <img src="./img/facebook.svg" alt="" />
                        <img src="./img/twitter.svg" alt="" />
                        <img src="./img/instagram.svg" alt="" />
                    </div>
                </div>
                <div className='su'>
                    <h1>Subscribe to get Latest <br /> Updates and News</h1>
                    <form action="" className='subss'>
                        <input type="text" placeholder='Yourmail@gmail.com' />
                        <button className='all_button11'>SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export const Over = () => {
    return (
        <>
            <div className="over">
                <div className='ov'>
                    <img src="./img/over.png" alt="" />
                </div>

                <div className="over_card">
                    <div className='pad'>
                        <div>
                            <h1>We want to <br /> serve the world <br /> around us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <br />
                                adipiscing elit, sed do.</p>
                            <button className='all_button111'>VISIT</button>
                        </div><div>
                            <img src="./img/string.png" alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export const Love = () => {
    const [modal, setModal] = useState(false);
    const Modal = () => {
        setModal(!modal)
    }
    return (
        <>
            <div className='line all_mt'>
                <h2>SUB-HEADLINE</h2>
                <h1>SUB-HEADLINE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   </p>

                <button className="all_button11">READ MORE</button>
            </div>
            <Carusel />
            <div className="tagi1">
                <h4>our mission & vision</h4>
                <h1>celebrate WITH US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                <button className='read' onClick={Modal}>
                    Read more
                </button>
            </div>
            <div className={modal ? "con activ" : 'con'}>
                <div className='con1'>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus architecto amet, mollitia qui nam expedita officiis modi tenetur sint praesentium nemo veritatis nostrum quis harum tempore repellendus ipsa rem molestiae maiores recusandae ad consectetur? Officia voluptas odit suscipit vel. Dolore illo qui eos ipsa nesciunt numquam, modi vero porro cupiditate pariatur, eum et aspernatur, a beatae. Exercitationem consequatur beatae quasi voluptas praesentium voluptates consequuntur accusamus. Distinctio labore vero aliquid voluptates accusamus tenetur numquam. Neque, voluptatibus obcaecati temporibus debitis, laudantium dicta quisquam sed totam, ducimus perspiciatis explicabo? Veniam earum a libero labore quidem sit, in explicabo voluptatum animi aut sapiente?</h2>
                    <button onClick={Modal} className='close'>X</button>
                </div>

            </div>
        </>
    )
}
export const Benefits = () => {
    const [map, setMap] = useState([
        {
            id: 0,
            name: 'find fulfillment and joy',
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
        },
        {
            id: 1,
            img: "./img/sleep.png"
        },
        {
            id: 2,
            img: "./img/book.png"
        },
        {
            id: 4,
            name: 'shared values',
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
        },

        {
            id: 5,
            name: 'charity events',
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
        },
        {
            id: 6,
            img: "./img/hands.png"
        },
        {
            id: 7,
            img: "./img/struk.png"
        },
        {
            id: 8,
            name: 'find fulfillment and joy',
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
        }
    ])
    return (
        <>
            <h1 className='the'>THE benefits of <br /> joining our church</h1>
            <div className="ota">
                {
                    map.map((val) => (
                        <div className="bola" key={val.id}>
                            <div className='qiz'>
                                <h1>{val.name}</h1>
                                <p>{val.p}</p>
                            </div>
                            <div className='qiz'>
                                <img src={val.img} alt="" />
                            </div>
                            {/* <div className='qiz'>
                                <h1>{val.name}</h1>
                                <p>{val.p}</p>
                            </div>
                            <div className='qiz'>
                                <img src={val.img} alt="" />
                            </div>
                            <div className='qiz'>
                                <h1>{val.name}</h1>
                                <p>{val.p}</p>
                            </div>
                            <div className='qiz'>
                                <img src={val.img} alt="" />
                            </div>
                            <div className='qiz'>
                                <h1>{val.name}</h1>
                                <p>{val.p}</p>
                            </div>
                            <div className='qiz'>
                                <img src={val.img} alt="" />
                            </div> */}
                        </div>

                    ))
                }
            </div>
        </>
    )
}
export const Post = () => {
    return (
        <>
            <div className="comp">
                <h1>HOW TO SHOW COMPASSION</h1>
                <p>13 May, 2018 By Mathew Johnson</p>
            </div>
            <div className="katta_img">
                <img src="./img/big_man.png" alt="" />
            </div>
        </>

    )
}

export const All3 = () => {
    return (
        <div>
             <div className="dodo4">
                <p>OUR BLOG</p>
                <h1> MOST RECENT POST</h1>
                <div className="dodo3">
                <div className="dodo2">
                    <img src='./img/alla1.jpg' alt="" />
                </div>
                <div className="doda">
                    <h5>Tuesday 13 May, 2022</h5>
                    <h2>CHURCH WAS DOING WHAT HE OFTEN <br /> DID WHEN DROPPED AN ORACLE</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> Duis aute irure dolor.</p>
                    <button className='btn1'> READ MORE</button>
                </div>
             </div>
        </div>
    </div>
    );
};

export const All2 = () => {
    return (
        <div>
            <div className="dodo">
                <p>Upcoming SERMONS</p>
                <h1>JOIN US AND BECOME PART <br /> OF SOMETHING GREAT</h1>
                <div className="dodo3">
                <div className="dodo1">
                    <h5>Upcoming Event</h5>
                    <h2>WATCH AND LISTEN TO OUR SERMONS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
                    <p className='soat'>Friday 23:39 IST <br /> Saturday 11:20 ISD</p>
                    <p className='soat'>No 233 Main St. New York, <br /> United States</p>
                    <button className='btn'>Register</button>
                </div>
                <div className="dodo2">
                    <img src='./img/alla.png' alt="" />
                </div>
                </div>
            </div>
        </div>
    );
};

