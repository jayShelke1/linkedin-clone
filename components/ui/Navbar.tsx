import Image from 'next/image'
import React from 'react'
import SearchInput from './SearchInput'
import NavItems from './NavItems'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='fixed w-full shadow-sm bg-white z-50'>
      <div className='flex items-center max-w-full justify-between h-14 mx-auto px-4'>
        {/* Logo and Search Bar */}
        <div className='flex items-center gap-2'>
          <Image
            src={'/linked-logo.png'}
            alt='logo'
            width={35}
            height={35}
            priority
          />
          <div className='md:block hidden'>
            <SearchInput />
          </div>
        </div>

        {/* Navigation Items and User Auth */}
        <div className='flex items-center gap-5'>
          <div className='md:block hidden'>
            <NavItems />
          </div>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
