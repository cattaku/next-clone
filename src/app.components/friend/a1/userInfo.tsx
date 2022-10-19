import React from "react";
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
import { userInfo } from "os";

const UserInfo = () => {
  

  return (

    <StyledWrapper>
      <div className="rank-1">
        <p> 1 </p>
      </div>
      <div className="rank-2">
        <img src="/images/logo/user_m.png" style={{width:'120%'}}/>
      </div>
      <div className="rank-3">
        <ul>
          <li id='user-info'>
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
  color:#a7a5a5;
  

  .rank-1 {
    font-size: 18px;
    font-weight: bold;
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
    padding-right: 10px;
  }
  .rank-3 {
    float: right;
    display: inline;
    width: 55%;
    padding: 5px;
    font-size: 14px;
    ul {
      list-style: none;
    }
    #userInfo {
      font-size: 16px;
    }
  }
  .rank-4 {
    float: left;
    display: inline;
    width: 30%;
    text-align: left;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 14px;
  }


`