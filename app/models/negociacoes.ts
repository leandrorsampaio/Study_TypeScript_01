import { Negociacao } from "./negociacao";

export class Negociacoes {

    // dizendo entra <> qual o tipo do array. 
    // Dizendo q eu quero apenas negociacao
    // Generic "Array<T>"
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): Array<Negociacao> {
        return this.negociacoes;
    }
}