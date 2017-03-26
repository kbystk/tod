const {applyMiddleware, createStore, combineReducers} = require('redux')
const thunk = require('redux-thunk').default
const User = require('./model/User.js')
const Todos = require('./model/Todos.js')

module.exports = applyMiddleware(thunk)(createStore)(combineReducers({
  user: (state = new User()) => state,
  todos: (state = new Todos(), action) =>
    action.payload !== undefined
      ? action.payload.kind === 'Todos' ? action.payload : state
      : state
}))
