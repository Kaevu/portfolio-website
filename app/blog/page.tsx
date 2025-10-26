import { BlogPosts } from 'app/components/posts'
import { Navbar } from 'app/components/nav'
import Image from 'next/image'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <div className='flex justify-between items-center mb-4'>
        <h1 className="text-6xl tracking-tighter">
          my blog
        </h1>
        <Image className='size-32 shadow-lg filter backdrop-blur-sm align' src='/images/dancing-duck-danse.gif' alt='' width={300} height={300} />
      </div>
      <Navbar />
      <BlogPosts />
    </section>
  )
}
