import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up" }, { id: 2, title: "wash face" }],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handleChange");
  };
  handleSubmit = e => {
    console.log("handleSubmit");
  };
  clearList = e => {
    console.log("clearList");
  };
  handleDelete = id => {
    console.log("handleDelete");
  };
  handleEdit = id => {
    console.log("handleEdit");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.state.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
