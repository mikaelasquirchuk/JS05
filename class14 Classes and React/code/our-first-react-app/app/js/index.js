const React = require("react");
const ReactDOM = require("react-dom");

// const hello = <h1>Hello World</h1>;

// ReactDOM.render(hello, document.querySelector("#app"));

class HelloWorld extends React.Component {
  render() {
    return <h1>Hellow World</h1>;
  }
}

class Greeting extends React.Component {
  render() {
    return <h1>Welcome to my React app</h1>;
  }
}

class HelloUser extends React.Component {
  render() {
    console.log(this);
    const name = this.props.name;
    return <h3> Hello {name}</h3>;
  }
}

class FavouriteNumber extends React.Component {
  render() {
    const num = this.props.num;
    return <p> My favourite number is equal to {num} </p>;
  }
}

ReactDOM.render(<FavouriteNumber num="123" />, document.querySelector("#app"));
