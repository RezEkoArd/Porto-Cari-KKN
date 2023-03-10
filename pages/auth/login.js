import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { Button, Modal } from 'flowbite-react'
import { HiLightBulb,HiInformationCircle } from "react-icons/hi";
import { Alert } from 'flowbite-react'

export default function login() {
  const [inputLogin, setInputLogin] = useState({
    "username" : "",
    "password" : ""
  })

  // Parameter
  const [show, setShow] = useState(false)
  const [alert,setAlert] = useState(false)

  let router = useRouter()

  const handleChange = (event) => setInputLogin({...inputLogin, [event.target.name] : event.target.value})

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post('https://cari-kkn-be.fly.dev/admin/login', {username: inputLogin.username, password: inputLogin.password})
    .then((res) => {

      let data = res.data
      Cookies.set('token',data.token, {expires:1})
      Cookies.set('username',data.username, {expires:1})
      router.push('/dashboard')
    })
    .catch((err) => {
      setAlert(!alert)
    })
  }

  return (
    <>
       
      <div className='flex flex-col items-center justify-center w-full min-h-screen bg-slate-300'>
      {
        alert && <Alert
        color="failure"
        icon={HiInformationCircle}
        className="mb-5">
        <span>
          <span className="font-medium">
            Info alert!
          </span>
          {' '}Your Username and Password is Wrong, Please Try again.
        </span>
      </Alert>
      }
      <div className="relative flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
       <>
        
          <div className='absolute top-1 right-1 border-2 rounded-lg bg-slate-100 hover:bg-slate-300 p-1'>
            <HiLightBulb onClick={() => setShow(!show)} className=" w-8 h-8 cursor-pointer"/>
          </div>
          <Modal
            show={show}
            onClose={() => setShow(!show)}
          >
            <Modal.Header>
              Terima Kasih Atas Kunjunganya
            </Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Di Kerenakan Aplikasi ini hanya Prototype maka untuk akun Login Bisa gunakan email dan Password di bawah ini
                </p>
                <div className="space-y-2">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Email : test1
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Password: 12345678
                </p>
                </div>
                
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                color="gray"
                onClick={() => setShow(!show)}
              >
                I Accept Thank you
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Welcome
        </div>
        <div className="mt-8">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg width={15} height={15} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                    </path>
                  </svg>
                </span>
                <input
                 name="username"
                 type="username"  
                 onChange={handleChange}
                 value={inputLogin.username}
                 className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" />
              </div>
            </div>
            <div className="flex flex-col mb-6 ">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg width={15} height={15} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                    </path>
                  </svg>
                </span>
                <input
                 name="password"
                 type="password"
                 onChange={handleChange}
                 value={inputLogin.password}
                 className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" />
              </div>
            </div>
            
            <div className="flex w-full ">
              <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Login
              </button>
            </div>
          </form>
        </div>
      
      </div>

    </div>
      </>
  )
}
