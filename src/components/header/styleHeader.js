import styled from "styled-components";


export const RightIcan =styled.div`
 
`
export const Form =styled.form`
     width:50%;

  svg{
    background: rgba(218, 211, 211,0.1);
    width: 12%;
    height: 39px;
    margin: 0 0;
  }
    @media (max-width:659px ){
     input{
       display: ${props=>props.taggelSearch===false ?'none' :'block' };
     };
      svg{
        background:#212121;
        width: 12%;
        display: ${props=>props.taggelSearch===false ?'block' :'none' };

      }
};
`
export const LeftIcan =styled.div`
  img{
    width:40px
  }
`
export const Container =styled.div`
  background: #202020;
  position: static;
  height: 55px;
`
export const SearchIcan =styled.input`
  padding: .5rem 1rem;
  color: white;
  text-align: left;
  background: #131212;
  border: none;
  width:80%;
  :focus {
    outline: 1.5px solid blue;
  };
 
`
export const HeadreStyled =styled.div`
  background: #202020;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  * :not(input){
    cursor: pointer;
    margin: 0 5px;
    font-size: 30px;
  };
  @media (max-width:437px ){
    svg{
      font-size: 15px;
    }
  }
  @media (max-width:437px ){
    svg{
      font-size: 15px;
    }
    img{
      width:15px;
      margin-left: 20px;
    }
    input{
      height: 18px;
      font-size: 10px;
    }
  }
 
 
`
