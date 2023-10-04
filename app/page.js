import Head from 'next/head';
import Link from 'next/link';
import Container from './components/container.js'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Hadley Peterson</title>
        <link rel="icon" href="/headshot.png" />
      </Head>

      <main>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Hadley Peterson
        </h1>

        <Container>
          <div className="flex flex-wrap mt-4 items-center">
            <div className="w-1/4">
              <img src="/prof_pic.png" className="w-72 h-72 rounded-full mr-4" alt="profile picture"/>
            </div>
            <div className="mx-1">
              Add bio soon ...
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 justify-center mt-8 mx-48">
            <div className="rounded-md outline outline-offset-6 outline-black">
              <Link href="/experience">
                <div className="justify-center mx-5 my-6">
                  <h3>Experience</h3>
                  <p>Software engineering at Capital One with expertise in Kubernetes, big data, and API development.</p>
                </div>
              </Link>
            </div>
            <div className="rounded-md outline outline-offset-6 outline-black">
              <Link href="/education">
                <div className="justify-center mx-5 my-6">
                  <h3>Education & Skills &rarr;</h3>
                  <p>University of Michigan 2023 College of Engineering graduate with skills across the technology stack.</p>
                </div>
              </Link>
            </div>
            <div className="rounded-md outline outline-offset-6 outline-black">
            <Link href="/blogs">
              <div className="justify-center mx-5 my-6">
                <h3>Blogs &rarr;</h3>
                <p>Avid technical writer. Topics range from Kubernetes fundementals, P vs NP, and how to thoroughly review code.</p>
              </div>
              </Link>
            </div>
            <div className="rounded-md outline outline-offset-6 outline-black">
              <Link href="/interests">
                <div className="justify-center mx-5 my-6">
                  <h3>Interests&rarr;</h3>
                  <p>Curious engineer, reader, writer, & yogi.</p>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel"/>
        </a>
      </footer>
    </div>
  );
}
