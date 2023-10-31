import Link from 'next/link'
import React from 'react'
import { cookies } from 'next/headers'


const Header = () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value || ''
  
  return (
    <div className='fixed w-full top-0 h-[80px] bg-slate-700 text-white flex justify-between items-center px-2'>
        <Link href='/login' className='font-extrabold'>Token Auth Apps</Link>
        <div>
          {!token ? <Link className='p-2 bg-slate-300 text-slate-900 transition-all hover:text-slate-600 font-semibold hover:bg-slate-200 rounded-lg' href='/register'>Get Started !</Link> : null }
        </div>
    </div>
  )
}

export default Header