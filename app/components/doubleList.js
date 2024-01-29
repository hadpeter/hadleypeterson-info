export default function DoubleListComponent(props){
    // TODO: open all files in folder and load them into listItems
    var listItems = props.items
    var items = listItems.map(function (i) {
    return (
        <div className="rounded-md outline outline-offset-6 outline-black text-center">
            {i}
        </div>
    );
    });
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 justify-center mt-8 mx-48">
                {items}
            </div>
        </div>
    );
}