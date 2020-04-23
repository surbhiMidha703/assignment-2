import React from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends React.Component {
  state = {
    text: '',
    textLength: '',
  }

  changeHandler = (e) => {
    this.setState({text: e.target.value,
      textLength: e.target.value.length,})
  }

  removeChar = (index) => {
    let splitText = this.state.text.split('')
    splitText.splice(index, 1)
    this.setState({text: splitText.join('')})
  }

  render(){
    let chars = null

     if(this.state.textLength > 0 ){
     
      chars = this.state.text.split('').map((c, index) => {
        return <CharComponent letter={c}
        key={index}
        remove={() => this.removeChar(index)}/>
      })
    }

    return (
      <div className="App">
        <h1> Enter the text in the input field</h1>
        <input type='text' onChange={this.changeHandler.bind(this)}/>
        <p> Length of text is: {this.state.textLength}</p>
        {
          <ValidationComponent textLength={this.state.textLength}/>
        }
        {chars}
      </div>
    );
  }
}

export default App;
