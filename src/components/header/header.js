import {Menu,Apps,Notifications,AccountCircle}  from '@material-ui/icons/'
import YouTubeIcon  from '@material-ui/icons/YouTube'
import Search  from '@material-ui/icons/Search'
import {RightIcan,LeftIcan,HeadreStyled,SearchIcan,Container,Form} from './styleHeader'
import {useDispatch, useSelector} from "react-redux";
import {TaggelMenu,TaggelSearch} from '../../redux/types/type'
import CategoriesBar from "../CategoriesBar/CategoriesBar";
import {useState} from "react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {Link} from "react-router-dom";


function Header() {
  const taggelMenu=useDispatch();
  const showHideSearch=useDispatch();
  const showSreach=useSelector(state=>state.taggles.taggelSearch);
  const histroy=useHistory();
  const [keyWord,setKeyword]=useState(null);
  const handelSubmit = (e) => {
      e.preventDefault();
      histroy.push(`/search/${keyWord}`);
      console.log('test');
  }
    return (
        <Container>
            <HeadreStyled >
                <LeftIcan >
                    <Menu onClick={()=>taggelMenu({type:TaggelMenu})} className='menuIcan' />
                    <Link to={'/'} ><img src='/images/logo.svg'  /></Link>
                </LeftIcan>
                <Form taggelSearch={showSreach} onSubmit={handelSubmit} >
                    <SearchIcan  type="text" placeholder="Search" onChange={(e)=>setKeyword(e.target.value)} />
                    <Search type='submit' onClick={()=>showHideSearch({type:TaggelSearch})} className='BtnSearch'  />
                </Form>
                <RightIcan>
                    <Apps />
                    <Notifications />
                    <AccountCircle />
                </RightIcan>


            </HeadreStyled>

        </Container>

    );
}

export default Header;