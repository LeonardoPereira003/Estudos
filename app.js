
    // Importa o método createApp do Vue
    const { createApp } = Vue;

    // Cria o app Vue
    createApp({
    // Dados reativos (variáveis)
    data() {
        return {
        num1: 0,         // Primeiro número
        num2: 0,         // Segundo número
        operacao: '+'    // Operação selecionada
        };
    },

    // Propriedade computada que recalcula sempre que num1, num2 ou operacao mudar
    computed: {
        resultado() {
        // Verifica qual operação está selecionada e retorna o cálculo correspondente
        switch (this.operacao) {
            case '+':
            return this.num1 + this.num2;
            case '-':
            return this.num1 - this.num2;
            case '*':
            return this.num1 * this.num2;
            case '/':
            // Evita divisão por zero
            return this.num2 !== 0
                ? (this.num1 / this.num2).toFixed(2) // Arredonda para 2 casas decimais
                : 'Erro (divisão por 0)';
            default:
            return 'Operação inválida';
        }
        }
    }
    // Monta o app dentro da div com id="app"
    }).mount('#app');
