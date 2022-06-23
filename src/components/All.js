import React from 'react'

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
                    <h6>Contact</h6>
                    <h1 className="all_h1">Get in touch with <br /> our CHURCH</h1>
                </div>
            </div>
        </>
    )
}

export const Props = ({ data }) => {
    return (
        <>
            <div className="props_img" style={{ background: data.img }}>
                <h5>About us</h5>
                <h1>Serving the world around us</h1>
            </div>
        </>
    )
}