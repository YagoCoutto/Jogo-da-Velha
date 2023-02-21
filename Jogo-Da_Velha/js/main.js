
let XO = 'X'
let cont = 0;
let player1 = []
let player2 = []
let contPlay1 = 0;
let contPlay2 = 0;
let fimInsert = true;


function getCell(evento) {
    const event = evento.target
    cont++

    const logicaTicTacToe = () => {
        const tabelaDeCombinacoes = [
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['0', '4', '8'],
            ['2', '4', '6']
        ];

        XO = XO === 'X' ? 'O' : 'X'
        if (event.innerHTML === 'O' || event.innerHTML === 'X') {
            XO = XO === 'X' ? 'O' : 'X'
            cont--
        } else {
            if (XO === 'O' && fimInsert === true) {
                document.getElementById(event.id).innerHTML = XO
                player1.push(event.id)

            } else if (XO === 'X' && fimInsert === true) {
                document.getElementById(event.id).innerHTML = XO
                player2.push(event.id)
            }
        };

        let totMovimentos = player2.length + player1.length

        for (let i = 0; i < 8; i++) { // percorre cada combinação
            const verificaCombinacoes = tabelaDeCombinacoes[i];
            // console.log(win)
            let winCombination = true;

            for (let j = 0; j < 3; j++) { // percorre cada celula da combinação
                const cell = verificaCombinacoes[j];
                if (!player2.includes(cell) && !player1.includes(cell)) { // verifica se a celula foi preenchida com 'X' ou 'O'
                    winCombination = false;
                }
            }

            if (player1.includes(verificaCombinacoes[0]) && player1.includes(verificaCombinacoes[1]) && player1.includes(verificaCombinacoes[2])) {
                resultado.classList.add("testAnimation");
                resultado.innerHTML = 'O - Wins!'
                fimInsert === true ? contPlay1++ : !true;
                document.getElementById("contPlay1").innerHTML = `O : ${contPlay1}`
                fimInsert = !true;
                return;
            } else if (player2.includes(verificaCombinacoes[0]) && player2.includes(verificaCombinacoes[1]) && player2.includes(verificaCombinacoes[2])) {
                resultado.classList.add("testAnimation");
                resultado.innerHTML = 'X - Wins!'
                fimInsert === true ? contPlay2++ : !true;
                document.getElementById("contPlay2").innerHTML = `X : ${contPlay2}`
                fimInsert = !true;
                return;
            } else if (totMovimentos > 8) {
                resultado.classList.add("testAnimation");
                resultado.innerHTML = 'Empate!'

            }

        };

    };
    logicaTicTacToe();

};

function again() {
    XO = 'X'
    player1.length = 0
    player2.length = 0
    resultado.classList.remove("testAnimation");
    resultado.innerHTML = ''
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = ''
    }
    fimInsert = true

}
function restart() {
    location.reload()
}


const resultado = document.getElementById('resultadoWin')
document.getElementById('reset').addEventListener('click', restart)
document.getElementById('again').addEventListener('click', again)
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', getCell));
