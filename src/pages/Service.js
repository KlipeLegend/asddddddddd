import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const Service = () => {
  const [bos, setBos] = useState(false);
  const Bos = () => { }
  const [red, setRed] = useState(false);
  const RedBtn = () => {
    setRed(!red)
  }
  const [shop, setShop] = useState(false);
  const Shop = () => {
    setShop(!shop)
  }
  const [box, setBox] = useState(false);
  const Box = () => {
    setBox(!box)
  }
  const [box1, setBox1] = useState(false);
  const Box1 = () => {
    setBox1(!box1)
  }
  const [box2, setBox2] = useState(false);
  const Box2 = () => {
    setBox2(!box2)
  }
  const [box3, setBox3] = useState(false);
  const Box3 = () => {
    setBox3(!box3)
  }
  const [box4, setBox4] = useState(false);
  const Box4 = () => {
    setBox4(!box4)
  }
  const [buttons, setButtons] = useState([
    {
      id: 0,
      btn: 'All'
    },
    {
      id: 1,
      btn1: 'Dresses'
    },
    {
      id: 2,
      btn2: 'Denim'
    },
    {
      id: 3,
      btn3: 'Jeans'
    },
    {
      id: 4,
      btn4: 'Jumpsuits'
    },
    {
      id: 5,
      btn5: 'Tops'
    },

    {
      id: 6,
      btn6: 'Jackets'
    },
    {
      id: 7,
      btn7: 'Pants'
    },
    {
      id: 8,
      btn8: 'Shorts'
    },
    {
      id: 9,
      btn9: 'Skirts'
    },
    {
      id: 10,
      btn10: 'Loungerie & underwear'
    },
    {
      id: 11,
      btn11: 'Leather'
    },
    {
      id: 12,
      btn12: 'Sweaters & knits'
    },
  ])
  const [sizeFun, setSizeFun] = useState([
    {
      id: 0,
      btn: 'XXS'
    },
    {
      id: 1,
      btn: 'XS'
    },
    {
      id: 2,
      btn: 'S'
    },
    {
      id: 3,
      btn: 'M'
    },
    {
      id: 4,
      btn: 'L'
    },
    {
      id: 5,
      btn: 'XL'
    },
    {
      id: 6,
      btn: '23'
    },
    {
      id: 7,
      btn: '24'
    },
    {
      id: 8,
      btn: '25'
    },
    {
      id: 9,
      btn: '26'
    },
    {
      id: 10,
      btn: '27'
    },
    {
      id: 11,
      btn: '28'
    },
    {
      id: 12,
      btn: '29'
    },
    {
      id: 13,
      btn: '30'
    },
    {
      id: 14,
      btn: '31'
    },
    {
      id: 15,
      btn: '32'
    }
  ])

  const [card, setCard] = useState([
    {
      id: 0,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 1,
      img: './img/img/g1.png',
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
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 6,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 7,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 8,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 9,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 10,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    },
    {
      id: 11,
      img: './img/img/g1.png',
      h1: 'Grey bee wrist-watch',
      p: '$ 10.000'
    }

  ])
  const [sizeId, setSizeId] = useState(null)
  return (
    <>
      <h1 className="caaa">CLOTHES</h1>
      <div className="clothes">

        <div className="category">
          <h1>CATEGORY</h1>
          <div>
            {
              buttons.map((e) => (
                <div className="cat_buttons" key={e.id}>
                  <button onClick={Bos}>{e.btn}</button>
                  <button>{e.btn1}</button>
                  <button>{e.btn2}</button>
                  <button>{e.btn3}</button>
                  <button>{e.btn4}</button>
                  <button>{e.btn5}</button>
                  <button>{e.btn6}</button>
                  <button>{e.btn7}</button>
                  <button>{e.btn8}</button>
                  <button>{e.btn9}</button>
                  <button>{e.btn10}</button>
                  <button>{e.btn11}</button>
                  <button>{e.btn12}</button>
                </div>
              ))
            }

          </div>
          <div className="size">
            <h1>SIZE</h1>
            <div className="size_btn">
              {
                sizeFun.map((val) => (
                  <button key={val.id} onClick={(event) => setSizeId(val.id)} className={val.id === sizeId ? 'size_btn_button activ' : 'size_btn_button'}>{val.btn}</button>
                ))
              }
            </div>
          </div>
          <div className="color">
            <h1>COLOR</h1>
            <div className="color_btn">
              <button>Beige</button>
              <button>Blue</button>
              <button>Black</button>
              <button>Orange</button>
              <button>Green</button>
              <button>Brown</button>
              <button>Purple</button>
              <button>Gold</button>
              <button>Toupe</button>
              <button>White</button>
              <button>Pink</button>
              <button>Red</button>
            </div>
          </div>
          <div className="price">
            <h1>PRICE</h1>
            <div className="price_btn" >
              <div className='dollor'>
                <button onClick={Box}>
                  {
                    box ? <CheckBoxOutlineBlankIcon style={{ fontSize: '30px' }} /> : <CheckBoxIcon style={{ fontSize: '30px' }} />
                  }
                </button>
                <h2>$0 - $10,000</h2>
              </div>
              <div className='dollor'>
                <button onClick={Box1}>
                  {
                    box1 ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />
                  }
                </button>
                <h2> $10,000 - $20,000</h2>
              </div>
              <div className='dollor'>
                <button onClick={Box2}>
                  {
                    box2 ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />
                  }
                </button>
                <h2>$20,000 - $50,000</h2>
              </div>
              <div className='dollor'>
                <button onClick={Box3} >
                  {
                    box3 ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />
                  }
                </button>
                <h2>$50,000 - $100,000</h2>
              </div>
              <div className='dollor'>
                <button onClick={Box4}>
                  {
                    box4 ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />
                  }
                </button>
                <h2>$100,000 - $200,000</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {
            card.map((val) => (
              <div className="cards" key={val.id}>
                <div className="card_bg"></div>
                <div className="card_pg"></div>
                <div className="imag11">
                  <button onClick={RedBtn} className="favor">
                    {
                      red ? <FavoriteOutlinedIcon /> : <FavoriteBorderIcon />
                    }
                  </button>

                  <button className="add_card" onClick={Shop}>
                    ADD TO CARD {shop ? <ShoppingCartRoundedIcon /> : <LocalGroceryStoreOutlinedIcon />}
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
      </div>
    </>
  );

}
export default Service;