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
                        text='enter "Bali" to get info!'
                        label='Bali'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-3.jpg'
                        text='enter "Santorini Greece" to get info!'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/img-1.jpg'
                        text='enter "Amsterdam" to get info!'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-7.jpg'
                        text='enter "Bora Bora" to get info!'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-5.jpeg'
                        text='enter "ibiza" to get info!'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
