import { Component } from "react";

export class Users extends Component {
  constructor() {
    super();
    this.state = {
      person: "Alex",
    };
  }

  async componentDidMount() {
    const link = "https://api.randomuser.me/";
    const response = await fetch(link);
    const data = await response.json();

    console.log(data.results[0]);
    console.log(data.results[0].phone);
    console.log(data.results[0].name.first);

    // this.setState({ person: data.results[0] });
  }

  render() {
    return (
      <div>
        {/* {!this.state.person ? (
          <p>Loading... </p>
        ) : (
          <div>
            <p>{this.state.person.name.first}</p>
            <p>{this.state.person.name.last}</p>
          </div>
        )} */}
        <p>{this.state.person}</p>
      </div>
    );
  }
}
