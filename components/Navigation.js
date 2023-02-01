import React from 'react'
import Image from 'next/image'
import { Navbar } from 'flowbite-react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <div className='container border-b-2 mx-auto '>
        <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand href="/">
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
        <Navbar.Toggle />
        <Navbar.Collapse>
            <div className='flex gap-5 text-lg font-normal p-5'>
              <Link href='/' >
              Home
              </Link>
              <Link href='/auth/login' className='border-r-3'>
              Login
              </Link>
            </div>
        </Navbar.Collapse>
        </Navbar>
    </div>
  )
}
