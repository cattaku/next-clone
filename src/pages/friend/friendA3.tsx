import React from "react";
import styled from 'styled-components';

const Page_FriendA3 = () => {
  return (
    <StyledWrapper>
      <div className="icon">
        <img src='/images/logo/free-icon-crying-6518052.png' style={{width: '60%'}} />
      </div>
      <div>
        <ul>
          <li>친구요청이 없어요.</li>
          <li>추천된 친구목록에서 친구신청을 해보세요.</li>
        </ul>
      </div>
    </StyledWrapper>
   
  )
}

export default Page_FriendA3

const  StyledWrapper = styled.div`
  color: #807e7e;
  font-size: 18px;
  text-align: center;
  .icon {
    padding: 30% 40% 5% 40%;
  }
  li {
    padding-top: 10px;
  }
`