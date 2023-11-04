import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import YBG from './YBG.png';
import LCI from './LCI.png';
import CCL from './CCL.png';
import Nishat from './Nishat.png';
import Logo from './logo.png.png';
import Asset from './Asset.png.png';
import Almond from './Almond.png.jpg';
import './Clients.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Main.css';

import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  // let appendNumber = 4;
  // let prependNumber = 1;

  // const prepend2 = () => {
  //   swiperRef.prependSlide([
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
  //   ]);
  // };

  // const prepend = () => {
  //   swiperRef.prependSlide(
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
  //   );
  // };

  // const append = () => {
  //   swiperRef.appendSlide(
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
  //   );
  // };

  // const append2 = () => {
  //   swiperRef.appendSlide([
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
  //   ]);
  // };

  return (
    <>
      <h1>
        Clients
      </h1>
      <br />
      <br />
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide  className='slide'>
          <img className='swiper' src={YBG} alt="green" style={{ height: '170px', width: '380px', borderRadius: '20px' }} />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img className='swiper' src={LCI} alt="green" style={{ height: '170px', width: '320px', borderRadius: '20px' }} />
        </SwiperSlide>
        <SwiperSlide className='slide' >
          <img className='swiper' src={CCL} alt="green" style={{ height: '170px', width: '350px', borderRadius: '20px' }} />
        </SwiperSlide>
        <SwiperSlide  className='slide'>
          <img className='swiper' src={Nishat} alt="green" style={{ height: '150px', width: '380px', borderRadius: '20px' }} />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img className='swiper' src={Logo} alt="green" style={{ height: '170px', width: '350px', borderRadius: '20px' }} />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img className='swiper' src={Asset} alt="green" style={{ height: '230px', width: '350px', borderRadius: '20px' }} />
        </SwiperSlide>
        <SwiperSlide  className='slide'>
          <img className='swiper' src={Almond} alt="green" style={{ height: '170px', width: '250px', borderRadius: '20px' }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
