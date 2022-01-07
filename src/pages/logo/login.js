import React, {useEffect} from 'react';
import {LoginStyled,Title,Logo,Conataint,BtnLogin,Info} from './styleLogin'
import {useDispatch, useSelector} from "react-redux";
import action_Login from "../../redux/actiones/auth";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
function Login(props) {
    const dispatch=useDispatch();
    const {accessToken}=useSelector(state=>state.auth);
    const history= useHistory();
    useEffect(()=>{
          if(accessToken){
              history.push('/');
          }
    },[accessToken]);
    const hadleLogin =()=>{
        dispatch(action_Login());
    }
    return (
      <LoginStyled>
          <Conataint>
              <Title>Youtube Clone</Title>
              <Logo  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png' alt='logo' />
              <BtnLogin onClick={hadleLogin} >Login with Google</BtnLogin>
              <Info>This Project Made Using YOUTUBE Data API</Info>
          </Conataint>

      </LoginStyled>
    );
}

export default Login;