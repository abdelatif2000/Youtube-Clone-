import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import auth from '../../firebase/firebase';
import {LOAD_PROFILE, LOGIN_FIALDER, LOGIN_REQUEST, LOGIN_SUCCESS} from "../types/type";
export const  login =()=> async dispatch =>{
      try {
          dispatch({type:LOGIN_REQUEST,payload:true});
          const provider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
          const res=  await  auth.signInWithPopup(provider);
          const profile ={
              pucture:res.additionalUserInfo.profile.picture,
              name:res.additionalUserInfo.profile.name
          }
          dispatch({type:LOGIN_SUCCESS,payload:res.credential.idToken})
          dispatch({type:LOAD_PROFILE,payload:profile});
          sessionStorage.setItem('access_Token',res.credential.idToken);
          sessionStorage.setItem('InfoUser',JSON.stringify(profile));

      }catch(error){
          dispatch({type:LOGIN_FIALDER,payload:error});
          console.log(error.message);

      }
}
export default login;