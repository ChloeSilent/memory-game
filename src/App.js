import React from 'react';
import './App.css';
import Card from './Components/Card';
import EmptyCard from './Components/EmptyCard'
import StartBanner from './Components/StartBanner';
import GameFinish from './Components/GameFinish'
import uuid from 'react-uuid';

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
border: ${props => {
    return props.canShow === false ? '1px solid red' : 'none'
}}
`

class App extends React.Component {
    state = {
        initialCatsList: [
            {name: 'cat1', file: cat1, found: false, id: null, show: false},
            {name: 'cat2', file: cat2, found: false, id: null, show: false},
            {name: 'cat3', file: cat3, found: false, id: null, show: false},
            {name: 'cat4', file: cat4, found: false, id: null, show: false},
            {name: 'cat5', file: cat5, found: false, id: null, show: false},
            {name: 'cat6', file: cat6, found: false, id: null, show: false},
            {name: 'cat7', file: cat7, found: false, id: null, show: false},
            {name: 'cat8', file: cat8, found: false, id: null, show: false},
            {name: 'cat9', file: cat9, found: false, id: null, show: false},
            {name: 'cat10', file: cat10, found: false, id: null, show: false},
            {name: 'cat11', file: cat11, found: false, id: null, show: false},
            {name: 'cat12', file: cat12, found: false, id: null, show: false},
        ],
        catsArr: [],
        count: 0,
        canShow: true,
        activeCards: [],
        isGameOn: false
    }

    prepareArray = (arr) => {
        const newArr = arr.slice(0).reduce(function (res, current, index, array) {
            return res.concat([current, current]);
        }, []);

        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }

        return newArr.map(obj => ({...obj, id: uuid()}))
    }

    onCardClickHandler = (name, id) => {
        if(this.state.activeCards.length <= 1 ){
            const clickedCard = this.state.catsArr.findIndex(card => {
                return card.id === id;
            });

            let catsArr = [...this.state.catsArr];
            let item = {...catsArr[clickedCard]};

            item.show = true;
            catsArr[clickedCard] = item;
            const activeCards = this.state.activeCards.slice(0);
            activeCards.push(name);
            this.setState({catsArr, activeCards});
        }

    }

    onStartClickHandler = () => {
        this.setState({isGameOn: true})
    }

    playAgain = () => {
        const catsArr = this.prepareArray(this.state.initialCatsList);
        this.setState({
            isGameOn: true,
            catsArr,
            count: 0,
            canShow: true,
            activeCards: [],
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.activeCards.length >= 2){
            let catsArr = [...this.state.catsArr];
            let count = this.state.count;
            if(this.state.activeCards[0] === this.state.activeCards[1]) {
                count++;
                catsArr.forEach(card => {
                    if(card.name === this.state.activeCards[0]){
                        card.found = true;
                    }
                })
            } else {
                catsArr.forEach(card => {
                    card.show = false
                })

            }
            setTimeout(()=>{
                this.setState({catsArr, activeCards: [], count});
            }, 1000)
        }

        if(this.state.count >= 12){
            console.log('you win')
        }
    }

    componentDidMount() {
        const catsArr = this.prepareArray(this.state.initialCatsList);
        this.setState({
            catsArr
        })
    }

    render() {
        const catsList = this.state.catsArr.length ? this.state.catsArr.map(cat => {
            if (!cat.found) {
                return (
                    <Card img={cat.file}
                          alt={cat.name}
                          found={cat.found}
                          key={cat.id}
                          id={cat.id}
                          show={cat.show}
                          onCardClick={this.onCardClickHandler}/>
                )
            } else {
                return <EmptyCard key={cat.id}/>
            }
        }) : <div/>

        return (
            <AppContainer className='App'>
                {!this.state.isGameOn ? <StartBanner onStartClick={this.onStartClickHandler}/>: null}
                <Ul className='panel'
                    canShow={this.canShow}
                >
                    {catsList}
                </Ul>
                {this.state.count >= 12 ? <GameFinish onPlayClick={this.playAgain}/>: null}
            </AppContainer>
        );
    }
}

export default App;
