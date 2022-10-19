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
            </div>

            <div id="chanal-social">
              <a>
                <img src='/images/logo/free-icon-kakao-talk-3669973.png' style={{width:'100%'}} />
              </a>
            </div>

            <div id="chanal-social">
            <a>
                <img src='/images/logo/free-icon-kakao-talk-3669973.png' style={{width:'100%'}} />
              </a>
            </div>

            <div id="chanal-social">
            <a>
                <img src='/images/logo/free-icon-kakao-talk-3669973.png' style={{width:'100%'}} />
              </a>
            </div>

          </div>
          

          <div className='my-code'>
            <button>내 추천코드 KRAGUC8 <span id='copy-code'>코드 복사하기</span></button>
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
  border-radius: 10px;
  .img-friend-a2 {
    background-color: #481717;
    border: sodivd #481717 0.2rem;
  }
  .social-group {
    display: flex;
    padding: 15px;
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
    
    
  }
`