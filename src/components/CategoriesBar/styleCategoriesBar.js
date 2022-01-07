import styled from 'styled-components'


export const CategoriesBarStyled=styled.div`
  position: sticky;
  top:55px;
  z-index: 1000;
  display: flex;
  background: #202020;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
  };
   span{
       border: 0.1rem solid gray;
       margin-right: 10px;
       border-radius: 40px;
       padding: .5rem 1rem;
       white-space: nowrap;
       font-size: 0.9rem;
       cursor: pointer;
      &:hover {
       background-color: #374a59;
      }
   };
  
  
`