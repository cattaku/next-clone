import React from "react";
import styled from 'styled-components';

const TopBanner = () => {
  return (
    <TopBannerComponent>
      <div className="banner-main">
        <p className="banner-main-font">지금 SNS 추가 연동하면 500캐시!</p>
          <button className="banner-button"> SNS 연동하러 가기 > </button>      
        <p className="banner-sub-font">*하나의 SNS 연동에 한하여 최초 1회만 캐시가 지급됩니다.</p>
      </div>
      <div className="banner-img">
        <img src='/images/logo/img-addfriend-sns@3x.png' width="100%" alt=""></img>
      </div>
    </TopBannerComponent>
  )
}
export default TopBanner

const TopBannerComponent = styled.div`
  height: auto;
  padding-left: 20px;
  background-color: #add7ff;
  display: flex;
  margin: 0;

  .banner-main {
    justify-content: flex-start;
    width:67%; 
    box-sizing: border-box;
  }
  .banner-main-font {
    font-weight: 20px;
    padding: 20px 0 10px 0; margin: 0;
  }
  .banner-button {
    color: white; 
    background-color: #393939;
    border: solid 2px #393939;
    border-radius: 20px;
    padding: 5px 15px 5px 15px;
    font-weight: 20px;
    text-align: center;
    text-shadow: #FC0 1px 0 10px;
    margin: 0;
  }
  .banner-sub-font {
    font-size: 10px;
    color: gray ;
    padding: 10px 0 10px 0;
  }
  .banner-img {
    position: relative;
    justify-content: flex-end;
    width:33%;
    box-sizing: border-box;
    padding-top: 2%;
  }

`