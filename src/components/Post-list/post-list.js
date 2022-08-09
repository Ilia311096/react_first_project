import React from "react";
import PostListItem from '../Post-list-item/post-list-item'
import './post-list.css'
const PostList = ({data, onDelete,onImportant,onLike})=>{
    const posts = data.map(({label,key,important,like})=>{
        return (
            <li key= {key} style={{listStyleType: 'none'}}>
                <PostListItem label={label} important = {important} like = {like}
                onDelete = {()=>{onDelete(key)}}
                onImportant = {()=>{onImportant(key)}}
                onLike = {()=>{onLike(key)}}
                />
            </li>
        )
    })
    return (
        <ul className="app-list list-group">
            {posts}
        </ul>
    )
}
export default PostList