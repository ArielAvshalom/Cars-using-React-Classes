import React from 'react'
//import ReactDOM from "react-dom";

class Car extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            brand : "Mercedes",
            model : "760LI",
            color : "super shiny and expensive",
            year : 2023
        };
    }

    static getDerivedStateFromProps(props, state){
        return {brand : props.brand}
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({year : 2099})

        },
            3000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("root").innerHTML = "before our update, our year was " +prevState.year;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.getElementById("root2").innerHTML = "The updated year is " + this.state.year;
    }

    changeColor = () => {
        this.setState({color : "green"})
    }

    render() {
        return (
            <div>
                <h3>This is my {this.state.brand}!</h3>
                <p>
                    It is a {this.state.model} model from the {this.state.year} lineup and the color is {this.state.color}
                </p>

                <button
                    type = "button"
                    onClick={this.changeColor}
                    >change color to green</button>

                <div id="root"></div>
                <div id="root2"></div>

            </div>
        )
    }

}

export {Car}