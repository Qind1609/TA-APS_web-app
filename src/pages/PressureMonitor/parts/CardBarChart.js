import React, { useEffect } from 'react';

export default function CardBarChart({ time=[], pressure=[] }) {
  const config = {
    type: 'bar',
    data: {
      labels: time,
      datasets: [
        {
          label: 'Bar',
          backgroundColor: 'blue',
          borderColor: 'blue',
          data: pressure,
          yAxisID: 'y'
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: false,
        text: 'Orders Chart',
        fontColor: 'white'
      },
      plugins: {
        zoom: {
          pan: {
            enabled: true,
            mode: 'x'
          },
          zoom: {
            wheel: {
              enabled: true
            },
            mode: 'x'
          }
        }
      },
      legend: {
        labels: {
          fontColor: 'white'
        },
        align: 'end',
        position: 'bottom'
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          type: "time",
          distribution: "linear"
        }],
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
      }
    }
  };


  useEffect(() => {
    const chartCanvas = document.getElementById('PressureChart');
    const ctx = chartCanvas.getContext('2d');
    if (window.chart.chartPress) {
      window.chart.chartPress.destroy();
    }
    // eslint-disable-next-line
    window.chart.chartPress = new Chart(ctx, config);
  }, []);

  useEffect(() => {
    window.chart.chartPress.data.labels = time;
    window.chart.chartPress.data.datasets[0].data = pressure;
    window.chart.chartPress.update();
  }, [pressure, time]);

  return (
    <div className="rounded-md relative flex flex-col min-w-0 break-words bg-white w-full">
      <div className="rounded-t mb-6 px-4 pt-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase mt-3 text-blueGray-700 mb-1 text-xs font-semibold">PRESSURE</h6>
            <h2 className="text-blueGray-700 text-xl font-semibold">MONITOR</h2>
          </div>
        </div>
      </div>
      <div className="px-4 flex-auto">
        <div className="relative h-screen ">
          <canvas id="PressureChart" />
        </div>
      </div>
    </div>
  );
}
