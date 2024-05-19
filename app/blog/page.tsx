import { BlogPosts } from 'app/components/posts'
import { Navbar } from 'app/components/nav'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl pt-32 mb-2 tracking-tighter">My Blog</h1>
      <Navbar />
      <BlogPosts />
    </section>
  )
}
