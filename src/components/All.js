import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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
            <p className="lorem1">LOREM IPSUM DOLOR SIT AMET</p>
            <div className='lorems'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida. <br /> <br />
                    Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna duis convallis convallis tellus id. Feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet porttitor eget.
                </p>
            </div>
            <div className="baby">
                <img src="./img/baby.png" alt="" />
            </div>
            <h1 className='eych'>LOREM IPSUM DOLOR SIT AMET</h1>
            <div className="lorems2">
                <p>Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna duis convallis convallis tellus id. Feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet porttitor eget.</p>
                <h4>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>
                <h1>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h1>
                <p>We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want to serve the world around us. It’s why we support mission work all across the globe Regardless of what your next step in faith is, we want to help you take that next step Our church is10% of our annual income to</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing
                    </li>
                    <li>Purus sit amet luctus venenatis lectus magna
                    </li>
                    <li>Aenean vel elit scelerisque mauris. Imperdiet sed euismod</li>
                </ul>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>
                <p>Saepe magni aut maxime vel voluptatem. Ab eveniet neque placeat qui porro ab minus voluptas. Dicta praesentium neque vero mollitia aperiam sed enim. Lacinia quis vel eros donec ac odio.</p>
            </div>
        </>

    )
}
export const Post2 = () => {
    return (
        <>
            <div className="boook">
                <div className="bok1">
                    <img src="./img/bok.png" alt="" />
                    <h1>HOW TO TRULY TRUST SOMEONE  </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.</p>
                    <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.</p>
                </div>
                <div className="bok2">
                    <div className="reg">
                        <h1>REGISTER NOW</h1>
                        <p>No 233 Main St. New York,  13 May, 2018</p>
                        <form action="" className='inut'>
                            <h5>Full Name</h5>
                            <input type="text" placeholder='Username' />
                            <h5>Email</h5>
                            <input type="Email" placeholder='Email' />
                        </form>
                        <button className='all_button111'>REGISTER NOW</button>
                    </div>
                </div>
            </div>
            <h1 className='up'>UPCOMING SERMONS</h1>
            <CardFour/>
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
                        <Link to='/post2'><button className='btn1'> READ MORE</button></Link>
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
                        <Link to='/post'> <button className='btn'>Register</button></Link>

                    </div>
                    <div className="dodo2">
                        <img src='./img/alla.png' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// bahrom okaaaaa
export const CardTwo = () => {
    const dataTwo = [
        {
            id: 0,
            h6: "Relationship",
            h3: "WATCH AND LISTEN TO OUR SERMONS",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        },
        {
            id: 1,
            h6: "Relationship",
            h3: "WATCH AND LISTEN TO OUR SERMONS",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        },
        {
            id: 2,
            h6: "Relationship",
            h3: "WATCH AND LISTEN TO OUR SERMONS",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        },
        {
            id: 3,
            h6: "Relationship",
            h3: "WATCH AND LISTEN TO OUR SERMONS",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        }
    ]
    return (
        <>
            <div className="cardHeader all_mt">
                <h5>Read our Blog</h5>
                <h1 className='all_h1'>SHARE, INSPIRE, INNOVATE</h1>
            </div>
            <div className="all_card">
                {
                    dataTwo.map((val) => (
                        <div className="home_card home_card1" key={val.id}>
                            <h5 className='home_card_h5'>{val.h6}</h5>
                            <h3 className='home_card_h3'>{val.h3}</h3>
                            <p className='home_card_p'>{val.p}</p>
                            <h4 className='home_card_h4'>{val.h4}</h4>
                            <h4 className='home_card_h4'>{val.ntch}</h4>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export const CardThree = () => {
    const dataTree = [
        {
            id: 0,
            h6: "Relationship",
            img: './img/tree1.png',
            h3: "WATCH AND LISTEN TO OUR SERMONS",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        },
        {
            id: 1,
            h6: "Relationship",
            img: './img/tree2.png',
            h3: "WATCH AND LISTEN TO OUR SERMONS",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        },
        {
            id: 2,
            h6: "Relationship",
            img: './img/tree3.png',
            h3: "WATCH AND LISTEN TO OUR SERMONS",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        },
        {
            id: 3,
            h6: "Relationship",
            img: './img/tree4.png',
            h3: "WATCH AND LISTEN TO OUR SERMONS",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        }
    ]
    return (
        <>
            <div className="join_cards">
                <div className="cardHeader all_mt">
                    <h5>Watch and listen</h5>
                    <h1 className='all_h1'>THE benefits of <br /> joining our church</h1>
                </div>
                <div className="all_card">
                    {
                        dataTree.map((val) => (
                            <div className="tree_card" key={val.id}>
                                <div className="card_header">
                                    <img src={val.img} alt="" />
                                    <div className="card_hover">
                                        <h3 className="home_card_h3">{val.h3}</h3>
                                        <p className="home_card_p">{val.p}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export const CardTeam = () => {
    const dataTree = [
        {
            id: 0,
            h6: "Relationship",
            img: './img/team1.png',
            h3: "Kim Bowen",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        },
        {
            id: 1,
            h6: "Relationship",
            img: './img/team2.png',
            h3: "Danielle Watkins",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        },
        {
            id: 2,
            h6: "Relationship",
            img: './img/team3.png',
            h3: "Naomi Craig",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        },
        {
            id: 3,
            h6: "Relationship",
            img: './img/team4.png',
            h3: "Santos Payne",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            h4: "By Mathew Johnson",
            ntch: "Tuesday 13 May, 2021"
        }
    ]
    return (
        <>
            <div className="cardHeader all_mt">
                <h5>church members</h5>
                <h1 className='all_h1'>Meet our Inspirational team</h1>
            </div>
            <div className="all_card">
                {
                    dataTree.map((val) => (
                        <div className="tree_card team_card team_card_mt" key={val.id}>
                            <div className="team_img">
                                <img src={val.img} alt="" />
                            </div>
                            <h3>{val.h3}</h3>
                            <h3>{val.h4}</h3>
                            <div className="card_icons">
                                <img src="./img/face.svg" alt="" />
                                <img src="./img/twi.svg" alt="" />
                                <img src="./img/in.svg" alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export const Bacom = () => {
    return (
        <>
            <div className="bacom">
                <div className="bacom_text">
                    <h6>Welcome to our CHURCH</h6>
                    <h1 className="all_h1">Become a part of <br /> our community</h1>
                    <button className='all_button'>Learn more</button>
                    <h2><span><img src="./img/Line.png" alt="" /></span> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</h2>
                </div>
            </div>
        </>
    )
}

export const BacomContact = () => {
    return (
        <>
            <div className="bacom cotact_img">
                <div className="bacom_text">
                    <h3>ABOUT US</h3>
                    <h1 className="all_h1"> Serving the world around us</h1>
                </div>
            </div>
        </>
    )
}
export const BacomContact2 = () => {
    return (
        <>
            <div className="bacom cotact_img2">
                <div className="bacom_text">
                    <h3>SERMON</h3>
                    <h1 className="all_h1"> TAKE PART IN OUR SERMON</h1>
                </div>
            </div>
        </>
    )
}
export const BacomContact1 = () => {
    return (
        <>
            <div className="bacom cotact_img3">
                <div className="bacom_text1">
                    <h3>CONTACT</h3>
                    <h1 className="all_h12"> GET IN TOUCH WITH <br /> OUR CHURCH</h1>
                </div>
            </div>
        </>
    )
}
export const CardFour = () => {
    const Four = [
        {
            id: 0,
            h6: "20 JULY",
            h3: "100 random acts of kindness",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            h4: "Friday 23:39 IST Saturday",
            ntch: "No 233 Main St. New York"
        },
        {
            id: 1,
            h6: "20 JULY",
            h3: "Faith is a process, not a destination  ",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            h4: "Friday 23:39 IST Saturday",
            ntch: "No 233 Main St. New York"
        },
        {
            id: 2,
            h6: "20 JULY",
            h3: "there is nothing impossible",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            h4: "Friday 23:39 IST Saturday",
            ntch: "No 233 Main St. New York"
        },
        {
            id: 3,
            h6: "20 JULY",
            h3: "WATCH AND LISTEN TO OUR SERMONS",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            h4: "Friday 23:39 IST Saturday",
            ntch: "No 233 Main St. New York"
        }
    ]
    return (
        <>
            <div className="cart">
                {
                    Four.map((val) => (
                        <div className="cadr" key={val.id}>
                            <h5>{val.h6}</h5>
                            <h1>{val.h3}</h1>
                            <p>{val.p}</p>
                            <h4>{val.h4}</h4>
                            <h4>{val.ntch}</h4>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
