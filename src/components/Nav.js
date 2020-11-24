import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import {  fetchSearch } from '../actions/gamesAction';
import { fadeIn } from '../animations';
import logo from "../img/game-console.svg";

const Nav = () => {

    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState('')


    const inputHandler = (e) => {

        setTextInput(e.target.value)
    }

    const submitHandler = (e) => {

        e.preventDefault()
        dispatch(fetchSearch(textInput))
        setTextInput("")

    }

    const clearSearch = () => {
        dispatch({type: "CLEAR_STATE"})
    }

    return (
        <StyledNav variants= {fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo"/>
                <h1>Abyss</h1>
                </Logo>
               
                <form className="search" onSubmit={submitHandler}>
              
                    <input value={textInput} type="text" onChange={inputHandler}/>
                    <button onClick={submitHandler} type="submit">Search</button>

                </form>
        

        </StyledNav>
    )
}


const StyledNav = styled(motion.nav)`

padding: 3rem 5rem;
text-align:center;

input{
    width : 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
    outline:none;
    font-weight: bold;
   
}


button{
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color:white;
    outline:none
}
`
const Logo = styled(motion.div)`

display: flex;
justify-content: center;
cursor: pointer;

img{
    margin-right:0.5rem;
  
}
h1{
    padding-top: 1.5rem;
}
`
export default Nav
