import React from "react";
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';

const UserInfo = () => {
  return (

    <StyledWrapper>
      <div>
        <UserOutlined style={{color:'#01DFD7', fontSize:'1.5rem'}}/>
      </div>
      
    </StyledWrapper>

  )
}

export default UserInfo;

const StyledWrapper = styled.div``