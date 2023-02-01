import React from 'react'
import Image from 'next/image'
import { Carousel } from 'flowbite-react'
export default function Banner() {
  return (
    <div className="container mt-5 shadow-md mx-auto">
        <div className="h-32 md:h-60 xl:h-96 w-full ">
            <Carousel slideInterval={5000}>
                <Image
                src='/Spanduk1.png'
                alt="Banner1"
                width='1500'
                height='100'
                quality={80}  
                />
                <Image
                src='/Spanduk2.png'
                alt="Banner2" 
                width='1500'
                height='100'
                quality={80}
                />
            </Carousel>
        </div>
    </div>
  )
}
