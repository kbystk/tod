const {createElement, Component} = require('react')
const {connect} = require('react-redux')

class Todos extends Component {
  render () {
    const els = this.props.todos.body.map(
      ({text, isDone}, key) => createElement('li', {key}, text)
    ).toArray()
    return createElement('ul', null, els)
  }
}

module.exports = connect(
  ({todos}) => ({todos}),
  dispatch => ({dispatch})
)(Todos)
