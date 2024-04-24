import React from "react"
import styled from "styled-components"

import { Image } from "./Image"
import { Activity } from "./Activity"
import { TimePeriod } from "./TimePeriod"

import '../../App.css';


const DetailedView = styled.div({
    display: 'flex',
    margin: '10px 0px',
    padding: '15px 20px',
    borderRadius: '5px',
})

const SubContainer = styled.div({
    display: 'block'
})

const Message = styled.div({
    border: '1px solid hsl(219, 12%, 42%)',
    padding: '15px 20px',
    margin: '20px 10px 0 15px',
    borderRadius: '5px'
})

export const Notification = ({ data }) => {
    const { isNew, avatar, name, activity, timePeriod, message } = data;

    console.log("data", data, avatar)


    return (
        <div>

            <DetailedView className={isNew ? 'new-notif' : ''}>
                <Image imgSrc={avatar} alt={name} />

                <SubContainer>
                    <Activity
                        activity={activity}
                        name={name}
                        isNew={isNew}
                    />

                    <TimePeriod>
                        {timePeriod} ago
                    </TimePeriod>

                    {
                        message ? <Message> {message} </Message> : null
                    }
                </SubContainer>


            </DetailedView>
        </div>

    )
}