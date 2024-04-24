import React from 'react';
import styled from 'styled-components';

import { DetailsContainer } from './components/DetailsContainer';

import './App.css';

const MainContainer = styled.div({
  // display: 'flex',

  width: '50vw',

  background: 'rgb(250, 224, 202)',

  padding: '30px',
  marginTop: '20px',
  marginBottom: '20px',

  borderRadius: '10px'
})

const HeaderContainer = styled.div({
  display: 'flex',
  // background: 'yellow',
  marginBottom: '20px',
  justifyContent: 'space-between'
})

const SubContainer = styled.div({
  display: 'flex'
})

const Header = styled.p({
  fontSize: '24px',
  fontWeight: '800',
  margin: 0,
})


const Unread = styled.div({
  color: 'white',
  background: 'hsl(219, 85%, 26%)',
  padding: '5px 15px',
  fontSize: '16px',
  fontWeight: '800',
  borderRadius: '5px',
  marginLeft: '10px',
})

const MarkRead = styled.div({
  // justifyContent: 'flex-end',
  alignSelf: 'center',
  color: 'hsl(219, 14%, 63%)',
})

function App() {
  return (
    <div className="App">
      <MainContainer>
        <HeaderContainer>
          <SubContainer>
            <Header>Notifications</Header>
            <Unread> 3 </Unread>
          </SubContainer>

          <MarkRead>Mark all as read</MarkRead>
        </HeaderContainer>

        <DetailsContainer/>

      </MainContainer>


    </div>
  );
}

export default App;
