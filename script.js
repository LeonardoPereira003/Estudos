    document.getElementById("executar").addEventListener("click", function () {
        // Classe base (abstração)
        function Impressora(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    
        this.imprimir = function (texto) {
            return `Imprimindo "${texto}" com ${this.marca} ${this.modelo}`;
        };
        }
    
        // Herdeira: Impressora Laser
        function ImpressoraLaser(marca, modelo) {
        Impressora.call(this, marca, modelo);
        this.tipo = function () {
            return "Impressora a Laser";
        };
        }
    
        // Herdeira: Impressora Jato de Tinta
        function ImpressoraJatoDeTinta(marca, modelo) {
        Impressora.call(this, marca, modelo);
        this.tipo = function () {
            return "Impressora a Jato de Tinta";
        };
        }
    
        // Instâncias
        const hp = new ImpressoraLaser("HP", "LaserJet 123");
        const epson = new ImpressoraJatoDeTinta("Epson", "EcoTank 3150");
        const canon = new Impressora("Canon", "Pixma 3610");
    
        // Verificando propriedades com 'in'
        const propriedades = ["marca", "modelo", "cor", "toString"];
        let checagem = `
        📦 <strong>Verificando propriedades com 'in'</strong>:<br><br>
        <table style="font-family: monospace; line-height: 1.6;">
        <tbody>
        `;
    
        propriedades.forEach(prop => {
        const existe = prop in hp;
        checagem += `
            <tr>
            <td>• ${prop}</td>
            <td style="padding: 0 10px;">➡️</td>
            <td style="color: ${existe ? '#00ff88' : '#ff4444'};">
                ${existe ? '✅ sim' : '❌ não'}
            </td>
            </tr>
        `;
        });
    
        checagem += "</tbody></table>";
    
        // Exibir resultado
        const output = document.getElementById("output");
        output.innerHTML = `
        ${hp.tipo()} - ${hp.imprimir("Contrato de aluguel")}<br><br>
        ${epson.tipo()} - ${epson.imprimir("Foto colorida")}<br><br>
        Impressora Genérica - ${canon.imprimir("Texto simples")}<br><br>
        ${checagem}
        `;
    });
    