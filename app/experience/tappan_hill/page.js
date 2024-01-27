import JobHighlight from "../../components/JobHighlight.js"
import PageTitleComponet from "../../components/pageTitle.js"

export default function TappanHill() {
    return (
        <div className="min-h-screen my-6 mx-6">
            <section className="flex-col md:flex-row flex-col mt-16 mb-16 md:mb-12">
                <div>
                    <PageTitleComponet title="Tappan Hill Ventures"></PageTitleComponet>
                </div>
                <div>
                    New York, New York
                </div>
            </section>
            <JobHighlight title="Senior Associate Software Engineer" focus="Search Engine Optimization" date="August 2023-Present"></JobHighlight>
            <ul>
                <li>

                </li>
            </ul>
        </div>
    )
    }