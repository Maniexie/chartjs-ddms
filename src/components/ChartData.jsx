// src/components/ChartData.jsx
import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { chart } from '../utils/chart.json';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const ChartData = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await import('../utils/chart.json');
                const data = response.default;
                setChartData(data);
            } catch (error) {
                console.error('Fetch error: ', error);
            }
        };
        fetchData();
    }, []);

    const labels = chartData?.viewsPerMonth.map(item => item.month);

    const data = {
        labels,
        datasets: [
            {
                label: 'View / Month',
                data: chartData?.viewsPerMonth.map(item => item.views),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Like / Month',
                data: chartData?.likesPerMonth.map(item => item.likes),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Subscribe / Month',
                data: chartData?.subscribesPerMonth.map(item => item.subscribes),
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    if (!chartData) {
        return <div>Loading...</div>;
    }
    return (
        <div className="max-md:mx-auto p-4 h-[40vh] w-[80vw] bg-black rounded shadow-md">
            <Bar options={options} data={data} width={100} height={50} />
        </div>
    );
};

export default ChartData;

