import React from 'react'
import Counter from '../counter'
class CounterGroup extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            number : 2
        }
        this.handelChange = this.handelChange.bind(this)
    }

	handelChange(inputText){

        if (inputText.target.value == "") {

        } else {
            this.setState({
                number : parseInt(inputText.target.value)
            })
        }


	}

    render() {
        return (
            <div>
                number of counter:<input type="text" onChange={this.handelChange} defaultValue={this.state.number}/>
                <div>{new Array(this.state.number).fill(0).map((value, index) => (<Counter key={index}/>))}</div>
            </div>
        );
    }
    
}

export default CounterGroup