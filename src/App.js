import React, { useState }  from 'react';
import styled from 'styled-components';

import { DetailsContainer } from './components/DetailsContainer';
import { data } from './utils/data';

import './App.css';

const MainContainer = styled.div({
  width: '50vw',
  background: 'white',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  padding: '30px',
  marginTop: '20px',
  marginBottom: '20px',

  borderRadius: '10px'
})

const HeaderContainer = styled.div({
  display: 'flex',
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

const Btn = styled.button({
  alignSelf: 'center',
  color: 'hsl(219, 14%, 63%)',
  textDecoration: 0,
  background: 'none',
  border: 'transparent',
  fontSize: '14px'
})

const MarkRead = styled(Btn)`
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

const App = () => {
  const [notifsData, setNotifData] = useState(data);
  const [hasNewNotifs, setHasNewNotifs] = useState(true);

  const updateNotifications = () => {
    const tempArray = data.map(item =>
      item.isNew ? { ...item, isNew: false }: item
    );

    setNotifData(tempArray);
    setHasNewNotifs(false);
  }

  return (
    <div className="App">
      <MainContainer>
        <HeaderContainer>
          <SubContainer>
            <Header>Notifications</Header>
            {
              hasNewNotifs ? <Unread> 3 </Unread> : null
            }
            
          </SubContainer>

          <MarkRead type="button" onClick={updateNotifications}>Mark all as read</MarkRead>
        </HeaderContainer>

        <DetailsContainer data={notifsData}/>

      </MainContainer>


    </div>
  );
}

export default App;
