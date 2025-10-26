import { BlogPosts } from 'app/components/posts'
import {Navbar} from 'app/components/nav'
// import duckGif from '../images/dancing-duck-danse.gif'
import Image from 'next/image'
import bookList from 'app/book/current.json'

interface book {
  id: number,
  name: string ,
  author: string,
  type: number
}


export default function Page() {
  return (
    <section>
      <div className='flex justify-between items-center mb-4'>
        <h1 className="font-[Bebas] text-6xl tracking-tighter">
          home
        </h1>
        <Image className='size-32 shadow-lg filter backdrop-blur-sm align' src='/images/dancing-duck-danse.gif' alt='' width={300} height={300} />
      </div>
      <Navbar />
      <div className='text-xl'>
        <h1 className='font-[Bebas] text-3xl'>
          About
        </h1>
        <p className="font-[Futura] mt-2 mb-4">
          {`I'm a new grad with a degree in Computer Science. Automata theory has been my favorite class, I'm also interested in back-end development and embedded development.
          Currently looking for new grad opportunities or opportunities 
          in CS research. `}
        </p>
        <p className="font-[Futura] mb-4">
          {`I have too many interests but some of my favorites are LoL esports, keyboards, baseball, chess, map games,
           DnD, prog rock and jazz and so much other shit.
          `}
        </p>
        <h1 className="font-[Bebas] mt-6 text-3xl">
          {`Currently Reading`}
        </h1>
        <div className='font-[Futura] mt-2 text-xl'>
            {bookList.map((item) => (
              <p className="" key={item.id}>
                {item.name} by {item.author}
              </p>
            ))}
        </div>
      </div>
    </section>
  )
}
