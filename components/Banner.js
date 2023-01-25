import React from 'react'
import Image from 'next/image'
import Spanduk1 from '../public/Spanduk1.png'
import Spanduk2 from '../public/spanduk2.png'
import { Carousel } from 'flowbite-react'

export default function Banner() {
  return (
    <div className="container mt-5 shadow-md mx-auto">
        <div className="h-32 md:h-60 xl:h-96 w-full ">
            <Carousel slideInterval={5000}>
                <Image
                src={Spanduk1}
                alt="Banner1"
                quality={80}  
                />
                <Image
                src={Spanduk2}
                alt="Banner2" 
                quality={80}
                />
            </Carousel>
        </div>
    </div>
  )
}
