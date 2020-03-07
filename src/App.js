import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    likes: 0,
    text: "",
    darkMode: false,
    thangs: []
  }

  //function revieces action AKA message & payload, and SETS the state
  dispatch = (action) => {
    // action is a POJO (plain old java obj) with 2 keys:
    // 1. the message (string)
    // 2. the payload (any data type)

  //calls the reducer function, passes the action where it expects it returns the modified state
    const newState = this.reducer(action)
  //then set the state
    this.setState(newState)
  }

  //when you call on this func reducer, it just returns a new version of state
    //AKA this func's job is to take multiple things/ action & reduce it down to a single thing (a new state)
    reducer = (action) => {
    switch(action.type){
      //pass in a string (which is a type), & string determines what to invoke
      case "LIKE":
        //use spread operator to create a new obj (that we will return to dispatch), copy the old values from state, 
          // & modify the 1 value you want to change
        return {...this.state, likes: this.state.likes + 1}
      case "DISLIKE":
        return {...this.state, likes: this.state.likes - 1}
      case "DARK":
        return {...this.state, darkMode:  !this.state.darkMode}
      case "TEXT":
        return {...this.state, text: action.payload.target.value}
      case "THANG":
        //add the text inputed to thangs, & resets text to blank
        return {...this.state, thangs: [...this.state.thangs, this.state.text], text: ""}
    }
  }

  renderThangs = () => {
    return this.state.thangs.map(thang => {
      return <li>{thang}</li>
    })
  }

  render(){
    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={() => this.dispatch({type: "DARK"})}>Click to filter dark mode</button>
        <h3>{this.state.text}</h3>
        <input 
          name="text" 
          value={this.state.text} 
          onChange={(e) => this.dispatch({type: "TEXT", payload: e})}/>
        <button onClick={(e) => {
          e.preventDefault()
          this.dispatch({type: "THANG"})
        }}>Add a comment!</button>
        <h4>{this.state.likes} likes</h4>
        <button onClick={() => this.dispatch({type: "LIKE"})}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        <button onClick={() => this.dispatch({type: "DISLIKE"})}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>

        {this.renderThangs()}
      </div>
    );
  }
}

export default App;