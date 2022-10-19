import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { API_URL } from '../../../pages/api/config'
import FriendReload from "./friendReload";


const FriendList= () => {
  const [ UserList, setUserList ] = useState([]) 

  useEffect(() => {
    let userList = `${API_URL}/list?page=2&limit=10`
    
    fetch(userList).then(result => result.json())
    .then(result => {
      setUserList(result)
      
      if(!result) console.log('리스트가 없다')
    })
  }, [])


  if (UserList.length == 0) {
   return (
    <FriendReload />
   ) 
  }

  return (
    <StyledWrapper>
      <div style={{backgroundColor: '#f4f2f2'}}>
      <ul>
        <li className='friend-intro'>지금 친구신청이 가능한 친구를 소개합니다 </li>
        <li className="btn-reload"><button><img src=''></img></button></li>
      </ul>
      </div>
      <div className='friends'>
        {UserList && UserList.map((user, index) => (
          <React.Fragment key = {index}>
            <tr>
              <td>
                <img src='/images/logo/user_m.png' style={{width:'80%'}} />
              </td>
              <td id="user-name">
                {user.author}
              </td>
              <td id="user-width">
                {user.width} 걸음
              </td>
              <td id="friend-add">
                <button className="">친구추가</button>
              </td>
            </tr>
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

  .friend-intro {
    display: inline;
    justify-content: flex-start;
    width: 70%;
    padding-left: 20px;
    line-height: 40px;
    font-size: 14px;
    color: #686666;
  }
  .btn-reload {
    display: inline;
    justify-content: flex-end;
    width: 30%;
  }
  .friends {
    padding: 10px 20px 10px 20px;
    display: block;
    td {
      height: auto;
      font-size: 16px;
    }
    #friend-img {
      display: flex;
      width: 20%;
      align-items: center;
    }
    #user-name {
      font-weight: bold;
      font-size: 14px;
      width: 50%;
      line-height: 40px;
    }
    #user-width {
      font-size: 12px;
      width: 20%;
    }
    #friend-add {
      width: 18%;
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