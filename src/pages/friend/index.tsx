import { NextPage } from 'next';
import Page_FriendA1 from './friendA1';
import styled from 'styled-components';


const Page_FriendIndex: NextPage = () => {

  const handleChange = (key:string) => {

  }
  return (
    <StyledWrapper> 
      <div className='tabs'>
        <div className='tab-menu' >
          <a href='/'>랭킹</a>
        </div>
    
     
        <div className='tab-menu'>
          <a href='/'>친구초대</a>
        </div>
   
  
        <div className='tab-menu'>
          <a href='/'>받은요청</a>
        </div>
      </div>
      <Page_FriendA1 />  
    </StyledWrapper>
   
  )
}

export default Page_FriendIndex

const StyledWrapper = styled.div`
  width: 100vw;
  a {
    text-decoration: none;
    color: #868484;
    touch-action: bl;
  }
  a:active { 
    color: black
  }

  .tab-menu {
    float: left;
    width: 33%;
    display: inline;
    text-align: center;
    font-size: 18px;
    padding: 20px 0 20px 0;
  }
`