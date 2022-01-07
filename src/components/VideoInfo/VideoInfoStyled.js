import styled from 'styled-components'

export const Container =styled.div`
 
  
`
export const BoxImage=styled.div``
export const LeftInfo=styled.div`
 *{
   margin-right: 1rem;
 }
`
export const RightInfo=styled.div`
  margin-right: 1rem;
  *{
    margin-left: 2rem;
  }
`
export const BodyVideo=styled.div`
 display: flex;
 justify-content: space-between;align-items: center;
  *{
    color: #aaa;
  }
 
  
`
export const ShowMore=styled.div``
export const BOttomInfo=styled.div`
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
      background: ${props=>props.isSubscribed ?'#303030' : 'red' };
      color: white;
      width: 7rem;
      text-transform: uppercase;
      font-size:16px;
      :hover{
        color: white;
      }
    }
  };
img{
   display: inline-block;
   width:2.8rem;
   border-radius: 50%;
   margin-right: 1rem;
};
  div div{
     display: flex;
     align-items: center;
      span:last-child{
        color: #aaa;
      }
    span:first-child{
      
    }
     *{
       display: block;
     }
  }
`
export const Video_Info=styled.div`
  @media (max-width: 700px) {
     font-size:14px;
  }
`
export const Title=styled.h4`
 font-size: 1.2rem;
`

