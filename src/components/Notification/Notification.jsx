import React from "react"
import styled from "styled-components"

import { Activity } from "./Activity"
import '../../App.css';

const Picture = styled.img({
    width: '50px',
    height: '50px',
    borderRadius: '20px',
})

const TimePeriod = styled.div({
    color: 'hsl(219, 14%, 63%)',
    fontSize: '16px',
    marginLeft: '15px'
})


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

    const image = require(`../../assets/${avatar}.webp`)
    return (
        <div>

            <DetailedView className={isNew ? 'new-notif' : ''}>
                <Picture src={image} alt={`${name} image`}></Picture>

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