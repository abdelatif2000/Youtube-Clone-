import styled from 'styled-components'

export const LoginStyled=styled.div`
 

  
  background: #181818;
  text-align: center;
  *{
    margin-bottom: 10px;
  }
`
export const Title=styled.h4`
  font-size: 2em;
  @media(max-width: 762px){
    font-size: 1.5rem;
  }
 
`
export const Logo=styled.img`
  width: 100px;
  height: 53px;
  
`
export const BtnLogin=styled.button`
  display: block;
  margin:  auto;
  color: #181818;
  border-radius: 6px;
  padding:6px 5px;
  font-size: .8rem;
  border: none;
  margin-bottom: 10px;
`
export const Info=styled.p`
  @media(max-width: 762px){
    font-size: 1rem;
  }
`
export const Conataint=styled.div`
  background: #383838;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 20px;
  padding: 2rem 2rem;
  width: 400px;
  @media(max-width: 436px){
    width: 300px;
  }
  @media(max-width: 323px){
    width: 200px;
    h4{
      font-size: 20px;
    }
    p{
      font-size: 10px;
    }
    input{
      font-size: 8px;
    }
  }
  
`