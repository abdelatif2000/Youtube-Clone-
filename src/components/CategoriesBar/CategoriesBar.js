import React, {useState} from 'react';
import {CategoriesBarStyled} from './styleCategoriesBar'
import {useDispatch} from "react-redux";
import {getData, getDataByKeyword} from "../../redux/actiones/actionGetData";
const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
]
function CategoriesBar() {
    const [ActiveCategories,setActiveCategories]=useState('All');
    const dispatch=useDispatch();
    const handelActive=value=>{
        setActiveCategories(value);
        if(value==='All'){
            dispatch(getData());
        }
        else{
            dispatch(getDataByKeyword(value));
        }
    }
    return (
        <CategoriesBarStyled>
            {keywords.map((value,index)=>(
                <span style={ActiveCategories===value ? {
                    color: '#fff',  backgroundColor: '#606060', borderColor:'white'}:{}} onClick={()=>handelActive(value)} key={index}>{value}</span>
            ))  }
        </CategoriesBarStyled>
    );
}
export default CategoriesBar;