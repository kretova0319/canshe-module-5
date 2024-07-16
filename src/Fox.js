import { Component } from "react";

export class Fox extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      link: "",
    };
  }

  async componentDidMount() {
    const link = "https://randomfox.ca/floof/";
    const response = await fetch(link);
    const data = await response.json();
    // console.log(data);
    // console.log(data.image);
    this.setState({ image: data.image, link: data.link });
  }

  render() {
    return (
      <div className="fox">
        <img src={this.state.image} alt="a random fox" width="200px" />
        <p>Ссылка на картинку: {this.state.link}</p>
      </div>
    );
  }
}
