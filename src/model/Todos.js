const firebase = require('firebase')
const {Record, OrderedMap} = require('immutable')

class Todos extends Record({
  kind: 'Todos',
  body: OrderedMap()
}) {
  add (text) {
    return dispatch => {
      const user = firebase.auth().currentUser
      firebase.database().ref(`users/${user.uid}`).push({
        text,
        isDone: false
      })
    }
  }

  subscribe (user) {
    return dispatch => {
      firebase.database().ref(`users/${user.uid}`).on('value', snapshot => {
        dispatch({
          type: 'todosRecieved',
          payload: this.set('body', OrderedMap(snapshot.val()))
        })
      })
    }
  }
}

module.exports = Todos
