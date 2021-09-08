import React from 'react'
import style from './Slider.module.scss'
import { Carousel } from 'antd';

const contentStyle = {
    height: '580px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  

const Slider = () => {
    return(
        <div>
            <Carousel autoplay>
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
        </div>
    )
}
export default Slider