const fs = require('fs');

function carregarDados(caminho) {
    const dados = fs.readFileSync('./data/vetor.json');
    return JSON.parse(dados);
}

function processarFaturamento(dados) {
    const faturamentos = dados.map(d => d.faturamento).filter(f => f > 0);

    if (faturamentos.length === 0) {
        console.log('Não há faturamento para calcular.');
        return;
    }

    const menorFaturamento = Math.min(...faturamentos);
    const maiorFaturamento = Math.max(...faturamentos);

    const somaFaturamento = faturamentos.reduce((total, valor) => total + valor, 0);
    const mediaMensal = somaFaturamento / faturamentos.length;

    const diasAcimaMedia = faturamentos.filter(f => f > mediaMensal).length;

    console.log(`Menor valor de faturamento: R$ ${menorFaturamento}`);
    console.log(`Maior valor de faturamento: R$ ${maiorFaturamento}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
}

const caminhoArquivo = 'faturamento.json';

const dados = carregarDados(caminhoArquivo);
processarFaturamento(dados);
