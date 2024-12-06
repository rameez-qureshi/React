import React from 'react'

function Background() {
  return (
    <>
        <div className='w-full h-screen fixed z-[2]'>
            <div className='absolute top-[6%] w-full font-semibold text-zinc-600 text-xl flex justify-center'>Documents.</div>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold text-zinc-900 tracking-tight leading-none'>Docs.</h1>
        </div>  
    </>
  )
}

export default Background
