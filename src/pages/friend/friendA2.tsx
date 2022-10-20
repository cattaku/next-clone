import React from 'react';
import styled from 'styled-components';

const Page_FriendA2 = () => {

  return (

      <StyledWrapper>
       <div>
        <img src='/images/logo/img-addfriend-text@2x.png' style={{width:'100%'}} />
       </div>
       <div className='img-friend-a2'>
          <div className='social-group'>

            <div id="chanal-social">
              <a>
                <img src='/images/logo/free-icon-kakao-talk-3669973.png' style={{width:'100%'}} />
              </a>
              <span>카카오톡</span>
            </div>

            <div id="chanal-social">
              <a>
                <img src='/images/logo/free-icon-kakao-talk-3669973.png' style={{width:'100%'}} />
              </a>
              <span>카카오톡</span>
            </div>

            <div id="chanal-social">
              <a>
                <img src='/images/logo/free-icon-kakao-talk-3669973.png' style={{width:'100%'}} />
              </a>
              <span>카카오톡</span>
            </div>

            <div id="chanal-social">
              <a>
                <img src='/images/logo/free-icon-kakao-talk-3669973.png' style={{width:'100%'}} />
              </a>
              <span>카카오톡</span>
            </div>

          </div>
          

          <div className='my-code'>
            <p>
              내 추천코드 <span id='copy-code'> KRAGUC8 </span> <a href=''> 코드 복사하기 </a>
            </p>
            
          </div>
          <div>
            <img src='/images/logo/img-addfriend-illust@2x.png' style={{width:'100%'}}/>
          </div>
      </div>
        {/* <div>

        </div>
        <div>

        </div>
        <div></div> */}
      
      </StyledWrapper>

    

  )

}

export default Page_FriendA2;

const StyledWrapper = styled.div`
  width: 100vw;
  height: auto;
  
  .img-friend-a2 {
    margin-top: 10px;
    background-color: #3d1212;
    border: sodivd #3d1212 0.2rem;
    border-radius: 15px;
  }
  .social-group {
    display: flex;
    padding: 15px;
    text-align: center;
    span {
      color: #ffff;
      font-size: 12px;
    }
    
    #chanal-social {
      float: left;
      display: inline;
      width: 25%;
      padding: 10px;
    }
    #chanal-social4 {
      float: right;
      display: inline;
      width: 25%;
      padding: 10px;
    }
  }
  .my-code{
    margin: 0 20px 10px 20px;
    padding: 15px 20px 15px 20px;
    background-color: #240a0a;
    border: sodivd #240a0a 0.2rem;
    border-radius: 5px;
    color: #ffff;
    font-size: 17px;
  
    a {
      color: yellow;
    }
    span {
      padding: 60% 10px 0 10px;
      font-size: 25px;
      font-weight: 600;
    }
  }
    
`