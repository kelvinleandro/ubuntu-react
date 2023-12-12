import Image from 'next/image'
import background from '@public/22_04.jpg'

export default function Home() {
  return (
    // <div className="w-full absolute bottom-0 left-0 -z-20">
    //   <Image src={background} alt='Ubuntu background image' className='object-cover'/>
    // </div>
    <Image src={background} alt='Ubuntu background image' className='object-cover w-full h-full'/>
  )
}