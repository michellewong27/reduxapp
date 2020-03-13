//define default state as its own variable
const defaultState = {
    likes: 2000,
    text: "",
    darkMode: false,
    thangs: [],
    beef: "steak"
  }
  
//job of reducer is to return the new state
    //set prevState w/ default value possibly at beginning
  function reducer(prevState = defaultState, action){
     //whatever is returned from this function BECOMES your newv state
        //return an object, (right now ->allows us to always return previous state)
    switch(action.type){
      case "LIKE":
        return {...prevState, likes: prevState.likes + 1}
      case "DISLIKE":
        return {...prevState, likes: prevState.likes - 1}
      case "DARK_MODE":
        return {...prevState, darkMode: !prevState.darkMode}
      case "CHANGE_TEXT":
        return {...prevState, [action.payload.name]: action.payload.newText}
      case "ADD_THANG":
        return {...prevState, thangs: [...prevState.thangs, prevState.text], text: ""}
      default: 
        return prevState
    }
  }
  
  
  export default reducer