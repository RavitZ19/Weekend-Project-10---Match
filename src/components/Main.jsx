import React, {useState} from 'react'
import ImagesBank from './ImagesBank';
import {MdOutlineThumbUpOffAlt, MdOutlineThumbDownOffAlt} from 'react-icons/md';

const Main = (images) => {
  const [current, setCurrent] = useState(0)
  const length = ImagesBank.length

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0: current + 1);
  }
  
  console.log(current);

  if (!Array.isArray(ImagesBank) || ImagesBank.length <= 0) {
    return null;
  }

  return (
    <section className='bank'>
      <MdOutlineThumbDownOffAlt className='countMinus' onClick={nextImage} />
      <MdOutlineThumbUpOffAlt className='countPlus' onClick={nextImage} />
      {ImagesBank.map((images, index) => {
        return (
          <div className={index === current ? 'active image' : 'image'} 
          key={index}
        >
          {index === current && (
            <img src={images.image} alt='arts' className='image' />
            )}
          </div>
        )
             
      })}
    </section>
  )
}

export default Main;