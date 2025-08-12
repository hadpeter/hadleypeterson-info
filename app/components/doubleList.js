import Image from 'next/image'
import cn from 'classnames'

export default function DoubleListComponent(props){
    var listItems = props.items
    var items = listItems.map(function (i) {
    return (
        <li>{i.name}</li>
        // <div className="flex rounded-md outline outline-black justify-center items-center flex-col">
        //     <p className="text-center">{i.name}</p>
        //     {/* <Image
        //         src={i.image}
        //         alt={`Cover Image for ${i.name}`}
        //         className='w-1/2 mx-6 my-2'
        //         width={200}
        //         height={100}
        //         /> */}
        // </div>
    );
    });
    return (
        <div>
            <ul class="visible_list">
                {items}
            </ul>
        </div>
    );
}