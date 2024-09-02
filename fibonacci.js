function fibonacci(numero) {
    const inicial = [0, 1];

    for (let i = 2; inicial[1] < numero; i += 1) {
        const proximo = inicial[0] + inicial[1];
        inicial[0] = inicial[1];
        inicial[1] = proximo;
    }

    if (inicial[1] === numero) {
        console.log(`O número ${numero} pertence a sequência Fibonacci`);
    } else {
        console.log(`O número ${numero} não pertence a sequência Fibonacci`);
    }
}

fibonacci(10);