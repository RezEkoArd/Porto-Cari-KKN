import Image from 'next/image'
import React, { useState } from 'react'
import NavLogin from '../../components/NavLogin'
import { useEffect,  } from 'react'
import axios from 'axios'
import Link from 'next/link'
import logo from '../../public/Logo-kkn.png'
import { Alert } from 'flowbite-react'
import { HiInformationCircle, HiOutlineX } from "react-icons/hi";

export default function index() {
  const [dataDesa , setDataDesa] = useState(null)
  const [fetchStatus, setFetchStatus] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [ErrMsg, setErrMsg] = useState('')

  const fetchData = async () => {
    let res = await axios.get('https://cari-kkn-be.fly.dev/admin/desa')
    let result = res.data.result
    setDataDesa([...result])
  }

  const firstFetch = () => {
    axios.get('https://cari-kkn-be.fly.dev/admin/desa')
    .then((res) => {
      let result = res.data.result
      setDataDesa([...result])
    })
    
  }

  useEffect(() => {
    firstFetch()    

    if (fetchStatus) {
     fetchData()
     setFetchStatus(false)
    }
    
  },[fetchStatus,setFetchStatus])

  const handleDelete = (event) => {
    let idData = event.target.value

    axios.delete(`https://cari-kkn-be.fly.dev/admin/desa/${idData}`)
    .then((res) => {
      setFetchStatus(true)
    })
    .catch((err) => {
      setShowAlert(true)
      setErrMsg(err)
    })
  }

  return (
    <div className='container mx-auto 2xl:px-20 '>
      <NavLogin/>

      <div className="w-full mt-5 ">
      <div>
      { showAlert && <Alert
        color="failure"
        icon={HiInformationCircle}
        className="relative my-3"
      >
       <span>
          <span className="font-medium">
            Info Error!
          </span>
          {ErrMsg} 
        </span>
        <HiOutlineX className='absolute top-1 right-1 cursor-pointer' onClick={() => setShowAlert(false)}/>
      </Alert>
      }
        <Link href='/dashboard/Form' >
          <div className='w-full flex justify-end '>
            <button type="button" className=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Create</button>
          </div>
        </Link> 
      </div>

      <div className="container overflow-x-auto relative shadow-md sm:rounded-lg mt-5 mx-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-3 mx-auto">
                Gambar
              </th>
              <th scope="col" className="py-3 px-3">
                Desa
              </th>
              <th scope="col" className="py-3 px-3">
                Kabupaten
              </th>
              <th scope="col" className="py-3 px-3">
                Jumlah Orang
              </th>
              <th scope="col" className="py-3 px-3">
                Kebutuhan
              </th>
              <th scope="col" className="py-3 px-6">
                PIC
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {
            dataDesa !== null && dataDesa.map((res) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={res._id}>
                    <td className="py-4 px-2">
                      {
                        res.url_photo !== "" ? (
                          <Image className="rounded-t-lg shadow-md " 
                              src={res.url_photo} 
                              alt="photo-desa"
                              width={200}
                              height={150}
                          />
                        ) : (
                          <Image className="rounded-t-lg shadow-md " 
                              src='/Logo-kkn.png' 
                              alt="photo-desa"
                              width={200}
                              height={150}
                          />
                        )
                      }
                    
                    </td>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {res.nama_tempat}
                    </th>
                    <td className="py-4 px-6">
                      {res.nama_kota}
                    </td>
                    <td className="py-4 px-6">
                      {res.jumlah_orang}
                    </td>
                    <td className="py-4 px-6">
                      {res.kebutuhan}
                    </td>
                    <td className="py-4 px-6">
                      {res.pic_nama}
                    </td>
                    <td className="py-4 px-6">
                      <div className='flex gap-2'>
                      <Link href={{
                        pathname: '/dashboard/[id]',
                        query: {id: res._id}
                      }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</Link>
                        <button value={res._id} onClick={handleDelete} className="cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"> 
                          Delete
                        </button>
                      </div>
                    </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
      </div>

    </div>
  )
}
