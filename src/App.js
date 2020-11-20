import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { upCounter , downCounter} from './actions/counter'
import { loggedIn } from './actions/isLogged'
import "./App.css"



const App = () => {


    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)

    const dispatch = useDispatch()


    return (
        <div className="counter-app">
            
            <div className="button">
                <h1>{counter}</h1>
            <button onClick={() => dispatch(upCounter())}>Increment</button>
             <button onClick={() => dispatch(downCounter())}>Decrement</button>
            </div>

            <div className='logged'>
                {isLogged && (<h1>Logged as Tines</h1>)}
                <button onClick={() => dispatch(loggedIn())}>Toggler</button>
            </div>

        </div>
    )
}

export default App
