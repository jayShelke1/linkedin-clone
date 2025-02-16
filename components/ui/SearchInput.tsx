import React from 'react'
import { Input } from './input'

const SearchInput = () => {
  return (          
    <div>
        <Input
        type='text'
        placeholder='search...'
        className=' bg-[#EDF3FB] w-80 rounded-lg border-none'/>
    </div>
  )         
}

export default SearchInput          