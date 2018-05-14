const React = require("react");
const ReactDOM = require("react-dom");

const App = require("./App");

ReactDOM.render(<App />, document.querySelector("#app"));

// class Hello extends React.Component {
//   constructor(props) {
//     super(props); // inherit react component functionality
//     // typicially you will set this state here
//     // create copies of event handlers and ensure `this` works
//     this.boundHandleClick = this.handleClick.bind(this);
//     this.boundHandleRightClick = this.handleRightClick.bind(this);
//     // Create a copy of this.handleRightClick
//     // Don't run execute immediately
//     // When that copy is executed
//     // Make sure that the keyword `this` refers to the instance
//     // So that we can refer to this.props, this.state, etc.
//     this.boundMouseOver = this.mouseOver.bind(this);
//   }
//   handleClick() {
//     console.log(this); // => references undefined
//   }
//   handleRightClick() {
//     console.log(this);
//   }
//   mouseOver() {
//     const { name } = this.props;
//     console.log(`You moved your mouse over ${name}`);
//   }
//   render() {
//     console.log(this); // => references an instance of hello
//     return (
//       <div>
//         <h1
//           onClick={this.boundHandleClick}
//           onContextMenu={this.boundHandleRightClick}
//           onMouseOver={this.boundMouseOver}
//         >
//           Hello {this.props.name}
//         </h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Hello name="Serge" />, document.querySelector("#app"));
