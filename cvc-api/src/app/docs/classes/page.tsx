"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Course from './course/page'

export default function SomePage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/docs/classes/course') 
  }, [router])

  return (
    <Course></Course>
  )
}
