// tem que colocar o .JS no final senao não funciona
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        //console.log(this.inputData);
        //console.log(this.inputQuantidade);
        //console.log(this.inpitValor);
        // precisa de uma regex pra mudar de 1111-11-11 para 1111,11,11
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value); // Float pq pode ter casas decimais
        const negociacao = new Negociacao(date, quantidade, valor);
        console.log(negociacao);
    }
}
