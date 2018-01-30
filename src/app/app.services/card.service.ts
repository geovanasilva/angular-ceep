import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface ICard {
  conteudo: string;
  cor: string;
}

interface ICardRequest {
  usuario: string;
  cartoes: ICard[]
}

@Injectable()
export class CardService {
  private readonly endpoint: string = '/cartoes;'
  private _cards: ICard[];
  public cards: ReplaySubject<ICard[]>;

  private onCardPushed(cards: ICard[]) { }

  private initListeners() {
    this.cards.subscribe(this.onCardPushed.bind(this))
  }

  constructor(private http: HttpClient) {
    this._cards = [];
    this.cards = new ReplaySubject(1);
    this.initListeners();
  }

  public sync(): Observable<boolean> {
    const url = `${environment.api.host}${this.endpoint}/salvar`;
    const body: ICardRequest = { usuario: '', cartoes: this._cards };
    return this.http.post(url, body).map(() => true);
  }

  public createCard(card: ICard): Observable<ICard[]> {
    this._cards.push(card)
    this.cards.next(this._cards);
    return this.cards;
  }

  public deleteCard(card: ICard): Observable<ICard[]> {
    const indexToRemove = this._cards.findIndex(card => card.conteudo === card.conteudo);
    this._cards.splice(indexToRemove, 1);
    return this.cards;
  }

  public getInstructionsCards(): Observable<ICard[]> {
    const url = `${environment.api.host}${this.endpoint}/instrucoes`;
    return this.http.get<ICard[]>(url);
  }
}
