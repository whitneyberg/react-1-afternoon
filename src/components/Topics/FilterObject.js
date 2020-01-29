import React, { Component } from "react"

    class FilterObject extends Component{
        constructor(){
            super();
            this.state = {
                unfilteredArray: [
                  {
                    name: 'Whitney',
                    title: 'Developer',
                    age: 29,
                  },
                  {
                    name: 'RickyBobby',
                    age: 45,
                    hairColor: 'brown'
                  },
                  {
                    name: 'RonBergundy',
                    title: 'Anchorman',
                  }
                ],
          
                userInput: '',
                filteredArray: []
              }
            }

            handleChange = (event) => {
                this.setState({
                    userInput: event.target.value
                })
    
            }
            
            Something = (prop) => {
                this.setState({
                    filteredArray: this.state.unfilteredArray.filter(el => el.hasOwnProperty(this.state.userInput))
                        
                })
            }
                    
                    
          


        render() {
            return (
                <div className = "puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <input className = "inputLine" onChange = {this.handleChange}></input>
                <button className = "confirmationButton" onClick = {this.Something}>Filter</button>
                <span className = "puzzleText"> Original: {JSON.stringify(this.state.unfilteredArray)}</span>
                <span className="resultsBox filterStringRB"> Filtered Array: { JSON.stringify(this.state.filteredArray)}</span>

                </div>
            )
        }
    }
   
export default FilterObject