export class Negociacao {
    // se nao colcoar o tipo ele fica como ANY
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    // GETTER: ele tem acesso aos atributos privados da minha classe
    // quando chama um Getter vc nao pode atribuir nada, somente ler
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
