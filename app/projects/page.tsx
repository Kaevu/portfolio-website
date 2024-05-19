import { Navbar } from 'app/components/nav'


export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl pt-32 mb-2 tracking-tighter">Projects</h1>
      <Navbar />
        <p>This is a list of projects that I feel are actually finished, and have bothered to publish: </p>
        <div>
            <a className="flex pt-6" href="">
                <div className='justify-start'>
                    EU4 Achievement Search
                    <div>Frameworks: React, Flask, Tailwind</div>
                    <div>Other: PostgreSQL, AWS Lambda</div>
                </div>
                <div className='justify-end'></div>
            </a>
            <hr className='my-6 opacity-20'></hr>

        </div>










    </section>
  )
}