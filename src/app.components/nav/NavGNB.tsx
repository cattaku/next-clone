import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import FriendList from '../friend/a1/friendList';

const NavGNB = () => {

  const handleChange = (key:string) => {

  }

  return (
    <StyledGnb>
      {/* <ul>
        <li>
          <a href="">랭 킹</a>
        </li>
        <li>
          <a href="">친구초대</a>
        </li>
        <li>
          <a href="">받은요청</a>
        </li>
      </ul> */}
      {/* <div className='menuName'>
        <a href="">랭 킹</a>
      </div>
      <div className='menuName'>
        <a href="">친구초대</a>
      </div>
      <div className='menuName'>
        <a href="">받은요청</a>
      </div> */}
      <Tabs defaultActiveKey="1" onTabClick={(key:string) => handleChange(key)}>
        <Tabs.TabPane tab="Tab 1" key="1" >
          <FriendList />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2" >
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">
        </Tabs.TabPane>
      </Tabs>

{/* <Tabs
    onChange={handleChange}
    type="card"
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of Tab Pane ${id}`,
      };
    })}
  /> */}

    </StyledGnb>
  );
};

export default NavGNB;


const StyledGnb = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  text-align: center;
  .menuName {
    width: 33%;
    float:left;
    padding: 5px
  }
  font-size: 16;
  a {
    color: #808B96;
    text-decoration: none;
    
  }

  ul {
    list-style: none;
    display: inline;
  }
  li {
    margin: 50px 10px 10px 10px;
    padding: 3px 5px 5px 3px;
    text-align: center;
    display: inline;
    font:bold 2rem Hack;
  }
}
  
`
