'use client'

import { Button, Input } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const dataInput = { name, email, password }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!name || !email || !password) {
        alert('isi semua dahulu')
        return
      }

      await fetch('/api/register-user', {
        method: 'POST', headers: {
          accept: 'application/json'
        }, body: JSON.stringify(dataInput)
      })
      router.push('/login')
    } catch (error) {
      alert('gagal register', error.message)
    }
  }

  return (
    <div className='p-4 border-t-[4px] border-[1px] rounded-xl border-sky-500 md:w-[400px] md:h-[350px] w-[350px] h-[450px]'>
      <div className='flex flex-col  h-full'>
        <h1 className='text-[14px] font-bold text-center'>Lets Get Started !!</h1>
        <div className='text-[14px]  p-2'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-2  justify-between md:h-[250px] h-[350px]'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2 px-2'>
                <label> Username</label>
                <Input placeholder='username....' size={'xs'} outlineColor={'blue'} type='text' required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-2 px-2'>
                <label> E-mail</label>
                <Input placeholder='test@test.com' size={'xs'} outlineColor={'blue'} type='email' required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-2 px-2'>
                <label> Password</label>
                <Input placeholder='******' size={'xs'} outlineColor={'blue'} type='password' required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className='flex w-full justify-end flex-col gap-1'>
              <Button type='submit' colorScheme='linkedin'>Register</Button>
              <div className='text-[13px] text-end'>Already have account? <Link href='/login' className='underline'>Login</Link></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen