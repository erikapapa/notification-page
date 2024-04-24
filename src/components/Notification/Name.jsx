import React from "react"
import styled from "styled-components"

const NameLabel = styled.div({
    color: 'black',
    fontSize: '16px',
    fontWeight: 'bolder',
    marginRight: '10px',
    marginLeft: '15px'
})




export const Name = ({children}) => {
    return(
        <NameLabel>{children}</NameLabel>
    )
}