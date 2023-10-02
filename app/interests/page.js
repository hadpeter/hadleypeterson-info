import PageTitleComponet from "../components/pageTitle.js"
import DoubleListComponent from "../components/doubleList.js"

export default function Interests() {
    var interests = ["Cloud Computing", "Distributed Systems", "Networking", "The Dark Web", "P vs NP Problem", "Cryptography", "FinTech", "Entrepreneurship", "Venture Capital", "Yoga", "Meditation", "Water Skiing", "Gardening"]

    return (
    <div>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <PageTitleComponet title="Interests"></PageTitleComponet>
            <DoubleListComponent folder="interests"></DoubleListComponent>
        </section>
    </div>
    );
  }