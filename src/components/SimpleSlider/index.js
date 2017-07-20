import React from 'react';
//import styled from 'styled-components';
import {Img} from './style';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      arrows:true
    }
    return (
      <Slider {...settings}>
        <div><Img src="http://lorempixel.com/output/nightlife-q-c-1280-480-7.jpg"/></div>
        <div><Img src="http://lorempixel.com/output/nightlife-q-c-1280-480-6.jpg"/></div>
        <div><Img src="http://lorempixel.com/output/nightlife-q-c-1280-480-5.jpg"/></div>
        <div><Img src="http://lorempixel.com/output/nightlife-q-c-1280-480-4.jpg"/></div>
        <div><Img src="http://lorempixel.com/output/nightlife-q-c-1280-480-3.jpg"/></div>
        <div><Img src="http://lorempixel.com/output/nightlife-q-c-1280-480-2.jpg"/></div>
      </Slider>
    );
  }
}

SimpleSlider.propTypes = {

};

export default SimpleSlider;
