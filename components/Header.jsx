'use client'

import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
const router = useRouter()
  return (
    <div className='fixed w-full top-0 h-[80px] bg-slate-700 text-white flex justify-between items-center px-2'>
        <Link href='/login' className='font-extrabold'>Token Auth Apps</Link>
        <div>
            <Button onClick={()=> router.push('/register')}>Get Started !</Button>
        </div>
    </div>
  )
}

export default Header