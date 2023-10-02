import Head from 'next/head';
import Link from 'next/link';
import Container from './components/container.js'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Hadley Peterson</title>
        <link rel="icon" href="/prof_headshot.png" />
      </Head>

      <main>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Hadley Peterson
        </h1>

        <Container>
          <p>
            Add bio soon ...
          </p>
          <div>
            <Link href="/experience">
              <h3>Experience &rarr;</h3>
              <p>Software engineering at Capital One with expertise in Kubernetes, big data, and API development.</p>
            </Link>
            <Link href="/education">
              <h3>Education & Skills &rarr;</h3>
              <p>University of Michigan 2023 College of Engineering graduate with skills across the technology stack.</p>
            </Link>
            <Link href="/blogs">
              <h3>Blogs &rarr;</h3>
              <p>Avid technical writer. Topics range from Kubernetes fundementals, P vs NP, and how to thoroughly review code.</p>
            </Link>
            <Link href="/interests">
              <h3>Interests&rarr;</h3>
              <p>Curious engineer, reader, writer, & yogi.</p>
            </Link>
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
