import React, { createRef } from 'react'
import Card from './Card'

function Foreground() {

  const ref = createRef(null);

  const data = [
    {
      desc: "Happiness is not something ready-made; it comes from your actions.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "Success is not final, failure is not fatal keep going.",
      filesize: ".7mb",
      close: false,
      tag: { isOpen: false, tagtitle: "Open File", tagColor: "red"},
    },
    {
      desc: "The best way to predict the future is to create it.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Later", tagColor: "green"},
    },
    {
      desc: "Hii",
      filesize: "1mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Later", tagColor: "green"},
    },
  ];

  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] h-screen w-full flex gap-5 flex-wrap p-5'>
        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}
      </div>
    </>
  )
}

export default Foreground
