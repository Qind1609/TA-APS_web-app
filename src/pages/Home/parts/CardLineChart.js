import React, { useEffect } from 'react';
window.chart = {
  chartDay: null,
  chartMonth: null,
  chartWeek: null,
}
export default function CardLineChart({ time, consumption, flow, canvasID }) {
  useEffect(() => {
    let chartCanvas = document.getElementById(canvasID);
    let ctx = chartCanvas.getContext('2d');
    let chartHeight = chartCanvas.clientHeight;

    const gradientE = ctx.createLinearGradient(0, 0, 0, chartHeight);
    gradientE.addColorStop(0, 'rgba(241,1,12,0.6)');
    gradientE.addColorStop(1, 'rgba(241,1,12,0)');

    const gradientF = ctx.createLinearGradient(0, 0, 0, chartHeight);
    gradientF.addColorStop(0, 'rgba(1,185,241,1)');
    gradientF.addColorStop(1, 'rgba(1,185,241,0)');

    let config = {
      type: 'line',
      data: {
        labels: time,
        datasets: [
          {
            label: 'L',
            backgroundColor: gradientF,
            borderColor: '#048cd0',
            data: flow,
            fill: true,
            tension: 0.2,
            yAxisID: 'y',
          },
          {
            label: 'kWh',
            backgroundColor: gradientE,
            borderColor: '#f1010c',
            data: consumption,
            fill: true,
            tension: 0.2,
            yAxisID: 'y1',
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart',
          fontColor: 'white',
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'x',
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              mode: 'x',
            },
          },
        },
        legend: {
          labels: {
            fontColor: 'white',
          },
          align: 'end',
          position: 'bottom',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        scales: {
          x: {
            min: 0,
            max: 10,
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            min: 0,
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            min: 0,
          },
        },
      },
    };
    if (canvasID === 'dayChartLineHome') {
      if(window.chart.chartDay) {
        window.chart.chartDay.destroy();
      }
      window.chart.chartDay = new Chart(ctx, config);
    }
    if (canvasID === 'weekChartLineHome') {
      if(window.chart.chartWeek) {
        window.chart.chartWeek.destroy();
      }
      window.chart.chartWeek = new Chart(ctx, config);
    }
    if (canvasID === 'monthChartLineHome') {
      if(window.chart.chartMonth) {
        window.chart.chartMonth.destroy();
      }
      window.chart.chartMonth = new Chart(ctx, config);
    }
  }, [consumption, flow, time]);
  return (
    <>
      <div className='rounded-md relative flex flex-col min-w-0 break-words bg-white w-full'>
        <div className='rounded-t mb-6 px-4 pt-3 bg-transparent'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full max-w-full flex-grow flex-1'>
              <h6 className='uppercase mt-3 text-blueGray-700 mb-1 text-xs font-semibold'>
                ENERGY
              </h6>
              <h2 className='text-blueGray-700 text-xl font-semibold'>MONITOR</h2>
            </div>
          </div>
        </div>
        <div className='px-4 flex-auto'>
          <div className='relative h-screen '>
            <canvas id={canvasID}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
