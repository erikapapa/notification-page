
import React from "react"
import styled from "styled-components"

const Pic = styled.img({
    width: '50px',
    height: '50px',
    borderRadius: '20px',
})

export const Image = ({imgSrc, alt}) => {
    console.log(imgSrc)

    const avatar = require(`../../assets/${imgSrc}.webp`)

    return(
        <Pic src={avatar} alt={alt}></Pic>
    )
}