import React from 'React';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css"

class Counter extends React.Component {
    state = { count:0 }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });    
    }

    reset = () => {
        this.props.dispatch({ type: 'RESET' });    
    }


    render() {
        return (
            <div>
                <h2 clsssName="m-3">Counter</h2>
                <div clsssName="mx-3 p-3 bg-info">
                <span clsssName="mx-2 p-2 w-25 text-white">{this.state.count}</span>
                <button clsssName="mx-2" onClick={this.decrement}>-</button>
                <button clsssName="mx-2" onClick={this.increment}>+</button>
                <button clsssName="mx-2" onClick={this.reset}>Reset</button>
                </div>
            </div>
                
        )
    }
}

//Add the mapStateToProps function:
function mapStateToProps(state) {
    return {
        count: state.count
    };
}

//Then replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps)(Counter);