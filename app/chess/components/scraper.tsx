
const gamesURL = 'https://api.chess.com/pub/player/carsenkennedy/games/archives'

// Get the links to the games
const getLinks = async () => {
  let obj;
    let jsondata = await fetch(gamesURL);
    obj = await jsondata.json();
    return obj;
}
async function getPastYearGameLinks(username: string) {
    let links: string[] = [];
    let currentDate = new Date();

    for (let i = 0; i < 12; i++) {
        // Extract year and month
        let year = currentDate.getFullYear();
        let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month needs to be in MM format

        // Construct the URL for the current month
        let url = `https://api.chess.com/pub/player/${username}/games/${year}/${month}`;
        // Move to the previous month
        currentDate.setMonth(currentDate.getMonth() - 1);
        if (await getLinks().then((data) => data[url] !== undefined)) {
            links.push(url);
        }
    }

        return links;
    }


let currentDate = new Date();
console.log(getPastYearGameLinks('carsenkennedy'));
