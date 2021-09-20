import React, { useEffect } from "react";
import { observer } from 'mobx-react';
import { CardsStore } from "../../store/cards-store";
import { mockCards } from "../../mocks/cards-data";
import { Card } from "../card/card-component";
import './card-list.scss';

const CARDSAPPSESSIONSTORAGE = 'cardsAppSessionStorage';

const sessionData = sessionStorage.getItem(CARDSAPPSESSIONSTORAGE);

const cardsData = sessionData !== null ? JSON.parse(sessionData): mockCards;

const cardsStore = new CardsStore(cardsData);

export const CardList = observer(() => {
  useEffect(() => {
    console.log('card list rerender');
    const sessionCards = JSON.stringify(cardsStore.cards);
    sessionStorage.setItem(CARDSAPPSESSIONSTORAGE, sessionCards);
  });

  return (
    <div className='card-list'>
      {cardsStore.cards.map(({ title, description, id, imgUrl, rotation, isStar }) => 
        <Card 
          key={id} 
          id={id} 
          title={title} 
          description={description} 
          imgUrl={imgUrl} 
          rotation={rotation} 
          rotate={cardsStore.rotateCard} 
          isStar={isStar}/>)
      } 
    </div>
  )
})
