import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
const Home = () => {
  const[red,setRed] = useState(false);
  const RedBtn = () =>{
    setRed(!red)
  }
  const[shop,setShop] = useState(false);
  const Shop = () =>{
    setShop(!shop)
  }
  const [card, setCard] = useState([
    {
      id: 0,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 1,
      img: './img/img/g2.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 2,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 3,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 4,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 5,
      img: './img/img/g3.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 6,
      img: './img/img/g4.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 7,
      img: './img/img/g5.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 8,
      img: './img/img/g6.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 9,
      img: './img/img/g7.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 10,
      img: './img/img/g2.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 11,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    }, {
      id: 12,
      img: './img/img/9.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 13,
      img: './img/img/g10.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 14,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 15,
      img: './img/img/g11.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    }
  ])
  return (
    <>
      <div className="header">
        <div className="opa">
          <img src="./img/icon/Logo.svg" alt="" />
        </div>
      </div>
      <div className="diva">
        <img src="./img/icon/s12.png" alt="" />
        <h1 className="shop">Shop your style</h1>
        <img src="./img/img/line.png" alt="" />
      </div>

      <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus adipiscing <br />viverra at tortor, egestas odio parturient. Morbi ut lorem in erat. Et et molestie diam diam ultricies. <br />Scelerisque duis diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.</p>
      <div className="constainer">
        {
          card.map((val) => (
            <div className="card" key={val.id}>
              <div className="card_bg"></div>
              <div className="card_pg"></div>
              <div className="imag11">
                <button onClick={RedBtn} className="favor">
                  {
                    red ?  <FavoriteOutlinedIcon/>  : <FavoriteBorderIcon />
                  }
                      
                </button>
              <button className="add_card" onClick={Shop}>
              ADD TO CARD {shop ? <ShoppingCartRoundedIcon/> : <LocalGroceryStoreOutlinedIcon/>}
              </button>
              </div>
              <div>
                <img src={val.img} alt="" />
                <div>
                  <h1>{val.h1}</h1>
                  <p>{val.p}</p>
                </div>
              </div>
            </div>
          ))

        }

      </div>

    </>
  )
}
export default Home;

