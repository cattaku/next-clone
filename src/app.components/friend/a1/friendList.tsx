import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { API_URL } from '../../../pages/api/config'
import FriendReload from "./friendReload";
import { ReloadOutlined } from "@ant-design/icons";


const FriendList= () => {
  const [ userList, setUserList ] = useState([]) 

  useEffect(() => {
    let userData = `${API_URL}/list?page=2&limit=15`
    fetch(userData).then(result => result.json())
    .then(result => {
      setUserList(result)
    })
  }, [])

  const handleReload= () => {
    location.reload();
  }


  if (userList.length == 0 && !userList) {
   return (
    <FriendReload />
   ) 
  }

  return (
    <StyledWrapper>
      <ul className="reload">
          <li id='friend-intro'>
           지금 친구신청이 가능한 친구를 소개합니다
          </li>
          <li id="btn-reload">
            <ReloadOutlined onClick={handleReload} />
          </li>
      </ul>

      <div className='friends-gruop'>
        {userList && userList.map((user, index) => (
          <React.Fragment key = {index} >
            <ul className="friends">
              <li id='friend-img'>
                <img src='/images/logo/user_m.png' style={{width:'80%'}} />
              </li>
              <li id="user-name">
                {user.author}
              </li>
              <li id="user-width">
                {user.width} 걸음
              </li>
              <li id="friend-add">
                <button className="">친구추가</button>
              </li> 
            </ul>



          </React.Fragment>
        
        ))}
      </div>
    </StyledWrapper>
  )
}

export default FriendList

const  StyledWrapper = styled.div`
  width: 100wv;
  height: auto;
  color: #9b999a;
 
  .reload {
    width: 100%;
    height: auto;
    background-color: #f1eff0;
    padding: 7px 0 7px 0;
    justify-content: space-between;
    #friend-intro {
    display: inline;
    width: 70%;
    padding-left: 20px;
    font-size: 12px;
    color: #686666;
    line-height: 40%
    }
    #btn-reload {
    display: inline;
    margin-left: 33%;
    padding-right: 20px;
    }
  }
  .friends-gruop {
    padding: 10px 0 10px 0;
  }
  .friends {
    display: flex;
    padding-top: 7px;
    padding-left: 20px;
    div {
      font-size: 16px;
    }
    #friend-img {
      width: 12%;  
    }
    #user-name {
      font-weight: bold;
      font-size: 14px;
      width: 46%;
      line-height: 40px;  
      margin-left: 2px;
    }
    #user-width {
      width: 22%;
      font-size: 12px;
      line-height: 40px;  
    }
    #friend-add {
      width: 20%;
      line-height: 40px;  
      button {
        color: #36333e; 
        background-color: #f5f067;
        border: solid 1px #f5f067;
        border-radius: 20px;
        padding: 5px;
        font-size: 12px;
        font-weight: 10px;
        text-align: center;
      } 
    }
  } 
`