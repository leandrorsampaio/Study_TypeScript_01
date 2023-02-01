//alert('OI');
// Tudo no Appjs. O nvegador resolve tudo pra mim 
import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 10, 100);
// negociacao.data veio dpo GET. 
// quando chama um GET vc nao pode atribuir nada, somente ler
// O get vc acessa como uma propriedade
console.log(negociacao.volume);
