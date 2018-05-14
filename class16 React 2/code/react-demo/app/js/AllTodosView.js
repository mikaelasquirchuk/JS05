const React = require("react");

class AllTodosView extends React.Component {
  render() {
    const mappedTodos = this.props.todos.map(todo => {
      return <li>{todo}</li>;
    });
    return (
      <div>
        <h2>Current Todos</h2>
        <ul>{mappedTodos}</ul>
      </div>
    );
  }
}

module.exports = AllTodosView;
