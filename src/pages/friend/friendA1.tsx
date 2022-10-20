import React from 'react';
import styled from 'styled-components';
import UserInfo  from '../../app.components/friend/a1/userInfo';
import TopBanner from '../../app.components/friend/a1/topBanner';
import FriendList from '../../app.components/friend/a1/friendList';


const Page_FriendA1 = () => {

  return (
      <StyledWrapper>
        <UserInfo />
        <TopBanner />
        <FriendList />
      </StyledWrapper>
  )
}

export default Page_FriendA1;

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
`

