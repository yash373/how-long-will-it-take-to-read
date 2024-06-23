import React from 'react'
import { useRouter } from 'next/router'

const Results = () => {
  const router = useRouter()

  const pages: number = Number(router.query.pages)
  const complexity: number = Number(router.query.complexity)

  const secs_per_page = 102

  const hours_for_read_once = (pages * secs_per_page) / (60 * 60)
  const hours_for_read = hours_for_read_once * complexity

  return (
    <div className='font-bold text-center w-[100vw]'>
      <p>
        It will take {hours_for_read} hrs for you to read {pages} pages on average.
      </p>
    </div>
  )
}

export default Results
