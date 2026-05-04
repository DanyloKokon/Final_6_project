import Chart from 'chart.js/auto';
import { useEffect, useState } from 'react';

function ChartSection({ data, whClicked }) {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        if (!data || !data.forecast || !data.forecast.forecastday) return;

        const forecastDay = data.forecast.forecastday[whClicked];
        if (!forecastDay || !forecastDay.hour) return;

        const hours = forecastDay.hour.map(h => h.time.split(' ')[1]);
        const temps = forecastDay.hour.map(h => h.temp_c);
        const conditions = forecastDay.hour.map(h => h.condition.text);

        const ctx = document.getElementById('chartOne');
        if (!ctx) return;

        if (chart) {
            chart.destroy();
        }

        const newChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: hours,
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: temps,
                        borderColor: '#FFB36C',
                        // backgroundColor: 'none',
                        borderWidth: 2,
                        // fill: true,
                        tension: 0.4,
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: `Hourly Forecast - ${forecastDay.date}`
                    },
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Temperature (°C)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Time'
                        }
                    }
                }
            }
        });

        setChart(newChart);

        return () => {
            newChart.destroy();
        };
    }, [data, whClicked]);

    return ( <>
        <div className="inf-ul">
            <canvas id="chartOne" />
        </div>
    </> );
}

export default ChartSection;