import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value:4},
            {id: 2, value:0},
            {id: 3, value:0},
            {id: 4, value:0},
        ]
     }
     handleDelete= counterID =>{
        const counters=this.state.counters.filter(c => c.id!== counterID);
        this.setState({counters});
     };
     handleIncrement= counterC =>{
        counterC.value++;
        console.log("counter ",counterC.id, counterC.value);
        this.setState({counter});
     };
     handleReset = () =>{
        const counters=this.state.counters.map(c=>{
            c.value=0;
            return c;
        });
        this.setState({counters})
     };


    render() { 
        return (
            <div>
                <button 
                onClick={this.handleReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
              {this.state.counters.map(counter => (
              <Counter 
              key={counter.id} 
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement} 
              counter={counter}
              />))}
            </div>

          );
    }
}
 
export default Counters;