import React, { Component } from "react";
import AppHeader from '../App-header/app-header';
import SearchPanel from "../Search-panel/search-panel";
import PostStatus from "../Post-status/post-status-filter";
import PostList from '../Post-list/post-list'
import PostAddForm from '../Post-add-form/post-add-form'
import './app.css'


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {label:'first', important: true, like:false, key:1},
                {label:'second', important: false, like:true, key:2},
                {label:'therd', important: false, like:false, key:3}
            ],
            term:'',
            filter:'all'
        };
        this.maxId = 4;
    }
    onDelete = (id)=>{
        this.setState(({data})=>{
            return (
                {data: data.filter(item=>item.key !==id)}
            )
        })
    }
    addForm = (post)=>{
        this.setState(({data})=>{
            return (
                {data: [...data,{label:post, important: false, key:this.maxId++}]}
            )
        })
    }
    onImportant = (id)=>{
        this.setState(({data})=>{
            const index = data.findIndex(item=> item.key===id);
            const newData = [...data];
            newData[index].important= !newData[index].important;
            return(
                {data:newData}
            )
        })
    }
    onLike = (id)=>{
        this.setState(({data})=>{
            const index = data.findIndex(item=> item.key===id);
            const newData = [...data];
            newData[index].like= !newData[index].like;
            return(
                {data:newData}
            )
        })
    }
    searchPost=(term,items)=>{
        if(term.length ===0){
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term)>-1
        })
    }

    getTerm = (term)=>{
        this.setState({term})
    } 

    filterPosts = (filter,data)=>{
        if(filter ==='all'){
            return data
        }
        return data.filter(({like})=>{
            return like
        })
    }
    getFilter = (filter)=>{
        this.setState({filter})
    } 

    render(){
        const {data,term,filter} = this.state;
        const finalData = this.filterPosts(filter, this.searchPost(term,data));
        const liked = finalData.filter(item=>item.like).length;
        const all = finalData.length;
        return (
            <div className="app">
            <AppHeader
            liked={liked}
            all={all}
            />
            <div className="search-panel d-flex">
                <SearchPanel getTerm={this.getTerm}/>
                <PostStatus filter={filter} getFilter={this.getFilter}/>
            </div>
            <PostList data = {finalData}
            onDelete = {this.onDelete}
            onImportant = {this.onImportant}
            onLike = {this.onLike}
            />
            <PostAddForm addForm={this.addForm}/>
            </div>
        )
    }
}

export default App;