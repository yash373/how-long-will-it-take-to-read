import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Info = () => {
  const [pages, setPages] = useState<number>(0)
  const [complexity, setComplexity] = useState<number>(0)

  const handlePagesChange = (e: any) => {
    console.log(e.target.value)
    setPages(e.target.value)
  }

  const handleComplexityChange = (e: any) => {
    const { value } = e.target
    setComplexity(value)
  }

  const handleSubmit = () => {
    const router = useRouter()
    router.push(`/result?pages=${pages}&complexity=${complexity}`)
  }

  return (
    <div className="fixed h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="rounded-xl shadow-2xl p-5 bg-white border-2 max-w-6xl mx-auto my-auto sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex flex-col">
            <h1 className='capitalize text-center font-extrabold text-3xl'>
              Enter Pages And Complexity
            </h1>
            <form action='javascript:void(0)' className=" flex flex-col justify-center text-sm">

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="text-sm">Number of Pages</label>
                <input value={pages} onChange={handlePagesChange} type="number" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className='text-sm' >Enter how many times you read a line on avg</label>
                <input value={complexity} onChange={handleComplexityChange} type="number" name="neet" id="tel" placeholder="NEET Score" className="w-100 mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <button onClick={handleSubmit} type="submit" className="md:w-32 mx-auto bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
