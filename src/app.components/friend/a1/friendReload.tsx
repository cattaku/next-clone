import React from "react";
import styled from 'styled-components';
import { ReloadOutlined } from "@ant-design/icons";

const FriendReload = () => {

  const handleReload= () => {
    location.reload();
  }

  return (
    <StyledWrapper>
      <div style={{backgroundColor: '#f4f2f2'}}>
        <ul>
          <li className='friend-intro'>지금 친구신청이 가능한 친구를 소개합니다. </li>
          <li className="btn-redirect"><ReloadOutlined /></li>
        </ul>
      </div>
      <div className="icon">
        <img src='/images/logo/free-icon-crying-6518052.png' style={{width: '60%'}} />
      </div>
      <div>
        <ul>
          <li>추천할 친구가 없어요.</li>
          <li>새로고침하여 새로운 추천 친구 목록을 불러오세요!</li>
          <li>
            <button className="btn-reload">더 많은 친구 보러가기</button>
          </li>
        </ul>
      </div>
    </StyledWrapper>
  )
}

export default FriendReload

const  StyledWrapper = styled.div`
  color: #cccccc;
  font-size: 18px;
  .icon {
    padding: 30% 40% 5% 40%;
  }
  .btn-reload {
    background-color: #8c8b8b;
    font-size: 18px;
    color: #ffff;
    border: solid 0.1rem #8c8b8b;;
    border-radius: 50px;
    padding: 15px 25px 15px 25px;
    margin-top: 30px;
    font-weight: 20px;
    text-align: center;
  }
`