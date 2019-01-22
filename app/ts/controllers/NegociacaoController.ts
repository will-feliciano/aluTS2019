class NegociacaoController{

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor(){
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');        
    }

    add(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this.inputData.value.replace(/-/g,',')),
            parseInt(this.inputQuantidade.value),
            parseFloat(this.inputValor.value)
        );

        this.negociacoes.adiciona(negociacao);
        

        
    }
}