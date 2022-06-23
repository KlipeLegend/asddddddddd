import React, { Component , useState } from "react";
import Slider from "react-slick";

 const Carusel = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
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
        },
      ])
   
      return (
        <div>
        
          <Slider {...settings}>
               
        {
          card.map((val) => (
            <div className="card" key={val.id}>
              <div>
                <img src={val.img} alt="" />
                <div className="hp1">
                  <h1>{val.h1}</h1>
                  <p>{val.p}</p>
                </div>
              </div>
            </div>
          ))

        }

    
          </Slider>
        </div>
      );
    }
  export default Carusel;
  