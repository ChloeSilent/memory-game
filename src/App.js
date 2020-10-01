import React, {useState} from 'react';
import './App.css';
import Card from './Components/Card'
import uuid from 'react-uuid'

import styled from 'styled-components';
import background from './Assets/background.jpg';
import cat1 from './Assets/cat1.png';
import cat2 from './Assets/cat2.png'
import cat3 from './Assets/cat3.png'
import cat4 from './Assets/cat4.png'
import cat5 from './Assets/cat5.png'
import cat6 from './Assets/cat6.png'
import cat7 from './Assets/cat7.png'
import cat8 from './Assets/cat8.png'
import cat9 from './Assets/cat9.png'
import cat10 from './Assets/cat10.png'
import cat11 from './Assets/cat11.png'
import cat12 from './Assets/cat12.png'

const AppContainer = styled.div`
  text-align: center;
  background-image: url(${background});
  background-size: cover;
  margin: auto;
  padding: 20px;
  border-radius: 40px
`

const Ul = styled.ul`
list-style: none;
padding: 0;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(6, 140px);
grid-gap: 20px;
`

function App() {

    const initialCatsList = [
        {name: 'cat1', file: cat1, found: false, id: null},
        {name: 'cat2', file: cat2, found: false, id: null},
        {name: 'cat3', file: cat3, found: false, id: null},
        {name: 'cat4', file: cat4, found: false, id: null},
        {name: 'cat5', file: cat5, found: false, id: null},
        {name: 'cat6', file: cat6, found: false, id: null},
        {name: 'cat7', file: cat7, found: false, id: null},
        {name: 'cat8', file: cat8, found: false, id: null},
        {name: 'cat9', file: cat9, found: false, id: null},
        {name: 'cat10', file: cat10, found: false, id: null},
        {name: 'cat11', file: cat11, found: false, id: null},
        {name: 'cat12', file: cat12, found: false, id: null},
    ]
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }
    const prepareArray = (arr) => {
        const newArr = arr.slice(0).reduce(function (res, current, index, array) {
            return res.concat([current, current]);
        }, []);
        return newArr.map(obj=> ({ ...obj, id: uuid() }))
    }
    const catsArr = prepareArray(initialCatsList);

    const [cats, setCats] = useState(catsArr);

    const catsList = cats.map(cat => {
        console.log('cat.found', cat.found)
        if (!cat.found) {
            return (
                <Card img={cat.file} alt={cat.name} found={cat.found} key={cat.id}/>
            )
        }
    })
    return (
        <AppContainer className='App'>
            <Ul className='panel'>
                {catsList}
            </Ul>
        </AppContainer>
    );
}

export default App;
