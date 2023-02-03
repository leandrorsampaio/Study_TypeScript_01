// tem que colocar o .JS no final senao não funciona
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData;
    private inputQuantidade;
    private inpitValor;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inpitValor = document.querySelector('#valor');
    }

    adiciona() {
        //console.log(this.inputData);
        //console.log(this.inputQuantidade);
        //console.log(this.inpitValor);

        const negociacao = new Negociacao(
            this .inputData.value,
            this .inputQuantidade.value,
            this .inpitValor.value
        );

        console.log(negociacao);

    }
}