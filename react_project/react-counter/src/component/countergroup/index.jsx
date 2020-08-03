import React from 'react'
import Counter from '../counter'
class CounterGroup extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            number : 0
        }
        this.handelChange = this.handelChange.bind(this)
    }

	handelChange(event){

        var inputNumber = Number(event.target.value);
        if (!isNaN(inputNumber)) {
            this.setState({
                number : inputNumber
            })
        } else {
            alert("error inputs")
            this.setState({
                number : 0
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