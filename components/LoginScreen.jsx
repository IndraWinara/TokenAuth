'use client'

import { Button, Input } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'


const LoginScreen = () => {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const router = useRouter()
const dataInput = {email,password}
const handleSubmit = async (e)=>{
  e.preventDefault()
  await fetch('/api/login-user', {
    method: 'POST', headers: {
      accept: 'application/json'
    }, body: JSON.stringify(dataInput)
  })
  router.push('/')
  window.location.reload()
}

  return (
    <div className='p-4 border-t-[4px] border-[1px] rounded-xl border-sky-500 md:w-[400px] md:h-[350px] w-[350px] h-[450px]'>
      <div className='flex flex-col  h-full'>
        <h1 className='text-[14px] font-bold text-center'>Please Sign First</h1>
        <div className='text-[14px]  p-2'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-2  justify-between md:h-[250px] h-[350px]'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2 px-2'>
                <label> E-mail</label>
                <Input placeholder='test@test.com' size={'xs'} outlineColor={'blue'} type='email' required
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-2 px-2'>
                <label> Password</label>
                <Input placeholder='******' size={'xs'} outlineColor={'blue'} type='password' required
                  value={password} 
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className='flex w-full justify-end'>
              <Button type='submit' colorScheme='linkedin'>SignIn</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen