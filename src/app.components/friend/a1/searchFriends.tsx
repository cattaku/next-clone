import React from "react";
import styled from 'styled-components';

const SearchFriends = () => {
  return (
    <StyledWrapper>
      <div>
        <form>
          <input placeholder="추천코드로 친구를 찾아보세요"></input>
        </form>
        <button><img src='' alt='검색'/></button>
        
      </div>
    </StyledWrapper>
    
  )
}

export default SearchFriends

const StyledWrapper = styled.div`
  
`