import { Home, Users, BriefcaseBusiness, MessageCircleMore, Bell} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { JSX } from 'react/jsx-dev-runtime'

type NAVITEMS ={
    src:string,
    icon:JSX.Element,
    text:string
}

const navItems:NAVITEMS[] =[
    {
        src:"/home",
        icon:<Home/>,
        text:"Home"
    },
    {
        src:"/networks",
        icon:<Users/>,
        text:"My Network"
    },
    {
        src:"/job",
        icon:<BriefcaseBusiness/>,
        text:"Jobs"
    },
    {
        src:"/message",
        icon:<MessageCircleMore/>,
        text:"Messaging"
    },
    {
        src:"/notification",
        icon:<Bell/>,
        text:"Notification"
    },
   
]


const NavItems = () => {
  return (
    <div className=' flex gap-8'>
        {
            navItems.map((navItem,index)=>{
                return (
                    <div key={index} className=' flex flex-col h-35 w-35 items-center cursor-pointer text-[#666666] hover:text-black'>
                        <span>{navItem.icon}</span>
                        <Link className='text-md' href={navItem.src}>{navItem.text}</Link>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default NavItems
