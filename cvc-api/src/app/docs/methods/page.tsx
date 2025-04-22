"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import GetCourseContentByID from './getCourseContentByID/page'

export default function SomePage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/docs/methods/getCourseContentByID') 
  }, [router])

  return (
    <GetCourseContentByID></GetCourseContentByID>
  )
}
