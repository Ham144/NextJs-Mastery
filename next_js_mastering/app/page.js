"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  const navigateTo = (target) => {
    router.push(target)
  }

  return (
    <div>
      
    </div>
  )
}

export default Home