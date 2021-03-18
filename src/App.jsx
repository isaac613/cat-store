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

        <div className="container">

          <h1>Cat market</h1>

          <img src={this.state.data[0].url} alt="cat" />
          <h3>PRICE</h3>
          <p>Name and age</p>
          <button onClick={this.fetchData}>£50</button>
          <img src={this.state.data[1].url} alt="cat" />
          <h3>PRICE</h3>
          <p>Name and age</p>
          <button onClick={this.fetchData}>£150</button>
          <img src={this.state.data[2].url} alt="cat" />
          <h3>PRICE</h3>
          <p>Name and age</p>
          <button onClick={this.fetchData}>£25</button>
          <img src={this.state.data[3].url} alt="cat" />
          <h3>PRICE</h3>
          <p>Name and age</p>
          <button onClick={this.fetchData}>£100</button>
        </div>

        <button onClick={this.fetchData}>Basket</button>
        
      </div>
    );
  }
}

const Error = () => {
  <div>
    <h1>error</h1>
  </div>;
};
export default App;
