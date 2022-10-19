import React from "react";
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';

const UserInfo = () => {
  return (

    <StyledWrapper>
      <div className="rank-1">
        <p> 1 </p>
      </div>
      <div className="rank-2">
        <UserOutlined style={{color:'#01DFD7', fontSize:'1.5rem'}}/>
      </div>
      <div className="rank-3">
        <ul>
          <li>
            나(test004)
          </li>
          <li>
            #Dd
          </li>
          <li>
          <progress value="0" max="100"></progress>
          </li>
        </ul>
      
      </div>
      <div className="rank-4"> 
        <p> 0걸음 </p>
      </div>
    </StyledWrapper>

    
  )
}

export default UserInfo;

const StyledWrapper = styled.div`
  width: 100vw; 
  height: auto;
  display: flex;
  padding: 10px 20px 10px 20px;
  background-color: #f9f8f8 ;
  border-top: #c0bdbd solid 0.1rem;
  color:#a7a5a5;
  font-size: 14px;

  .rank-1 {
    float: left;
    display: inline;
    width: 5%;
    margin-top: auto;
    margin-bottom: auto;
  }
  .rank-2 {
    float: left;
    display: inline;
    width: 10%;
    margin-top: auto;
    margin-bottom: auto;
  }
  .rank-3 {
    float: right;
    display: inline;
    width: 55%;
    ul {
      list-style: none;
    }
    progress {
    
    }
  }
  .rank-4 {
    float: left;
    display: inline;
    width: 30%;
    text-align: left;
    margin-top: auto;
    margin-bottom: auto;
  }


`