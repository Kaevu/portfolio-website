'use client';
import { getTypeGames, getLastGameOfEachDay } from './components/scraper';
import { Navbar } from 'app/components/nav'
import { Line } from 'react-chartjs-2';
import { Card } from 'app/chess/components/card';
import { useEffect, useState } from 'react';
import {
  ChartOptions,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );

const fetchData = async (type:string) => {
  try {
    const games = getLastGameOfEachDay(await getTypeGames(type));
    const dates = games.map(item => item.date);
    const rating = games.map(item => item.rating);
    return { dates, rating };
  }
  catch(error) {
    console.log(error);
    return { dates: [], rating: [] };
  }
};

function alignDataWithDates(data: BulletData | undefined, allDates: (string | null)[]): (number | null)[] {
  if (!data) {
    return allDates.map(() => null);
  }

  const ratingsMap: { [date: string]: number | null } = {};

  // Create a map of dates to ratings
  for (let i = 0; i < data.dates.length; i++) {
    if (data.dates[i] !== null) {
      ratingsMap[data.dates[i]] = data.rating[i];
    }
  }

  // Map the allDates array to return the corresponding rating or null
  return allDates.map(date => ratingsMap[date ?? ''] ?? null);
}

interface BulletData {
  dates: string[];
  rating: (number | null)[];
}
interface ChartableData {
  labels: string[];
  datasets: {
    label: string;
    data: (number | null)[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
    spanGaps: boolean;
  }[];
}

const GetData = async () => {
  const bullet: BulletData = await fetchData('bullet');
  const blitz: BulletData = await fetchData('blitz');
  const rapid: BulletData = await fetchData('rapid');

  console.log('Fetched bullet data:', bullet);
  console.log('Fetched blitz data:', blitz);
  console.log('Fetched rapid data:', rapid);

  const allDates = await Array.from(new Set([
    ...(bullet?.dates ?? []),
     ...(blitz?.dates ?? []),
      ...(rapid?.dates ?? [])]));

  const sortedDates = allDates.sort((a, b) => {
    if (a === null || b === null) {
      return 0;
    }
    const [aMonth, aDay, aYear] = a.split('/');
    const [bMonth, bDay, bYear] = b.split('/');
  
    const aDate = new Date(`${aYear}-${aMonth}-${aDay}`);
    const bDate = new Date(`${bYear}-${bMonth}-${bDay}`);
  
    return aDate.getTime() - bDate.getTime();
  });
  const bulletData = alignDataWithDates(bullet, sortedDates);
  const blitzData = alignDataWithDates(blitz, sortedDates);
  const rapidData = alignDataWithDates(rapid, sortedDates);

  const chartData: ChartableData = {
    labels: sortedDates,
    datasets: [
      {
        label: 'Bullet',
        data: bulletData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 32)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        spanGaps: true,
      },
      {
        label: 'Blitz',
        data: blitzData,
        fill: false,
        backgroundColor: 'rgb(25, 99, 132)',
        borderColor: 'rgba(25, 99, 12, 0.2)',
        spanGaps: true,
      },
      {
        label: 'Rapid',
        data: rapidData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 12, 92, 0.2)',
        spanGaps: true,
      }
    ],
  };
  console.log(chartData);
  return {chartData};
};
const peakData = async () =>{
  let jsonData = await fetch('https://api.chess.com/pub/player/carsenkennedy/stats');
  let obj = await jsonData.json();
  return obj
};
// const customTickFormatter = (value: string | number | Date) => {
//   if (typeof value === 'string') {
//     const dateParts = value.split('/'); // Split the date string into parts
//     if (dateParts.length >= 2) {
//       const month = parseInt(dateParts[0], 10); // Extract and parse the month part

//       // Convert the month number to the corresponding month name
//       const monthNames = [
//         'January', 'February', 'March', 'April',
//         'May', 'June', 'July', 'August',
//         'September', 'October', 'November', 'December'
//       ];

//       return monthNames[month - 1]; // Return the month name
//     }
//   }

//   return value; // If value is not a string or cannot be parsed, return the original value
// };

// const options: ChartOptions = {
//   scales: {
//     x: {
//       ticks: {
//         callback: customTickFormatter,
//       },
//     },
//   },
// };

export default function Page() {
  const [chartData, setChartData] = useState<ChartableData | undefined>(undefined);
  const [peak, setPeak] = useState<any | undefined>(undefined);
  
  useEffect(() => {
    const fetchData = async () => {
      const { chartData } = await GetData();
      const peak = await peakData();
      setPeak(peak);
      setChartData(chartData);
    };

    fetchData();
  }, []);
  if (!chartData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>Loading...</div>
      </div>
    ); // or any other loading indicator
  }
  return (
    <section>
      <h1 className="font-bold text-2xl pt-32 mb-2 tracking-tighter">Chess</h1>
      <Navbar />
      {chartData && <Line data={chartData} />}
      <div className='flex justify-between pt-8'>
        <Card title={'Peak Bullet'} stat={peak['chess_bullet']['best']['rating']}/>
        <Card title={'Peak Blitz'} stat={peak['chess_blitz']['best']['rating']}/>
        <Card title={'Peak Rapid'} stat={peak['chess_rapid']['best']['rating']}/>
      </div>
      <p className='pt-12'> Note: One of these days I'll take this more seriously and actually study
      until then, I'll keep bashing my head against the wall.
      </p>
    </section>
  )
}