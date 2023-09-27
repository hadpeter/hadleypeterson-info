import PageTitleComponet from "../app/components/pageTitle.js"
import DoubleListComponent from "../app/components/doubleList.js"

export default function Interests() {
    var interests = ["Cloud Computing", "Distributed Systems", "Networking", "The Dark Web", "P vs NP Problem", "Cryptography", "FinTech", "Entrepreneurship", "Venture Capital", "Yoga", "Meditation", "Water Skiing", "Gardening"]

    return (
    <div>
        <PageTitleComponet title="Interests"></PageTitleComponet>
        <DoubleListComponent folder="interests"></DoubleListComponent>
    </div>
    );
  }