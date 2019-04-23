// TODO

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            done: false,
            hover: false
        }
    }

    onListItemClick() {
        this.setState({
            done: !this.state.done
        });
    }

    onListItemHover() {
        this.setState({
            hover: !this.state.hover
        })
    }

    render() {
        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none',
            fontWeight: this.state.hover ? 'bold' : 'normal'
        }

        return <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    }
}

// var onListItemClick = () => console.log('clicked');


var GroceryList = (props) => (
    <ul>
        {props.todos.map(todo => 
            <GroceryListItem item={todo} />    
        )}
    </ul>
    );

       
ReactDOM.render(<GroceryList todos={['grapes', 'bananna', 'pineapple']}/>, document.getElementById('app'));


// class GroceryListItem extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return <li onClick={onListItemClick}>{this.props.item}</li>
//     }
// }

// var onListItemClick = () => console.log('clicked');


// var GroceryList = (props) => (
//     <ul>
//         {props.todos.map(todo => 
//             <GroceryListItem item={todo} />    
//         )}
//     </ul>
//     );

       
// ReactDOM.render(<GroceryList todos={['grapes', 'bananna', 'pineapple']}/>, document.getElementById('app'));

// ============================================

// var GroceryListItem = (props) => (
//     <li onClick={onListItemClick}>{props.item}</li>
// ) 

// var GroceryList = (props) => (
//     <ul>
//         <GroceryListItem item={'grapes'} />
//         <GroceryListItem item={'bananna'} />
//         <GroceryListItem item={'pineapple'} />
//     </ul>
//     )

//     var onListItemClick = () => console.log('clicked');
       
// ReactDOM.render(<GroceryList />, document.getElementById('app'));
// =================================================
// TODO
// var GroceryList = (props) => (
//     <ul>
//         <GroceryListItem item={'grapes'} />
//         <GroceryListItem item={'bananna'} />
//         <GroceryListItem item={'pineapple'} />
//     </ul>
// )

// var GroceryListItem = (props) => (
//     <li>{props.item}</li>
// )

// // groceryItems = ['Oranges', 'Carrots', 'Cucumbers'];

// ReactDOM.render(<GroceryList />, document.getElementById('app'));

// -------------------------

// var TodoList = (props) => {

//     // This function will be called when the first `<li>` below is clicked on
//     // Notice that event handling functions receive an `event` object
//     // We want to define it where it has access to `props`
  
//     var onListItemClick = (event) => {
//       console.log('I got clicked');
//     };
  
//     // Because we used curly braces with this arrow function
//     // we have to write an explicit `return` statement
//     return (
//       <ul>
//         <li onClick={onListItemClick}>{props.todos[0]}</li>
//         <li>{props.todos[1]}</li>
//         <li>{props.todos[2]}</li>
//       </ul>
//     );
//   }
  
//   var App = () => (
//     <div>
//       <h2>My Todo List</h2>
//       <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//     </div>
//   );