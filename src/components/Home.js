import React from 'react'
import { Bacom, BacomContact, CardTeam, CardThree, CardTwo, Props } from './All'

export const Home = () => {
    const propsImg = {
        img: `url('../public/img/propsimg1.png')`
    }
    return (
        <>
            <h1>Home page</h1>
            <CardTwo />
            <CardThree />
            <CardTeam />
            <Bacom />
            <BacomContact />
            <Props data={propsImg} />
        </>
    )
}
