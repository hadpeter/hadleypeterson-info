import Link from 'next/link';
import PageTitleComponet from "../components/pageTitle.js"
import Job from "../components/job.js"

export default function Experiences() {
    return (
      <div className="min-h-screen my-6 mx-6">
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <PageTitleComponet title="Experiences"></PageTitleComponet>
          </section>

          <div className="grid grid-cols-1 gap-4 justify-center mt-8 mx-48">
            <div className="rounded-md outline outline-offset-6 outline-black">
              <Link href="/experience/capital_one">
                <div className="justify-center mx-5 my-6">
                  <Job company="Capital One" image="../Capital_one.png" title="Senior Associate Software Engineer"></Job>
                </div>
              </Link>
            </div>
            <div className="rounded-md outline outline-offset-6 outline-black">
              <Link href="/experience/quicken_loans">
                <div className="justify-center mx-5 my-6">
                  <Job company="Quicken Loans" image="../Quicken_loans.png" title="Software Engineer Intern"></Job>
                </div>
              </Link>
            </div>
            <div className="rounded-md outline outline-offset-6 outline-black">
              <Link href="/experience/clocktower">
                <div className="justify-center mx-5 my-6">
                  <Job company="Clocktower Technology Ventures" image="../Clocktower_tech_ventures.png" title="Technology Consultant"></Job>
                </div>
              </Link>
            </div>
            <div className="rounded-md outline outline-offset-6 outline-black">
              <Link href="/experience/tappan_hill">
                <div className="justify-center mx-5 my-6">
                  <Job company="Tappan Hill Ventures" image="../Tappan_hill.png" title="Investment Intern"></Job>
                </div>
              </Link>
            </div>
          </div>

    </div>
    );
  }