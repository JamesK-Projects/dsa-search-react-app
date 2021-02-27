import React, { Component } from 'react';

const arr1 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

class TextboxLinear extends Component {
    constructor(props){
        super(props);
        this.state = {
            num: 0,
            counter: 0,
            message: ''
        }
    }

    handleTextbox = (e) => {
        this.setState({
            num: e.target.value
        })
        console.log(e.target.value)
    } 

    handleSubmit = (e) => {
        e.preventDefault();
        this.linearSearch(arr1, this.state.num)
    }

    linearSearch = (arr, num) => {
        if(arr == null){
            console.log('error')
            return null;
        }
        else{
            for(let i = 0; i < arr.length; i++){
                if(arr[i] == num){
                    this.setState({
                        message: `It took ${i + 1} attempts to find your number`
                    })
                    break;
                }
                else {
                    this.setState({
                        message: 'Number not found'
                    })
                }
                
            }
        }
    }

    
    render() { 
        return (
            <div className="textbox">
                <h2>Using Linear Search</h2>
                <input type='text' onChange={(e) => {this.handleTextbox(e)}}></input>
                <input type='submit' onClick={(e) => this.handleSubmit(e)}></input>
                <h3>{this.state.message}</h3>
            </div>
        );
    }
}
 
export default TextboxLinear;