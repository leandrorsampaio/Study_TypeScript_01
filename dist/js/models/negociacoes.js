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
        return this.negociacoes;
    }
}
