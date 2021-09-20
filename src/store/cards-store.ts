import { makeAutoObservable } from 'mobx';
import { Card } from "../types/card";

export class CardsStore {
  cards: Card[];
  constructor(cards: Card[]) {
    makeAutoObservable(this);
    this.cards = cards;
  }

  rotateCard = (id: string, rotation: number) => {
    const card = this.cards.find((card) => id === card.id);
    if (card !== undefined) {
      card.rotation = (card.rotation + rotation) % 360;
    }
  }
}
