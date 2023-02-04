export class Negociacoes {
    constructor() {
        // dizendo entra <> qual o tipo do array. 
        // Dizendo q eu quero apenas negociacao
        // Generic "Array<T>"
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // esses colchetes são o spread operator.
        // ele coloca os items da lista dentro de uma nova lista
        // assim q lista pode ser modificada sem precisar modificar a original
        return [...this.negociacoes];
    }
}
