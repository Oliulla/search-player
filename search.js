const loadPlayers = (fN, lN) => {
    // console.log(`${fN}%20${lN}`)

    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${fN}%20${lN}`)
        .then(res => res.json())
        .then(data => searchPlyer(data, fN, lN))
        .catch(error => {
            console.log(error);
        })
}

const searchPlyer = (player, fN, lN) => {
    const playerContainer = document.getElementById('player-card')
    const plyaerInfo = player.player[0]
    console.log(plyaerInfo)

    const {strCutout, strPlayer, strDescriptionEN, dateBorn, strNationality, strTeam2} = plyaerInfo;

    // playerContainer.innerHTML = `
    // <img src="${strCutout}" class="card-img-top">
    // <div class="card-body">
    //   <h5 class="card-title">${strPlayer}</h5>
    //   <p class="card-text">${strDescriptionEN}</p>
    // </div>
    // `

    playerContainer.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${strCutout}" class="img-fluid rounded-start" alt="${fN} ${lN}">
            <div class="d-flex flex-column align-items-start ms-4">
                <h4 class="card-title text-warning">${strPlayer}</h4>
                <p class="card-text text-warning">Birth Date: ${dateBorn}</p>
                <p class="card-text text-warning">Nationality: ${strNationality}</p>
                <p class="card-text text-warning">National Team: ${strTeam2}</p>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${strPlayer}</h5>
                <p class="card-text">${strDescriptionEN}</p>
                
            </div>
        </div>
    </div>
    `
}

const searchPlayer = () => {
    const playerFirstName = document.getElementById('player-first').value;
    const playerLastName = document.getElementById('player-last').value;
    const playerF = playerFirstName.charAt(0).toUpperCase() + playerFirstName.slice(1);
    const playerL = playerLastName.charAt(0).toUpperCase() + playerLastName.slice(1);

    const loader = document.getElementById('spinloader');
    setTimeout(() => {
        loader.classList.replace('d-none', 'd-block')
    }, 2000);
    spinLoader()
    loadPlayers(playerF, playerL)
}

const spinLoader = () => {
    const loader = document.getElementById('spinloader');
    setTimeout(() => {
        loader.classList.replace('d-block', 'd-none')
    }, 3000);

}