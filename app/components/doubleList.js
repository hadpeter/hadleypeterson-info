export default function DoubleListComponent(props){
    // TODO: open all files in folder and load them into listItems
    var folder = props.folder
    var listItems = []
    var items = listItems.map(function (i) {
    return (
        <div className='indent'>{i}</div>
    );
    });
    return (
        <div className="grid grid-cols-2 gap-4">
            {items}
            <div>{folder}</div>
            <div>foo</div>
            <div>foo4</div>
        </div>
    );
}