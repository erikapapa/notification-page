import React from "react"
import { Notification } from "./Notification/Notification";

import '../App.css';


export const DetailsContainer = ({data}) => {
    return (
        <React.Fragment>
            {
                data.map((item) => {
                    return (
                        <Notification key={item.name} data={item}></Notification>
                    )
                })
            }
        </React.Fragment>
        
    )
}