'use client'

import { useEffect } from 'react'

export default function NavScroll() {
  useEffect(() => {
    const header = document.querySelector('header')
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header?.classList.add('scrolled')
      } else {
        header?.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
