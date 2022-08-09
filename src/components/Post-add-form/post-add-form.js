import React,{Component} from "react";
import './post-add-form.css'

class PostAddForm extends Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    updateState = (e)=>{
        this.setState(({text})=>{
            return (
                {text: e.target.value}
            )
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addForm(this.state.text);
        this.setState({text:''})
    }
    render(){
        return (
            <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                <input
                placeholder="write"
                onChange={this.updateState}
                className="form-control new-post-label"
                value={this.state.text}
                >
                </input>
                <button
                type="submit"
                className="btn btn-outline-secondary"
                >add post</button>
            </form>
        )
    }
}

export default PostAddForm