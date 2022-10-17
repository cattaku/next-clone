import React from 'react';
import styled from 'styled-components';

const NavGNB = () => {
  return (
    <StyledGnb>
      <ul>
        <li>
          <a>랭 킹</a>
        </li>
        <li>
          <a>친구초대</a>
        </li>
        <li>
          <a>받은요청</a>
        </li>
      </ul>
    </StyledGnb>
  );
};

export default NavGNB;


const StyledGnb = styled.div`
  position: flex;
  padding: 5px;
  text-align: center;

  a {
    color: #444;
    font-size: 15px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    display: inline;
  }
  li {
    margin: auto;
    padding: 3px 5px 5px 3px;
    text-align: center;
    display: inline;
    font:bold 2rem Hack;
  }
}
  
`
