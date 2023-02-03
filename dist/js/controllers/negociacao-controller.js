// tem que colocar o .JS no final senao não funciona
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    // Apesar de nao ser obrigatorio,é uma boa pratica tipar os metodos com : 
    // no caso tipando com void
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    criaNegociacao() {
        // precisa de uma regex pra mudar de 1111-11-11 para 1111,11,11
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value); // Float pq pode ter casas decimais
        return new Negociacao(date, quantidade, valor);
    }
    // Isso é um método
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
