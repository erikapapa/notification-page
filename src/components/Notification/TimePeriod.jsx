import React from "react"
import styled from "styled-components"

const Time = styled.div({
    color: 'hsl(219, 14%, 63%)',
    fontSize: '16px',
    // fontWeight: 'bolder',
    // marginRight: '10px',
    marginLeft: '15px'
})




export const TimePeriod = ({children}) => {
    return(
        <Time>{children}</Time>
    )
}