import { Component } from "react";

export class Dogs extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
    };
  }

  async componentDidMount() {
    const link = "https://random.dog/woof.json";
    const response = await fetch(link);
    const data = await response.json();
    // console.log(data);
    // console.log(data.url);
    this.setState({ image: data.url });
  }

  render() {
    return (
      <div className="dog">
        <img src={this.state.image} alt="a random dog" width="200px" />
      </div>
    );
  }
}
