import { Search } from 'lucide-react'
import React from 'react'

function SearchSection() {
  return (
    <div className='p-10 bg-gradient-to-br from-green-500 via-green-700 to to-blue-600 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>Browse all templates</h2>
      <p>What would you like to create today?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border my-5 rounded-md w-[30%] '>
            <Search size={20} />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-white"
            />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
