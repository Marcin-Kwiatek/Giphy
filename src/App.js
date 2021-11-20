import './App.css';
import { Component } from 'react';


const APIKey = 'hJWmgJyN21BiI8eMqJUl7XrE8Jaci5WD'

class App extends Component {
  state={
    value: "",
    giphy: ""
  }
  render(){
    return (
      <div className="App">
        <div className="title">Giphy Client</div>
        <input onChange={this.changeValue}></input>
        <button onClick={this.searchGiphy} style={{margin:'10px'}}>Search</button>
        <div className="results">Results</div>
        <div className="resultsGiphy">{}</div>
      </div>
    );
  }
  changeValue = e => {
    this.setState({value:e.target.value})
  }
  searchGiphy = () => {
    const API = `https://api.giphy.com/v1/gifs/search?q=${this.state.value}&api_key=${APIKey}`
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
