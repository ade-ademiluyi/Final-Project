import React from 'react'
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
    return (
        <div className='cards'>
            <h1>Check out These Places!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Here we have Bali!'
                        label='Bali'
                        // path='/services'
                        />
                        <CardItem 
                        src='images/img-3.jpg'
                        text='Santorini to the rini Greece!'
                        label='Adventure'
                        //path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/img-1.jpg'
                        text='Amsterdam!'
                        label='Adventure'
                        //path='/services'
                        />
                        <CardItem 
                        src='images/img-7.jpg'
                        text='Amazing Bora Bora!'
                        label='Adventure'
                        //path='/services'
                        />
                        <CardItem 
                        src='images/img-5.jpeg'
                        text='Big money ibiza!'
                        label='Adventure'
                        //path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
