import React, { Component } from "react"

    class Palindrome extends Component{
        constructor(){
            super();
                this.state = {
                    userInput: '',
                    palindrome: ''
            }
        }

        handleChange = (event) => {
            this.setState({
                userInput: event.target.value
            })

        }

         isPalindrome = (userInput) => {
             let reversed = ''
             if(this.state.userInput.split('').reverse().join('') ===
            this.state.userInput){ 
                reversed = 'true'

            } else {
                reversed = 'false'
            }

            this.setState({
                palindrome : reversed
            })
             
        }


        render() {
            return (
                <div className = "puzzleBox PalindromePB">
                <h4>Palindrome</h4>
                <input className = "inputLine" onChange = {this.handleChange}></input>
                <button className = "confirmationButton" onClick = {this.isPalindrome}>Check</button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>

                </div>
            )
        }
    }
   
export default Palindrome