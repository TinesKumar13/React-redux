import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import {useDispatch} from "react-redux"
import {loadDetail} from "../actions/detailAction"
import { Link } from 'react-router-dom'
import { smallImage } from '../util'
import { popup } from '../animations'

const Game = ({name, released , image, id}) => {

    const stringPathId = id.toString()
    


   const dispatch = useDispatch();

   const detailHandler = () => {
       document.body.style.overflow = "hidden"
        dispatch(loadDetail(id))
   
   }
    return (

     
                <StyledGame onClick={detailHandler} layoutId={stringPathId} variants={popup} initial="hidden" animate="show">
                       <Link to={`/game/${id}`}>
                    <h3>{name}</h3>
                    <p>{released}</p>
                    <motion.img src={smallImage(image, 640)} alt={name} layoutId={`image ${stringPathId}`}/>
                    </Link>
                </StyledGame>
        
       

    )
}


const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0, 0 ,0 ,0.2);
text-align: center;
border-radius: 1rem;
overflow:hidden;
cursor: pointer;


img{
    width: 100%;
    height:30vh;
    object-fit:cover
}

`

export default Game
