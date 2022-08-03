import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/Button';


type getType = {
    'userId': number
    'id': number
    'title': string
    'body': string
}

function App() {
    const [get, setGet] = useState<Array<getType>>([])
    const getRequestHandler = () => {
       setGet([])
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    }, [])

    return (
        <div className="App">
            <Button nickName={'CleanPage'} callBack={getRequestHandler}/>
            <p></p>
            {get.map((el) => {
                return (

                    <li>
                        <span>{el.id}</span>
                        <span>{el.title}</span>
                        <span>{el.body}</span>
                    </li>
                )
            })}
        </div>
    );
}
export default App;
