const firebase = require('firebase')

class User {
  checkUser () {
    return (dispatch, getState) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user === null) {
          dispatch(this.login())
        } else {
          const {todos} = getState()
          dispatch(todos.subscribe(user))
        }
      })
    }
  }

  login () {
    return async dispatch => {
      const provider = new firebase.auth.GoogleAuthProvider()
      const result = await firebase.auth().signInWithPopup(provider)
      console.log(result)
    }
  }
}

module.exports = User
