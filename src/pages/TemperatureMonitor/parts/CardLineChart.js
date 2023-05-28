import React, { useEffect } from 'react';

export default function CardLineChart({ time=[], temperature=[] }) {
  const config = {
    type: 'line',
    data: {
      labels: time,
      datasets: [
        {
          label: 'Celsius Degree',
          backgroundColor: 'red',
          borderColor: 'red',
          data: temperature,
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
    const chartCanvas = document.getElementById('TemperatureChart');
    const ctx = chartCanvas.getContext('2d');
    if (window.chart.chartTemp) {
      window.chart.chartTemp.destroy();
    }
    // eslint-disable-next-line
    window.chart.chartTemp = new Chart(ctx, config);
  }, []);

  useEffect(() => {
    window.chart.chartTemp.data.labels = time;
    window.chart.chartTemp.data.datasets[0].data = temperature;
    window.chart.chartTemp.update();
  }, [temperature, time]);

  return (
    <div className="rounded-md relative flex flex-col min-w-0 break-words bg-white w-full">
      <div className="rounded-t mb-6 px-4 pt-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase mt-3 text-blueGray-700 mb-1 text-xs font-semibold">TEMPERATURE</h6>
            <h2 className="text-blueGray-700 text-xl font-semibold">MONITOR</h2>
          </div>
        </div>
      </div>
      <div className="px-4 flex-auto">
        <div className="relative h-screen ">
          <canvas id="TemperatureChart" />
        </div>
      </div>
    </div>
  );
}
