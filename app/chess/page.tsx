'use client';
import { Navbar } from 'app/components/nav'
import { Line } from 'react-chartjs-2';
import { Card } from 'app/chess/components/card';
import {
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


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Games Played',
      data: [12, 19, 3, 5, 2, 3, 9,1300,1250,1196,1175,1150],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl pt-32 mb-2 tracking-tighter">Chess</h1>
      <Navbar />
      <Line data={data} />
      <div className='flex justify-between pt-8'>
        <Card title={'Bullet'} stat={550}/>
        <Card title={'Bullet'} stat={550}/>
        <Card title={'Bullet'} stat={550}/>
      </div>
      <p className='pt-12'> Note: One of these days I'll take this more seriously and actually study
      until then, I'll keep bashing my head against the wall.
      </p>
    </section>
  )
}