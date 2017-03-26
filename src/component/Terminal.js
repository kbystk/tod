const {createElement, Component} = require('react')
const {connect} = require('react-redux')

class Terminal extends Component {
  componentWillReceiveProps (next) {
    if (this.props.todos.body.size !== next.todos.body.size) {
      this.refs.input.value = ''
    }
  }

  onClick () {
    this.props.dispatch(this.props.todos.add(this.refs.input.value))
  }

  render () {
    return createElement(
      'div', null,
      createElement('input', {
        ref: 'input'
      }),
      createElement('button', {
        onClick: this.onClick.bind(this)
      }, 'Add')
    )
  }
}

module.exports = connect(
  ({todos}) => ({todos}),
  dispatch => ({dispatch})
)(Terminal)
