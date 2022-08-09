import React, {Component} from "react";
import './post-list-item.css'

class PostListItem extends Component{

    render(){
        const {label,onDelete,onImportant,onLike,like,important} = this.props;
        const baseclasses="app-list-item d-flex justify-content-between"
        const a = important? baseclasses+' important': baseclasses;
        const b = like? a+' like': a;
        return (
            <div className={b}>
                <span onClick={onLike} className="app-list-item-label">{label}</span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm"
                    onClick={onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

export default PostListItem
