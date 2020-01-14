import React, {Component} from "react";
import "./item-list.css";

export default class ItemList extends Component{
    state = {
      items: [
          {itemElem : "Купить хлеб"},
          {itemElem : "Купить воду"},
          {itemElem : "Купить сахар"},
      ]
    };

    render() {
        const {itemText} = this.props;
        const item = this.state.items;
        return (
            <div className="itemList">
                <ul>
                    <li>{item[0].itemElem}</li>
                    <li>{item[1].itemElem}</li>
                    {this.props.children}
                    <li>Сходить нахуй</li>
                </ul>
            </div>
        );
    }

};

