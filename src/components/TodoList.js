import React, { Component } from 'react'
import Item from './TodoItem'

export default class toDoList extends Component {
  render() {
    return (
      <div>
        todo list
        <Item></Item>
      </div>
    )
  }
}
