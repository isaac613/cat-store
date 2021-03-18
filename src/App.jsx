import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data, isLoading: false }));
  };
  render() {
    if (this.state.data.error) return <Error />;
    if (this.state.isLoading) return <h1>Loading</h1>;

    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={this.fetchData}>Get some</button>
        <img src={this.state.data[0].url} alt="cat" />
      </div>
    );
  }
}
/* Random comment for test commit */
const Error = () => {
  <div>
    <h1>error</h1>
  </div>;
};
export default App;
