const form = document.querySelector('.quiz-form');
const lastQuestion = document.querySelector('.lastQuestion');
const topPage = document.querySelector('.quiz');

const results = document.createElement('div');

const correctAns = ['B', 'A', 'B', 'B'];

form.addEventListener('submit', event => {
    //Previne o comportamento padrão do evento 'submit' de atualizar e recarregar a página.
    event.preventDefault();

    //deixar a pontuação inicial do usuário zerada.
    let score = 0;

    //guardando em uma array os valores em que as opções estão na página, sendo eles 'A' (primeira resposta) ou 'B' (segunda resposta)
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ];

    //criando um loop com .forEach para aumentar o score do usuário em 25 pontos para cada resposta correta, comparando a escolha com a resposta correta.
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAns[index]) {
            score += 25;
        };
    });

    //Com a div criada, adicionei três classes do bootstrap para estilos
    results.classList.add('bg-danger', 'rounded', 'mb-5');


    //Div inserida no começo antes do título principal do quiz
    topPage.insertAdjacentElement('afterbegin', results);

    let counter = 0;

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer);
        };

        //Inseri na div duas tag, uma p e um h1, mostrando o score do usuário.
        results.innerHTML = `
            <p class="lead font-weight-normal text-center text-white pt-3">Você acertou..</p>
            <h1 class="intro text-center text-white pb-4">${counter}% das perguntas</h1>
        `;
        counter++;
    }, 20);

    //Quando é clicado no submit, a página scrolla para o topo.
    scrollTo(0, 0);
});
