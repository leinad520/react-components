// TODO
var GroceryList = (props) => (
    <ul>
        <GroceryListItem item={'grapes'} />
        <GroceryListItem item={'bananna'} />
        <GroceryListItem item={'pineapple'} />
    </ul>
)

var GroceryListItem = (props) => (
    <li>{props.item}</li>
)

// groceryItems = ['Oranges', 'Carrots', 'Cucumbers'];

ReactDOM.render(<GroceryList />, document.getElementById('app'));