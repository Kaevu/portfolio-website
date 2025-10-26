

const gamesURL = 'https://api.chess.com/pub/player/carsenkennedy/games/archives'

// Get the links to the games
const getLinks = async () => {
    let jsondata = await fetch(gamesURL);
    let obj = await jsondata.json();
    return obj;
}


export async function getPastYearGameLinks() {
    try {
      let links = await getLinks();
  
      // Get current date and initialize variables
      let currentDate = new Date();
      let pastYearLinks: string[] = [];
      
      for (let i = 0; i < 13; i++) {
        let year = currentDate.getFullYear();
        let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
        pastYearLinks.push(`${year}/${month}`);
        currentDate.setMonth(currentDate.getMonth() - 1); 
      }
  
      let filteredLinks = links.archives.filter((link) => {
        let datePart = link.split('/').slice(-2).join('/');
        return pastYearLinks.includes(datePart);
      });
  
      return filteredLinks;
    } catch (error) {
      console.log(error);
    }
  }
interface Game {
  white: Player;
  black: Player;
  time_class: string;
  end_time: number;
}

interface Player {
  username: string;
  rating: number;
}

export interface TransformedGame {
  date: string;
  rating: number;
  end_time: number;
}

interface GraphableGame {
    date: string;
    rating: number;
}
  export async function getTypeGames(type: string) {
    try {

        let GamesELO: TransformedGame[]= [];
        const gameLinks = await getPastYearGameLinks();

        const games: Game[] = [];
        for (let i = 0; i < gameLinks.length; i++) {
            const jsondata = await fetch(gameLinks[i]);
            const obj = await jsondata.json();
            games.push(...obj.games);
        }
        
        const typeGames = games.filter((game) => game.time_class === type);
        for (const game of typeGames) {
            const date = new Date(game.end_time *1000).toLocaleDateString("en-US");
            if (game.white.username === 'carsenkennedy') {
                GamesELO.push({ date, rating: game.white.rating, end_time: game.end_time})
            } else if (game.black.username === 'carsenkennedy'){
                GamesELO.push({ date, rating: game.black.rating, end_time: game.end_time})
            }
        }
        return GamesELO;
        }
    catch (error) {
        console.log(error);
        return [];
    }
}

export function getLastGameOfEachDay(games: TransformedGame[]): { date: string, rating: number }[] {
    const gamesByDate: { [date: string]: TransformedGame[] } = {};
  
    // Group games by date
    games.forEach(game => {
      if (!gamesByDate[game.date]) {
        gamesByDate[game.date] = [];
      }
      gamesByDate[game.date].push(game);
    });
    const lastGames: { date: string, rating: number, end_time: number }[] = [];
    Object.keys(gamesByDate).map(date => {
      const gamesOnDate = gamesByDate[date];
      gamesOnDate.sort((a, b) => b.end_time - a.end_time); // Sort by end_time descending
      const lastGame = gamesOnDate[0];
      lastGames.push({ date: lastGame.date, rating: lastGame.rating, end_time: lastGame.end_time});
    });
    return lastGames.map(obj => ({
      date: new Date(obj.end_time*1000).toLocaleDateString("en-US"), 
      rating: obj.rating,
    }));;
  }

  // export function transformArray(originalArray: TransformedGame[]): GraphableGame[] {
  //   return originalArray.map(obj => ({
  //     date: new Date(obj.end_time*1000).toLocaleDateString("en-US"), 
  //     rating: obj.rating,
  //   }));
  // }

