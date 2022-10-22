import React from 'react'
import "../carousel/carousel.scss"
import { Carousel } from 'antd';

const contentStyle = {
  height: '370px',
  color: '#fff',
  lineHeight: '370px',
  textAlign: 'center',
  
};

export default function Swiper() {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className='Carousel'>
      <Carousel afterChange={onChange} autoplay style={{
        height: '370px'
      }}>
        <div>
          <img src="//img12.360buyimg.com/pop/s1180x940_jfs/t1/40695/15/18716/68105/63422fd5E08f2d2df/ecc6c61d7939f504.jpg.avif" alt="" />
        </div>
        <div>
          <img src="//img12.360buyimg.com/pop/s1180x940_jfs/t1/40695/15/18716/68105/63422fd5E08f2d2df/ecc6c61d7939f504.jpg.avif" alt="" />
        </div>
        <div>
          <img src="//img12.360buyimg.com/pop/s1180x940_jfs/t1/40695/15/18716/68105/63422fd5E08f2d2df/ecc6c61d7939f504.jpg.avif" alt="" />
        </div>
        <div>
          <img src="//img12.360buyimg.com/pop/s1180x940_jfs/t1/40695/15/18716/68105/63422fd5E08f2d2df/ecc6c61d7939f504.jpg.avif" alt="" />
        </div>
      </Carousel>
    </div>
  )
}
