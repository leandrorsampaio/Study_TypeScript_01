export class Negociacao {

    // atributos privados dessa classe somente
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    // GETTER: ele tem acesso aos atributos privados da minha classe
    // quando chama um Getter vc nao pode atribuir nada, somente ler
    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    }

    get volume() {
        return this.#quantidade * this.#valor;
    }
}