import React, { Component } from 'react';

const arr1 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
const arr2 = arr1.sort((a, b) => a - b);

class TextboxBinary extends Component {
    constructor(props){
        super(props);
        this.state = {
            num: 0,
            counter: 1,
            message: 'blank'
        }
    }

    handleTextbox = (e) => {
        this.setState({
            counter: 1
        })
        this.setState({
            num: e.target.value
        })
        console.log(e.target.value)
    } 

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.binarySearch(arr2, this.state.num)
    }

    binarySearch = (arr, num, start, end) => {
        var start = start === undefined ? 0 : start;
        var end = end === undefined ? arr.length: end;
        let count = this.state.counter;
        if(start > end){
            this.setState({
                message: 'Number not found'
            })
            return ;
        }
        const index = Math.floor((start + end)/2);
        const item = arr[index];
        if(item == num){
            console.log(count)
            this.setState({
                message: `It took ${count} attempts to find your number`
            })
            return;
        }
        else if(item < num){
            console.log(count, 'one')
            this.setState({
                counter: this.state.counter++
            })
            return this.binarySearch(arr, num, index + 1, end);
        }
        else if(item > num){
            console.log(count, 'two') 
            this.setState({
                counter: this.state.counter++
            })
            return this.binarySearch(arr, num, start, index - 1);
        } 
    }

    
    render() { 
        return (
            <div className="textbox">
                <h2>Using Binary Search</h2>
                <input type='text' onChange={(e) => {this.handleTextbox(e)}}></input>
                <input type='submit' onClick={(e) => this.handleSubmit(e)}></input>
                <h3>{this.state.message}</h3>
            </div>
        );
    }
}
 
export default TextboxBinary;