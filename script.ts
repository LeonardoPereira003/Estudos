
    // Função que recebe dois números e retorna a multiplicação deles
    function multiplicar(a: number, b: number): number {
        return a * b;
    }
    
    // Função que recebe um nome e retorna uma saudação com "Olá"
    function saudar(nome: string): string {
        return "Olá " + nome;
    }
    
    // Pega o nome do input, chama a função de saudação e mostra na tela
    function mostrarSaudacao(): void {
        const nome = (document.getElementById("nomeInput") as HTMLInputElement).value;
        const resultado = saudar(nome); // Chama a função 'saudar'
        document.getElementById("saudacaoResultado")!.textContent = resultado;
    }
    
    // Pega os números do input, calcula a multiplicação e mostra na tela
    function calcularMultiplicacao(): void {
        const num1 = Number((document.getElementById("numero1") as HTMLInputElement).value);
        const num2 = Number((document.getElementById("numero2") as HTMLInputElement).value);
        const resultado = multiplicar(num1, num2); // Chama a função 'multiplicar'
        document.getElementById("multiplicacaoResultado")!.textContent = `Resultado: ${resultado}`;
    }
    