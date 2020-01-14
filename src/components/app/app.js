import React, {Component} from "react";
import AppHeader from "../app-header/app-header";
import TodoInput from "../todo-input/todo-input";
import AddItem from "../add-item/add-item";
import ItemList from "../item-list/item-list";
import "./app.css";

export default class App extends Component {


   render() {

       return (
           <div className="appBlock">
                <AppHeader />
                <TodoInput />
                <AddItem />
               <ItemList itemText = {"Купить хлеб!"}>
                   <p>COLOR</p>
               </ItemList>
           </div>
       )
   }
}