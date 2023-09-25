import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hadley Peterson</title>
        <link rel="icon" href="/prof_headshot.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hadley Peterson
        </h1>

        <p className={styles.description}>
          Add bio soon ...
        </p>

        <div className={styles.grid}>
          <Link className={styles.card} href="/experience">
            <h3>Experience &rarr;</h3>
            <p>Software engineering at Capital One with expertise in Kubernetes, big data, and API development.</p>
          </Link>
          <Link className={styles.card} href="/education_skills">
            <h3>Education & Skills &rarr;</h3>
            <p>University of Michigan 2023 College of Engineering graduate with skills across the technology stack.</p>
          </Link>
          <Link className={styles.card} href="/blogs">
            <h3>Blogs &rarr;</h3>
            <p>Avid technical writer. Topics range from Kubernetes fundementals, P vs NP, and how to thoroughly review code.</p>
          </Link>
          <Link className={styles.card} href="/interests">
            <h3>Interests&rarr;</h3>
            <p>Curious engineer, reader, writer, & yogi.</p>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
