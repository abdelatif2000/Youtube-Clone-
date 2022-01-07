import styled from 'styled-components'


export const BoxImage=styled.div`
  width: 100%;
  height: 150px;
  cursor: pointer;
  position: relative;
  margin-bottom: .4rem;
  z-index: -3;
  
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
export const Info=styled.div``
export const Title=styled.h4`
  font-size: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  ::-webkit-scrollbar{
    width: 0;
  }
`
export const NameChannel=styled.span`
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-x: scroll;
  ::-webkit-scrollbar{
    width: 0;
  }
`
export const PartOne=styled.div`
 display:flex;
`
export const  AtherInfo=styled.div``
export const  Date=styled.span`
  font-size: .9rem;
  font-weight: 400;
`
export const  Views=styled(Date)`
  margin-right: .5rem;
`
export const Vedeo_=styled.div`
 border: 3px solid #181818 ;
  cursor: pointer;
 @media(max-width: 400px){
   display: block;
   width: 100%;
 }
`
export const LogoChannel=styled.img`
   display: inline-block;
   width:2.2rem;
   border-radius: 50%;
   margin-right: 5px;
  
`
