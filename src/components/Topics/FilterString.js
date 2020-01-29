import React, { Component } from "react"

    class FilterString extends Component{
        constructor(){
            super();
                this.state = {
                    names: ['Jax', 'Whitney', 'Josh', 'Karen', 'Paige', 'Grace', 'Kira', 'Rex'],
                    userInput: '',
                    filteredNames: []

                }
        }

        handleChange = (event) => {
            this.setState({
                userInput: event.target.value
            })

        }

        filterNames = (userInput) => {
            this.setState({ 
              filteredNames: this.state.names.filter(el => el === this.state.userInput)
            })
        }


        render() {
            return (
                <div className = "puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <input className = "inputLine" onChange = {this.handleChange}></input>
                <button className = "confirmationButton" onClick = {this.filterNames}>Filter</button>
                <span className = "puzzleText"> Names: {JSON.stringify(this.state.names)}</span>
                <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames)}</span>

                </div>
            )
        }
    }
   
   
export default FilterString