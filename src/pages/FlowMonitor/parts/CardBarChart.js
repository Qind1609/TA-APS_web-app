import React, { useEffect } from 'react';

const gradient = window['chartjs-plugin-gradient'];
// eslint-disable-next-line
Chart.register(gradient);

export default function CardBarChart({ time, flow, canvasID }) {
  useEffect(() => {
    const chartCanvas = document.getElementById(canvasID);
    const ctx = chartCanvas.getContext('2d');
    const config = {
      type: 'bar',
      data: {
        labels: time,
        datasets: [
          {
            label: 'L',
            gradient: {
              backgroundColor: {
                axis: 'y',
                colors: {
                  0: 'rgba(1,185,241,0.4)',
                  1000: 'rgba(1,185,241,0.8)'
                }
              },
            },
            borderColor: '#048cd0',
            data: flow,
            fill: 'start',
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
          x: {
            min: 0,
            max: 10
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            min: 0
          }
        }
      }
    };
    if (canvasID === 'dayChartBarFlow') {
      if (window.chart.chartDay) {
        window.chart.chartDay.destroy();
      }
      // eslint-disable-next-line
      window.chart.chartDay = new Chart(ctx, config);
    }
    if (canvasID === 'weekChartBarFlow') {
      if (window.chart.chartWeek) {
        window.chart.chartWeek.destroy();
      }
      // eslint-disable-next-line
      window.chart.chartWeek = new Chart(ctx, config);
    }
    if (canvasID === 'monthChartBarFlow') {
      if (window.chart.chartMonth) {
        window.chart.chartMonth.destroy();
      }
      // eslint-disable-next-line
      window.chart.chartMonth = new Chart(ctx, config);
    }
  }, [time, flow]);
  return (
      <div className="rounded-md relative flex flex-col min-w-0 break-words bg-white w-full">
        <div className="rounded-t mb-6 px-4 pt-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase mt-3 text-blueGray-700 mb-1 text-xs font-semibold">FLOW</h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">MONITOR</h2>
            </div>
          </div>
        </div>
        <div className="px-4 flex-auto">
          <div className="relative h-screen ">
            <canvas id={canvasID}/>
          </div>
        </div>
      </div>
  );
}
