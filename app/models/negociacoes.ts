import { Negociacao } from "./negociacao";

export class Negociacoes {

    // dizendo entra <> qual o tipo do array. 
    // Dizendo q eu quero apenas negociacao
    // Generic "Array<T>"
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //lista(): Array<Negociacao> {
        // esses colchetes são o spread operator.
        // ele coloca os items da lista dentro de uma nova lista
        // assim q lista pode ser modificada sem precisar modificar a original
        //return [...this.negociacoes];
    //}

    lista(): ReadonlyArray<Negociacao> {
        return [...this.negociacoes];
    }
}