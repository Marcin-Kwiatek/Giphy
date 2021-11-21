import './App.css';
import { Component } from 'react';


const APIKey = 'hJWmgJyN21BiI8eMqJUl7XrE8Jaci5WD'

class App extends Component {
  state={
    giphy: []
  }
  render(){
    return (
      <div className="App">
        <div className="title">Giphy Client</div>
        <input onChange={this.changeValue}></input>
        <div className="results">Results</div>
        <div className="resultsGiphy">{this.state.giphy.map(gif => <img key={gif.id} src={gif.images.downsized.url}></img> )}</div>
      </div>
    );
  }
  changeValue = e => {
    this.searchGiphy(e.target.value)
  }
  searchGiphy = (value) => {
    const API = `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=${APIKey}`
    fetch(API)
        .then(response => {
          if(response.ok){
            return response
          }
        })
        .then(response => response.json())
        .then(data => {
          this.setState({giphy:data.data})
          console.log(this.state.giphy)
        })       
      }
}
export default App;
