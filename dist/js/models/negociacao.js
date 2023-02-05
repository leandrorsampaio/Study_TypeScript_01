export class Negociacao {
    // se nao colcoar o tipo ele fica como ANY
    constructor(
    // atributos privados dessa classe somente
    //private _data: Date, 
    //private _quantidade: number, 
    //private _valor: number
    data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // GETTER: ele tem acesso aos atributos privados da minha classe
    // quando chama um Getter vc nao pode atribuir nada, somente ler
    /*
    Nao precisa mais dessa sessao de gets.
    Agora as classes sao publicas mas readonly
        get data(): Date {
            return this.data;
        }
    
        get quantidade(): number {
            return this._quantidade;
        }
    
        get valor(): number {
            return this._valor;
        }
    */
    get volume() {
        return this.quantidade * this.valor;
    }
}
