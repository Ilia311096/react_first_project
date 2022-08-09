import React, { Component } from "react";
import './search-panel.css'

class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            term:''
        }
    }

    updateState = (e)=>{
        const term = e.target.value;
        this.setState({term});
        this.props.getTerm(term);
    }

    render(){
        return(
            <input 
            onChange={this.updateState}
            placeholder="search"
            className="form-control search-input"
            type="text">
            </input>
        )
    }
}
 

export default SearchPanel;