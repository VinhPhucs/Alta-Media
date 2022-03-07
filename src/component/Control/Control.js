import React from "react"
import Search from "../Search/search"
import Ticket from "./Ticket"
import "../../assets/css/control.css"
const Home = ()=>{
    return (
        <div className="content">
            <h1>Đối soát vé</h1>
            <Search />
            <div className="filter-ticket-content">
                <div className="filter-ticket">
                    <Ticket />
                </div>
            </div>
            
        </div>
    )
}

export default React.memo(Home)