import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

function Card({data, reference}) {
  return (
    <motion.div 
    drag 
    dragConstraints={reference} 
    whileDrag={{scale: 1.1}} 
    dragElastic={.1} 
    dragTransition={{ bounceStiffness: 100 , bounceDamping: 30 }}
    className='relative flex-shrink-0 w-60 h-64 rounded-[45px] bg-zinc-900/90 text-white px-4 py-8 overflow-hidden'
    >
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-3 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex item-center justify-between px-4 py-2 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close ? <IoClose color="#000" size=".7rem" /> : <LuDownload color="#000" size=".7rem"/>}
            </span>
        </div>
        { data.tag.isOpen && (
            <div className='tag w-full py-3 flex items-center justify-center bg-blue-900'>
                <h3 className='text-sm font-medium '>{data.tag.tagtitle}</h3>
            </div>
        )}
        
      </div>
    </motion.div>
  )
}

export default Card
