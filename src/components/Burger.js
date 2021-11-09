import React, { Component } from "react";
import "./Burger.css";
import DisplayIngredients from "./DisplayIngredients";
import Item from "./Item";
export default class Burger extends Component {
  state = {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
    price: 0.0,
  };

  handleClick = (function_name, ingredient) => {
    let { lettuce, bacon, cheese, meat, price } = this.state;

    let setingredient;
    let value = this.state.price;
    switch (ingredient) {
      case "lettuce": {
        setingredient = lettuce;
        break;
      }
      case "bacon": {
        setingredient = bacon;
        break;
      }
      case "cheese": {
        setingredient = cheese;
        break;
      }
      case "meat": {
        setingredient = meat;
        break;
      }
      default:
        break;
    }
    if (function_name === "add") {
      setingredient = setingredient + 1;
      if (ingredient === "meat") {
        value = price + 3.5;
      } else {
        value = price + 2;
      }
    } else {
      setingredient = setingredient - 1;
      if (ingredient === "meat" && setingredient >= 0) {
        value = price - 3.5;
      } else {
        if (setingredient >= 0) value = price - 2;
      }
    }
    this.setState({
      [ingredient]: setingredient >= 0 ? setingredient : 0,
    });
    this.setState({
      price: value >= 0 ? value : 0,
    });
  };

  render() {
    let printBill;
    if (this.state.price > 0)
      printBill = (
        <button
          className="btn btn-success"
          onClick={() => alert("Total Bill: " + this.state.price + "$")}
        >
          Print Bill
        </button>
      );
    return (
      <>
        <div className="burgerIngredients">
          <div className="top"></div>
          <DisplayIngredients ingredients={this.state} />
          <div className="bottom"></div>
        </div>
        <div className="ingredientsBlock">
          Current Price: {this.state.price}$
          <Item name="lettuce" handleClick={this.handleClick} />
          <Item name="bacon" handleClick={this.handleClick} />
          <Item name="cheese" handleClick={this.handleClick} />
          <Item name="meat" handleClick={this.handleClick} />
          {printBill}
        </div>

        <div></div>
      </>
    );
  }
}
