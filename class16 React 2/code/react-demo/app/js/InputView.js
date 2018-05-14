const React = require("react");

class InputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleKeyPress(event) {
    this.setState({ todo: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { todo } = this.state;
    this.props.addTodo(todo); // call App's add todo function
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleKeyPress}
          />
          <input type="submit" value="Add todo" />
        </form>
      </div>
    );
  }
}
module.exports = InputView;
