import styled from 'styled-components'


export const BoxImage=styled.div`
  width:40%;
 
  height: 150px;
  cursor: pointer;
  position: relative;
  z-index: -3;
  margin-right: .5rem;
  img{
    width: 100%; 
    height: 100%;
  };
  span{
    position: absolute;
    bottom: .2rem;
    right: .3rem;
  };
  @media(max-width: 400px){
    height: 200px;
  }
`
export const Info=styled.div`
  margin-top: .5rem;
  width: 60%;
`
export const Title=styled.h4`
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ::-webkit-scrollbar{
    width: 0;
  }
`
export const NameChannel=styled.span`
  -webkit-line-clamp: 1;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-x: scroll;
  ::-webkit-scrollbar{
    width: 0;
  }
`
export const PartOne=styled.div`
  display:flex;
  align-items: center;
  *{
    color: #606060;

  }
`
export const  AtherInfo=styled.div``
export const  Date=styled.span`
  font-size: .9rem;
  color: #606060;
`
export const  Views=styled(Date)`
  margin-right: .5rem; 
  color: #606060;
  
`
export const Vedeo_=styled.div`
  border: 3px solid #181818 ;
  width: 100%;
  display: flex;
  cursor: pointer;
`
export const LogoChannel=styled.img`
   display: inline-block;
   width:2.2rem;
   border-radius: 50%;
   margin-right: 5px;
   
`

