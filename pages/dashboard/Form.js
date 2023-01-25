import React from 'react'
import NavLogin from '../../components/NavLogin'
import {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Form() {
    const [input,setInput] = useState({})

    let router = useRouter()
    

    const handleChange = (event) => {

    const {name, value} = event.target;
    setInput(prevData => ({
        ...prevData,
        [name]: name === 'jumlah_orang' || name === 'pic_phone' ? parseInt(value)
        : name === 'kebutuhan' || name === 'fasilitas' ? value.split('\n') : value,
        
    }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post('https://cari-kkn-be.fly.dev/admin/desa',{
            url_photo: input.url_photo,
            nama_tempat: input.nama_tempat,
            nama_kota: input.nama_kota,
            jumlah_orang: input.jumlah_orang,
            fasilitas: input.fasilitas,
            kebutuhan: input.kebutuhan,
            pic_pejabat: input.pic_pejabat,
            pic_nama: input.pic_nama,
            pic_phone: input.url_phone
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })        

        setInput({
            url_photo: "",
            nama_tempat: "",
            nama_kota: "",
            jumlah_orang: "",
            fasilitas: "",
            kebutuhan: "",
            pic_pejabat: "",
            pic_nama: "",
            pic_phone: ""
        })
        router.push('/dashboard')
    }

    const handleCancel = () => {
        setInput({
            url_photo: "",
            nama_tempat: "",
            nama_kota: "",
            jumlah_orang: "",
            fasilitas: "",
            kebutuhan: "",
            pic_pejabat: "",
            pic_nama: "",
            pic_phone: ""
        })
        router.push('/dashboard')   
    }

  return (
    <div className='w-full px-20'>
        <NavLogin/>
        <div className='mt-5 shadow-lg p-5 rounded-lg'>
           <div className='w-fit border-b-2 pb-1 mb-5'>
           <h1 className=''>Form Pengisian KKN</h1>
           </div>
            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                    <input
                    type="text" 
                    name="nama_tempat" 
                    // value={input.nama_tempat}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    
                    <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Desa</label>
                    </div>
                    
                    <div className="relative z-0 mb-6 w-full group">
                    <input 
                    type="number" 
                    name="jumlah_orang" 
                    // value={input.jumlah_orang}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jumah Orang yang dibutuhkan</label>
                    </div>
                </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                <input 
                type="text" 
                name="nama_kota" 
                // value={input.nama_kota}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kabupaten (Kota)</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                <input 
                type="text" 
                name="url_photo"
                // value={input.url_photo}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Foto Desa (URL)</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                    <textarea 
                    name="fasilitas" 
                    // value={input.fasilitas}
                    onChange={handleChange} 
                    className="block py-10 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fasilitas</label>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                <textarea 
                name="kebutuhan"
                // value={input.kebutuhan}
                onChange={handleChange} 
                className="block py-10 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kebutuhan</label>
                </div>
            </div>

            <div className='w-fit border-b-2 pb-1 my-5'>
                <h1>Form Pengisian KKN</h1>
            </div>
            
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                    <input 
                    type="text" 
                    name="pic_nama"
                    // value={input.pic_nama}
                    onChange={handleChange} 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Penanggung Jawab</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input 
                    type="text" 
                    name="pic_jabatan"
                    // value={input.pic_jabatan}
                    onChange={handleChange} 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jabatan</label>
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                    <input 
                    type="number" 
                    name="pic_phone" 
                    // value={input.pic_phone}
                    onChange={handleChange} 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No Telp</label>
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <button type="button" onClick={handleCancel} className="text-red-500 bg-white border border-gray-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>

                <button type="submit" className=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Save</button>
            </div>
            </form>

            

        </div>
    
    </div>
  )
}
