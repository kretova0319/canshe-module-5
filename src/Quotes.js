import { Component } from "react";

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      author: "",
    };
  }

  async componentDidMount() {
    const link = "https://api.quotable.io/random";
    const response = await fetch(link);
    const data = await response.json();
    this.setState({ content: data.content, author: data.author });
  }

  render() {
    return (
      <div className="quote">
        <p>Цитата: {this.state.content}</p>
        <p>Автор: {this.state.author}</p>
      </div>
    );
  }
}

export default Quotes;
