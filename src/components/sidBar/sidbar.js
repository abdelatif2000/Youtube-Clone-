import {SidbarStyled,Container,Item} from './styleSidBar'
import {Home,Explore,Subscriptions,VideoLibrary,History,ExitToApp,ThumbUpAlt} from '@material-ui/icons/'
import {useDispatch, useSelector} from 'react-redux';
import auth from '../../firebase/firebase';
import {LOGOUT} from "../../redux/types/type";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {Link} from "react-router-dom";

function Sidbar() {
    const showMenu=useSelector(state=>state.taggles.showMenu);
    const dispatch=useDispatch();
    const history=useHistory();
    const hanleLogOut=async ()=>{
        await  auth.signOut();
        sessionStorage.removeItem('access_Token');
        sessionStorage.removeItem('InfoUser');
        dispatch({type:LOGOUT});
    }
    return (
        <SidbarStyled  showMenu={showMenu}>
            <Container>
                <Link to={'/home'}>
                    <Item >
                        <Home />
                        <div >Home</div>
                    </Item>
                </Link>

                <Item >
                    <History />
                    <div>History</div>
                </Item>
                <Item >
                    <Explore />
                    <div>Explore</div>
                </Item>
                <Item >
                    <ThumbUpAlt />
                    <div>Likes</div>
                </Item>
               <Link to={'/subscriptions'}>
                   <Item >
                       <Subscriptions/>
                       <div >Subscriptions</div>
                   </Item>
               </Link>

                <Item>
                    <VideoLibrary />
                    <div >Library</div>
                </Item>
                <Item onClick={hanleLogOut} >
                    <ExitToApp />
                    <div >Logout</div>
                </Item>

            </Container>
        </SidbarStyled>
    );
}
export default Sidbar;