import { NextPage } from 'next';
import  Page_FriendA1 from './friendA1';
import  Page_FriendA2 from './friendA2';
import  Page_FriendA3 from './friendA3';
import styled from 'styled-components';
import { useState } from 'react';



const Page_FriendIndex: NextPage = () => {
  const menuTitle = ['랭킹', '친구초대', '받은요청']
  const tab = { 0: <Page_FriendA1 />, 1: <Page_FriendA2 />, 2: <Page_FriendA3 /> }
  const [activeTab, setActiveTab] = useState(0)
  const handleTab = (idx:number) => {
    setActiveTab(idx)
  }

  return (
    <StyledWrapper> 
      <div className='tabs'>
        {menuTitle.map((title, idx) => {
          return (
            <div className='tab-menu'>
              <span key={idx} onClick={() => handleTab(idx)}> {title} </span>
            </div>
            
          )
        })}
      </div>
      <div>
        {tab[activeTab]}
      </div>
    </StyledWrapper>
   
  )
}

export default Page_FriendIndex

const StyledWrapper = styled.div`
  width: 100vw;

  .tab-menu {
    float: left;
    width: 33%;
    display: inline;
    text-align: center;
    font-size: 18px;
    padding: 20px 0 20px 0;
    color: #868484;
    border-bottom: solid 0.1rem #d6d6d6;
  }
`