import React, { Component } from "react";
import Counter from "./Counter.jsx";
import List from "./List.jsx";
import "./AppStyle.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {value: "Разобраться как делать"},
                {value: "Сделать"},
                {value: "Разобраться с GitHub"},
                {value: "Залить в репу"}
            ]
        };
    }
    render() {
        const {list} = this.state;

        return (
            <div>
                <h1>My first NODE counter</h1>
                <Counter/>
                <List data={list} title= "Как делать ДЗ?"/>
            </div>
        );
    }
}
export default App;
