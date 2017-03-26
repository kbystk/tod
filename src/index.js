const firebase = require('firebase')
const {createElement, Component} = require('react')
const {render} = require('react-dom')
const {Provider, connect} = require('react-redux')
const Terminal = require('./component/Terminal.js')
const Todos = require('./component/Todos.js')
const store = require('./store.js')

firebase.initializeApp({
  apiKey: 'AIzaSyC0C-wwlEu75XK1EyZiCLSY8RMBX-kU5oQ',
  authDomain: 'kbystk-tod.firebaseapp.com',
  databaseURL: 'https://kbystk-tod.firebaseio.com',
  storageBucket: 'kbystk-tod.appspot.com',
  messagingSenderId: '635664037517'
})

class Main extends Component {
  componentDidMount () {
    this.props.dispatch(this.props.user.checkUser())
  }

  render () {
    return createElement(
      'div', null,
      createElement(Terminal), createElement(Todos)
    )
  }
}

render(
  createElement(Provider, {store}, createElement(
    connect(
      ({user}) => ({user}),
      dispatch => ({dispatch})
    )(Main)
  )),
  document.getElementById('app')
)
