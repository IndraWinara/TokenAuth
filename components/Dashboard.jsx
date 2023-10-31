'use client'

import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Dashboard =  () => {
  const [data,setData] = useState()
  const router = useRouter()
  const getMe = async ()=>{
    const response = await fetch('/api/me',{method : 'GET',headers:{
      accept : 'application/json'
    }})
    const ress = await response.json()
    return ress
  }
 
  useEffect(()=>{
    getMe().then((e)=> setData(e))
  },[])

 const handleLogout = async (e)=>{
  e.preventDefault()
  await fetch('/api/logout-user',{method : 'GET',headers:{
    accept : 'application/json'
  }})
  router.push('/login')
  window.location.reload()
 }

  return (
    <div className='p-4 border-t-[4px] border-[1px] rounded-xl border-sky-500 md:w-[400px] md:h-[350px] w-[350px] h-[450px]'>
        <div className='flex flex-col justify-between h-full'>
            <h1 className='text-[14px]'>Welcome, <span className='font-extrabold italic px-1'>{data?.data?.name}</span>this your personal information</h1>
            <div className='text-[14px] mt-[-150px] p-2'>
                <p>Name : {data?.data?.name}</p>
                <p>Email : {data?.data?.email}</p>
                <p>Created At : {data?.data?.createdAt}</p>
                <p>Updated At : {data?.data?.updatedAt}</p>
            </div>
            <Button colorScheme='linkedin' onClick={handleLogout}>SignOut</Button>
        </div>
    </div>
  )
}

export default Dashboard