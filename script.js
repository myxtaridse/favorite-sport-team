const teamFavorite = document.getElementById('team');
const sportFavorite = document.getElementById('sport');
const yearFavorite = document.getElementById('year');
const headCoachFavorite = document.getElementById('head-coach');
const gridTeam = document.getElementById('grid-container');
const filterPlayers = document.getElementById('players');


const myFavoriteFootballTeam = {
    team: 'Argentina',
    sport: 'Football',
    year: 1986,
    isWorldCupWinner: true,
    headCoach: {
        coachName: 'Carlos Bilardo',
        matches: 7
    },
    players: [
        {
            name: 'Sergio Almirón',
            position: 'forward',
            number: 1,
            isCaptain: false,
            nickname: null
        },
        {
            name: 'Sergio Batista',
            position: 'midfielder',
            number: 2,
            isCaptain: false,
            nickname: null
        },
        {
            name: 'Ricardo Bochini',
            position: 'midfielder',
            number: 3,
            isCaptain: false,
            nickname: 'El Bocha'
        },
        {
            name: 'Claudio Borghi',
            position: 'midfielder',
            number: 4,
            isCaptain: false,
            nickname: 'Bichi'
        },
        {
            name: 'José Luis Brown',
            position: 'defender',
            number: 5,
            isCaptain: false,
            nickname: 'Tata'
        },
        {
            name: 'Daniel Passarella',
            position: 'defender',
            number: 6,
            isCaptain: false,
            nickname: 'El Gran Capitán'
        },
        {
            name: 'Jorge Burruchaga',
            position: 'forward',
            number: 7,
            isCaptain: false,
            nickname: 'Burru'
        },
        {
            name: 'Néstor Clausen',
            position: 'defender',
            number: 8,
            isCaptain: false,
            nickname: null
        },
        {
            name: 'José Luis Cuciuffo',
            position: 'defender',
            number: 9,
            isCaptain: false,
            nickname: 'El Cuchu'
        },
        {
            name: '(Captain) Diego Maradona',
            position: 'midfielder',
            number: 10,
            isCaptain: true,
            nickname: 'El Pibe de Oro'
        },
        {
            name: 'Jorge Valdano',
            position: 'forward',
            number: 11,
            isCaptain: false,
            nickname: 'The Philosopher of Football'
        },
        {
            name: 'Héctor Enrique',
            position: 'midfielder',
            number: 12,
            isCaptain: false,
            nickname: null
        },
        {
            name: 'Oscar Garré',
            position: 'defender',
            number: 13,
            isCaptain: false,
            nickname: null
        },
        {
            name: 'Ricardo Giusti',
            position: 'midfielder',
            number: 14,
            isCaptain: false,
            nickname: null
        },
        {
            name: 'Luis Islas',
            position: 'goalkeeper',
            number: 15,
            isCaptain: false,
            nickname: 'El loco'
        },
        {
            name: 'Julio Olarticoechea',
            position: 'defender',
            number: 16,
            isCaptain: false,
            nickname: null
        },
        {
            name: 'Pedro Pasculli',
            position: 'forward',
            number: 17,
            isCaptain: false,
            nickname: null
        },
        {
            name: 'Nery Pumpido',
            position: 'goalkeeper',
            number: 18,
            isCaptain: false,
            nickname: null
        },
        {
            name: 'Oscar Ruggeri',
            position: 'defender',
            number: 19,
            isCaptain: false,
            nickname: 'El Cabezón'
        },
        {
            name: 'Carlos Tapia',
            position: 'midfielder',
            number: 20,
            isCaptain: false,
            nickname: null
        },
        {
            name: 'Marcelo Trobbiani',
            position: 'midfielder',
            number: 21,
            isCaptain: false,
            nickname: 'Calesita'
        },
        {
            name: 'Héctor Zelada',
            position: 'goalkeeper',
            number: 22,
            isCaptain: false,
            nickname: null
        }
    ]
}

Object.freeze(myFavoriteFootballTeam);

// присваиваем переменной свойство из объекта
const { team, sport, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

teamFavorite.textContent = team;
sportFavorite.textContent = sport;
yearFavorite.textContent = year;
headCoachFavorite.textContent = coachName;



players.forEach((player) => {
    gridTeam.innerHTML += 
        `
            <div class="card-player">
                <h2 class="name-player">${player.name}</h2>
                <div class="position-player">Position: ${player.position}</div>
                <div class="number-player">Number: ${player.number}</div>
                <div class="nick-player">Nickname: ${player.nickname}</div>
            </div>    
        `;
});

const playerCards = (arr = players) => {
    gridTeam.innerHTML += arr.map(({name, position, number, nickname}) => 
        `
            <div class="card-player">
                <h2 class="name-player">${name}</h2>
                <div class="position-player">Position: ${position}</div>
                <div class="number-player">Number: ${number}</div>
                <div class="nick-player">Nickname: ${nickname !== null ? nickname : 'N/A'}</div>
            </div>    
        `
    ).join("");
};




filterPlayers.addEventListener('change', (e) => {
    gridTeam.innerHTML = '';
    switch (e.target.value) {
        case 'nick': 
            playerCards(players.filter((player) => player.nickname !== null));
        break;
        case 'forward':
            playerCards(players.filter((player) => player.position === 'forward'));
        break;
        case 'midfielder':
            playerCards(players.filter((player) => player.position === 'midfielder'));
        break;
        case 'defender':
            playerCards(players.filter((player) => player.position === 'defender'));
        break;
        case 'goalkeeper':
            playerCards(players.filter((player) => player.position === 'goalkeeper'));
        break;
        default: playerCards();
    }
});
