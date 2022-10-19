import React from "react";
import styled from 'styled-components';

const FriendReload = () => {

  const handleRedirect = () => {
    location.reload();
  }

  return (
    <StyledWrapper>
      <div style={{backgroundColor: '#f4f2f2'}}>
        <ul>
          <li className='friend-intro'>지금 친구신청이 가능한 친구를 소개합니다. </li>
          <li className="btn-redirect"><button><img src=''></img></button></li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <img src='/images/logo/free-icon-crying-6518052.png' />
          </li>
          <li>추천할 칠구가 없어요.</li>
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
  .btn-reload {
    font-size: 20px;
    color: #ffff;
    border-radius: 20px;
    padding: 5px 15px 5px 15px;
    font-weight: 20px;
    text-align: center;
  }
`