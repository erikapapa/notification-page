import React from "react"
import styled from "styled-components"


const Container = styled.div({
    fontSize: '16px',
    display: 'flex',

})

const NameLabel = styled.div({
    color: 'black',
    fontSize: '16px',
    fontWeight: 'bolder',
    marginRight: '5px',
    marginLeft: '15px'
})

const Text = styled.div({
    color: 'hsl(219, 14%, 63%)',
    fontWeight: '800',
    marginRight: '5px',

})

const Link = styled.a({
    fontWeight: '800',
    color: 'hsl(219, 12%, 42%)',
    marginRight: '10px',
    textDecoration: 'none',
})



const ActiveNotif = styled.div({
    background: 'hsl(1, 90%, 64%)',
    borderRadius: '10px',
    width: '10px',
    height: '10px',
    display: 'flex',
    alignSelf: 'center'
})

export const Activity = ({ activity, name, isNew }) => {

    const { text, link } = activity;

    return (
        <React.Fragment>
            <Container>
                <NameLabel>{name}</NameLabel>
                <Text>{text}</Text>

                {
                    link ? <Link href="https://google.com"> {link} </Link> : null
                }

                {
                    isNew ? <ActiveNotif /> : null
                }


            </Container>
            

        </React.Fragment>

    )
}