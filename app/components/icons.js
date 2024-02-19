import Link from 'next/link'

export default function Icons(props) {

    var listItems = [
        {
            "image": "github.png ",
            "link": "https://github.com/hadpeter"
        },
        {
            "image": "linkedin.png",
            "link": "https://www.linkedin.com/in/hadley-peterson/"
        },
        {
            "image": "substack.png",
            "link": "https://hadleypeterson.substack.com/"
        }
    ]
    var icons = listItems.map(function (i) {
        return (
            <Link
            href={i.link}
            className="hover:underline mt-6 mr-4 hover:shadow-lg transition-shadow duration-200">
            <img src={i.image} className=" w-12 h-12 mr-4" />
            </Link>
        );
        });

    return (
        <div className="flex items-center">
            {icons}
        </div>
    )
}
