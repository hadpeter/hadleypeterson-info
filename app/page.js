import Link from 'next/link';
import Container from './components/container.js'
import PageTitleComponet from "./components/pageTitle.js"
import Icons from './components/icons.js'
import RootLayout from './layout.js'


export default function Home() {
  return (
    <RootLayout>
    <div className="min-h-screen my-6 mx-6">
      <main>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <PageTitleComponet title="Hadley Peterson"></PageTitleComponet>

        <Container>
          <div className="flex flex-wrap mt-4 items-center">
            <div className="w-1/4">
              <img src="/headshot.jpg" className="w-7/8 h-7/8 rounded-full mr-4" alt="profile picture"/>
            </div>
            <div className="mx-4 w-2/3">
            Customer-centric software engineer with expertise in building scalable data pipelines and high performance APIs. Passionate about optimizing systems, creating seamless user experiences, and fostering engineering best practices.
            <Icons></Icons>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-8 mx-4 grid">
            <div className="rounded-md outline outline-offset-6 outline-black hover:shadow-xl transition-shadow duration-200">
              <Link href="/experience">
                <div className="justify-center mx-5 my-6">
                  <h3 className="font-bold">Experience  &rarr;</h3>
                  <p>Senior software engineer at Capital One with expertise in search systems, ML Ops and API development.</p>
                </div>
              </Link>
            </div>
            <div className="rounded-md outline outline-offset-6 outline-black hover:shadow-xl transition-shadow duration-200">
              <Link href="/education">
                <div className="justify-center mx-5 my-6">
                  <h3 className="font-bold">Education & Skills &rarr;</h3>
                  <p>University of Michigan College of Engineering 2021 graduate and former instructional aide.</p>
                </div>
              </Link>
            </div>
            <div className="rounded-md outline outline-offset-6 outline-black hover:shadow-xl transition-shadow duration-200">
            <Link href="/blogs">
              <div className="justify-center mx-5 my-6">
                <h3 className="font-bold">Blogs &rarr;</h3>
                <p>Avid technical writer. Topics range from Kubernetes fundamentals to P vs NP.</p>
              </div>
              </Link>
            </div>
            <div className="rounded-md outline outline-offset-6 outline-black hover:shadow-xl transition-shadow duration-200">
              <Link href="/interests">
                <div className="justify-center mx-5 my-6">
                  <h3 className="font-bold">Interests &rarr;</h3>
                  <p>Curious engineer, reader, & yogi.</p>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </div>
    </RootLayout>
  );
}
