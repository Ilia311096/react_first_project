import React, { Component } from "react";
import './post-status-filter.css';

class PostStatus extends Component{
    constructor(props){
        super(props);
        this.buttons = [
            {name:'all',label:'all'},
            {name:'like',label:'liked'}
        ]
    }


    render(){
        const buttons = this.buttons.map(({name,label})=>{
            const active = this.props.filter === name;
            const classes = active? 'btn-info' : 'btn-outline-secondary';
            return (
                <button 
                onClick={()=>{this.props.getFilter(name)}}
                key={name} type='button' className={`btn ${classes}`}>{label}</button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default PostStatus