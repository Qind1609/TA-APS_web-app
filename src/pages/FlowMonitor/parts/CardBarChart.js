import React, { useEffect } from 'react';
window.chart = {
  chartDay: null,
  chartMonth: null,
  chartWeek: null
};
export default function CardBarChart({ time, flow, canvasID }) {
  useEffect(() => {
    let chartCanvas = document.getElementById(canvasID);
    let ctx = chartCanvas.getContext('2d');
    let config = {
      type: 'bar',
      data: {
        labels: time,
        datasets: [
          {
            label: 'L',
            backgroundColor: function (context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              return value > 80 ? '#CC0000' : '#33FFFF';
            },
            borderColor: '#19F5B7',
            data: flow,
            fill: true,
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
      window.chart.chartDay = new Chart(ctx, config);
    }
    if (canvasID === 'weekChartBarFlow') {
      if (window.chart.chartWeek) {
        window.chart.chartWeek.destroy();
      }
      window.chart.chartWeek = new Chart(ctx, config);
    }
    if (canvasID === 'monthChartBarFlow') {
      if (window.chart.chartMonth) {
        window.chart.chartMonth.destroy();
      }
      window.chart.chartMonth = new Chart(ctx, config);
    }
  }, [time, flow]);
  return (
    <>
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
            <canvas id={canvasID}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
