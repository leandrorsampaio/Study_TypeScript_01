export class Negociacao {
    // se nao colcoar o tipo ele fica como ANY
    constructor(
    // atributos privados dessa classe somente
    //private _data: Date, 
    //private _quantidade: number, 
    //private _valor: number
    //public readonly data: Date,
    _data, quantidade, valor) {
        this._data = _data;
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
    get data() {
        //pramacao defensiva - faz uma copia identica
        // e assim evita alteracoes na date original
        // Basicamente um clone
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
