import React, { Component } from "react";
import Pt from "prop-types";
class Record extends Component {    
    HendClick = () => {
        console.log('this is click',this);
    }
    render() {
        return ( <div>
            <h2> This is Component Class base { this.props.name } </h2> 
            <button onClick={this.HendClick}> On Click </button> </div>
        );
    }
}
Record.propTypes = {
    name: Pt.string.isRequired
};

Record.defaultProps = {
    name: "ankit"
};
export default Record;