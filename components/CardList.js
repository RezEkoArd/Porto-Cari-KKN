import React from 'react'
import Image from 'next/image'
import logo from '../public/Logo-kkn.png'
import Link from 'next/link'

export default function CardList({data}) {
  return (
    <Link href={{
      pathname: '/dashboard/[id]',
      query: {id: data._id}
    }} className="w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer" >
         {data.url_photo !==  "" ? (
                          <Image className="rounded-t-lg h-60 w-full shadow-md " 
                          src={data.url_photo} 
                          alt="photo-desa"
                          width={200}
                          height={150}
                      />
                        ) : (
                          <Image className="rounded-t-lg h-60 w-full shadow-md " 
                              src={logo} 
                              alt="photo-desa"
                              width={200}
                              height={150}
                          />
                        )
                      }
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.nama_kota}</h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">Kebutuhan:</p>
            <p className=" font-normal text-gray-700 dark:text-gray-400">Jumlah Orang: {data.jumlah_orang} </p>
            <p className=" font-normal text-gray-700 dark:text-gray-400">Fasilitas: {data.fasilitas}</p>
        </div>
    </Link>

  )
}
