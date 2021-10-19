import React from 'react'

import { SearchIcon } from '@heroicons/react/outline'

function SearchBar() {
  return (
    <div className="relative w-full">
      <input className="w-full rounded-md py-2 px-4 sm:px-6 outline-none focus:outline-none" type="text" placeholder="Search..." />
      <button type="button" className="absolute top-0 bottom-0 right-0 bg-altgeld hover:bg-illini-orange rounded-tr-md rounded-br-md">
        <span className="w-auto flex justify-end items-center text-grey px-2 sm:px-3 hover:text-grey-darkest">
          <SearchIcon className="h-5 text-white" />
        </span>
      </button>
    </div>
  )
}

export default SearchBar
