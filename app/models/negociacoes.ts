import { Negociacao } from "./negociacao";

export class Negociacoes {

    // dizendo entra <> qual o tipo do array. 
    // Dizendo q eu quero apenas negociacao
    // Generic "Array<T>"
    // Array<Negociacao> é mesmo que Negociacao[]
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //lista(): Array<Negociacao> {
        // esses colchetes são o spread operator.
        // ele coloca os items da lista dentro de uma nova lista
        // assim q lista pode ser modificada sem precisar modificar a original
        //return [...this.negociacoes];
    //}

    // ready only array to make sure will not be modified
    // ReadonlyArray<Negociacao> É O MESMO Q readonly Negociacao[]
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}