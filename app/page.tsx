import { BlogPosts } from 'app/components/posts'
import {Navbar} from 'app/components/nav'

export default function Page() {
  return (
    <section>
      <h1 className="pt-32 mb-2 text-2xl font-bold tracking-tighter">
        About
      </h1>
      <Navbar />
      <p className="mb-4">
        {`I'm an aspiring software engineer from California, about to graduate from CSU Fresno with a 
        degree in Computer Science, currently working on personal projects which include a baseball statistics
         dashboard, a chess engine and a few others. Currently looking for new grad opportunities or opportunities 
         in CS research.`}
      </p>
      <p className="mb-4">
        {`I have a wide range of personal interests including gardening, chess, baseball, but particularly the Yankees and 
        sabremetrics, and much more. Outside of those, in CS, I'm interested in back-end development, 
        cryptography, artificial intelligence and computer security. 
        `}
      </p>
      <p className="mb-4">
        {`Join me on my ride to becoming more disciplined, pursuing interests and potentially building something meaningful.`}
      </p>
    </section>
  )
}
