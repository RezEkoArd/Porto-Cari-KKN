import React, { useEffect, useState } from 'react'
import { Navbar,Dropdown,} from 'flowbite-react'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

export default function NavLogin() {
    const [userName, setUserName] = useState("")

    useEffect(()=>{
        getUsername()
    },[])

    let router = useRouter()   
    
    const handleSignOut = () => {
        Cookies.remove('token')
        Cookies.remove('username')
        router.push('/')
    }

    const getUsername = () => {
       const value =  Cookies.get('username') 
       setUserName(value)   
    }

  return (
    <div className="container px-20 border-b-2">
        <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand>
            <div className='flex gap-3'>
            <Image
                    src='/Logo-kkn.png'
                    alt="logo"
                    width={50}
                    height={50}
                    className="border-2 rounded"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    CariKKN
                    </span>
            </div>
        </Navbar.Brand>
        <div className="flex md:order-2  ">
            <Dropdown
            arrowIcon={false}
            inline={true}
            label={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                </svg>
            }
            >
            <Dropdown.Header>
             Hello {userName}
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item className='hover:bg-slate-200' onClick={handleSignOut}>
                Sign out
            </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
        </div>
        </Navbar>
    </div>
  )
}
