import React from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends React.Component {
  state = {
    text: '',
    textLength: '',
    textEntered: false
  }

  changeHandler = (e) => {
    this.setState({text: e.target.value,
      textLength: e.target.value.length,
      textEntered: true})
  }

  removeChar = (textArr, index) => {
    textArr.splice(index, 1)
    this.setState({text: textArr.join('')})
  }

  render(){
    let chars = null

     if(this.state.textLength > 0 ){
      let text = this.state.text
      let textArr = text.split('')
  
      chars = textArr.map((c, index) => {
        return <CharComponent letter={c}
        key={index}
        remove={() => this.removeChar(textArr, index)}/>
      })
    }

    return (
      <div className="App">
        <h1> Enter the text in the input field</h1>
        <input type='text' onChange={this.changeHandler.bind(this)}/>
        <p> Length of text is: {this.state.textLength}</p>
        {this.state.textEntered && 
          <ValidationComponent textLength={this.state.textLength}/>
        }
        {chars}
      </div>
    );
  }
}

export default App;
