import React from "react";
import styled from 'styled-components';

const TopBanner = () => {
  return (
    <>
    <TopBannerComponent>
      <div style={{width:'auto', float:'left'}}>
        <p>지금 SNS 추가 연동하면 500캐시!</p>
        <button> SNS 연동하러 가기 > </button>
        <p>*하나의 SNS 연동에 한하여 최초 1회만 캐시가 지급됩니다.</p>
      </div>
      <div style={{width:'auto', float:'left'}}>
        <img src='' alt=""></img>
      </div>
    
    
    </TopBannerComponent>
    </>
  )
}
export default TopBanner
const TopBannerComponent = styled.div``