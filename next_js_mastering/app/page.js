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
      <h2>User router</h2>
    </div>
  )
}

export default Home