import styled from 'styled-components'

export const  SidbarStyled=styled.div`
  background: #202020;
  position: relative;
  bottom: 0;
  top: 0;
  left: 0;
  padding: 1px;
  width:10%;
 @media (max-width:923px ){
   width:13%;
 }
  @media (max-width:704px ){
    width:15%;
  }
  @media (max-width:659px ){
    width:${props=>props.showMenu===false  ? '0': '20%'};
    overflow: hidden;
    position:fixed ;
    top: 10vh;
    bottom: 0;
    left: 0;
    z-index: 999;
  };
`
export const Container=styled.div`
  position: sticky;
  top: 10vh;
  left: 0;
`
export const  Item =styled.li`
  font-size: 10px;
  cursor: pointer; 
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
  text-align: center;
  @media (max-width: 435px){
    font-size: 5px;
  }
`