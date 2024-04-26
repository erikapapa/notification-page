import React from "react"
import { Notification } from "./Notification/Notification";

import { data } from "../utils/data"

import '../App.css';


export const DetailsContainer = () => {
    

    return (
        <React.Fragment>
            {
                data.map((item) => {
                    return (
                        <Notification data={item}></Notification>
                    )
                })
            }
        </React.Fragment>
        
    )
}