document.addEventListener('DOMContentLoaded', () => {
    const aleatorio = document.querySelectorAll('.aleatorio');
    const resultadoDiv = document.getElementById('resultado');

    aleatorio.forEach(botao => {
        botao.addEventListener('click', (event) => {
            event.preventDefault();
            const playeraleatorio = botao.id;
            const computeraleatorio = getComputeraleatorio();
            const resultado = getresultado(playeraleatorio, computeraleatorio);

            resultadoDiv.innerHTML = `Você escolheu:ㅤ${playeraleatorio}.<br>Bot escolheu:ㅤ${computeraleatorio}.<br>${resultado}`;
        });
    });

    function getComputeraleatorio() {
        const aleatorio = ['pedra', 'papel', 'tesoura'];
        const randomIndex = Math.floor(Math.random() * aleatorio.length);
        return aleatorio[randomIndex];
    }

    function getresultado(playeraleatorio, computeraleatorio) {
        if (playeraleatorio === computeraleatorio) {
            return "Empate";
        } else if (
            (playeraleatorio === 'pedra' && computeraleatorio === 'tesoura') ||
            (playeraleatorio === 'papel' && computeraleatorio === 'pedra') ||
            (playeraleatorio === 'tesoura' && computeraleatorio === 'papel')
        ) {
            return 'Você ganhou!';
        } else {
            return 'Você perdeu!';
        }
    }
});