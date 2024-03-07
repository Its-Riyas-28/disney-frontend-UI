import React from 'react'
import logo from './../assets/images/Logo.png'
import { HiHome,HiMagnifyingGlass,HiStar,HiTv,HiPlayCircle} from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";




function Header() {
  return (

    <div className="text-white flex item-center">

        <div className="flex items-center justify-between">
            <img src={logo} alt='Disney Logo' className='w-[80px] object-cover md:w-[115px] flex'/>

                <div className='flex items-center gap-2 space-x-5'>
                <div className="hover:underline underline-offset-8 flex items-center gap-2 pl-5"> <HiHome className='flex'/>HOME</div>
                <div className="hover:underline underline-offset-8 flex items-center gap-2"> <HiMagnifyingGlass className='flex'/>SEARCH</div>
                <div className="hover:underline underline-offset-8 flex items-center gap-2"> <HiPlus className='flex'/>WATCHLIST</div>
                <div className="hover:underline underline-offset-8 flex items-center gap-2"> <HiStar className='flex'/>ORIGINALS</div>
                <div className="hover:underline underline-offset-8 flex items-center gap-2"> <HiTv className='flex'/>MOVIES</div>
                <div className="hover:underline underline-offset-8 flex items-center gap-2"> <HiPlayCircle className='flex'/>SERIES</div>
                </div>
        </div>

        <div className='flex items-center pl-[680px]'>
        <img src='https://www.jiocinema.com/images/profile/profile_avatar-v2.svg' className='w-[40px]'/> 
        <div className='flex items-center pl-[20px] font-semibold hover:text-blue-500'>LOGIN</div>
        </div>

    </div>







    
  )
}

export default Header