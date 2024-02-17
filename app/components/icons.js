import Link from 'next/link'

export default function Icons(props) {

    var listItems = [
        {
            "image": "github.png",
            "link": "https://github.com/hadpeter"
        }
    ]
    var icons = listItems.map(function (i) {
        return (
            <Link
            href={i.link}
            className="hover:underline">
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
