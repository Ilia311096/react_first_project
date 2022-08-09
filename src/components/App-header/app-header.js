import React from "react";
import './app-header.css'
const AppHeader = ({liked,all})=>{
    return(
        <div className="d-flex app-header">
            <h1>Ilia Kazakov</h1>
            <h2>Liked {liked} of {all}</h2>
        </div>
    )
}
export default AppHeader