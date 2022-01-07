import React, {useEffect} from 'react';
import Header from "../components/header/header";
import Sidbar from "../components/sidBar/sidbar";
import Conataint from "../components/containt/conataint";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import getData from "../redux/actiones/actionGetData";

function Home(props) {
    const {accessToken,loading}=useSelector(state=>state.auth);
    const  dispatch =useDispatch();
    const videos=useSelector(state=>state.getVideos.videos);
    const history=useHistory();
    useEffect(()=>{
      if(!accessToken){
          history.push('/login');
      }
     },[accessToken]);

    return (
        <>
            <Header/>
             <div className='containerSidBarContaint' >
                <Sidbar />
                <Conataint video={videos} />
             </div>
        </>
    );
}

export default Home;