import React, {Component} from "react";

const clickBut = () => {
  console.log("Click")
};

export default class AddItem extends Component{
    render() {
        return(
            <button onClick={clickBut}>Добавить</button>
        )
    }
}