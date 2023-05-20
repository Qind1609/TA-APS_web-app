import React from 'react';

export default function CardLineChartDay({ data, data_2 }) {
  React.useEffect(() => {
    let ctx = document.getElementById("daychartLineDay").getContext("2d");
    let chartCanvas = document.getElementById("daychartLineDay");
    let chartHeight = chartCanvas.clientHeight;
    let chartCanvas_2 = document.getElementById("daychartLineDay");
    let chartHeight_2 = chartCanvas_2.clientHeight;

    const gradient_2 = ctx.createLinearGradient(0, 0, 0, chartHeight_2);
    gradient_2.addColorStop(0, 'rgba(241,1,12,0.6)');
    gradient_2.addColorStop(1, 'rgba(241,1,12,0)');

    const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
    gradient.addColorStop(0, 'rgba(1,185,241,1)');
    gradient.addColorStop(1, 'rgba(1,185,241,0)');


    let config = {
      type: 'line',
      data: {
        labels: [
          '3/3/2021',
          '2/3/2021',
          '3/3/2021',
          '4/3/2021',
          '5/3/2021',
          '6/3/2021',
          '7/3/2021',
          '8/3/2021',
          '9/3/2021',
          '10/3/2021',
          '11/3/2021',
          '12/3/2021',
          '13/3/2021',
          '14/3/2021',
          '15/3/2021',
          '16/3/2021',
          '17/3/2021',
          '18/3/2021',
          '19/3/2021',
          '20/3/2021',
          '21/3/2021',
          '22/3/2021',
          '23/3/2021',
          '24/3/2021',
          '25/3/2021',
          '26/3/2021',
          '27/3/2021',
          '28/3/2021',
          '29/3/2021',
          '30/3/2021',
          '1/4/2021',
          '2/4/2021',
          '3/4/2021',
          '4/4/2021',
          '5/4/2021',
          '6/4/2021',
          '7/4/2021',
          '8/4/2021',
          '9/4/2021',
          '10/4/2021',
          '11/3/2021',
          '12/4/2021',
          '13/4/2021',
          '14/4/2021',
          '8/4/2021',
          '9/4/2021',
          '10/4/2021',
          '11/3/2021',
          '12/4/2021',
          '13/4/2021',
          '14/4/2021'
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: gradient, // Put the gradient here as a fill color
            borderColor: "#048cd0",
            data: data,
            fill: true,
            tension: 0.4,
          },
          {
            label: new Date().getFullYear(),
            backgroundColor: gradient_2,
            borderColor: "#f1010c",
            data: data_2,
            fill: true,
            tension: 0.4,
          },
        ],
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
          xAxes: [
            {
              ticks: {
                fontColor: 'rgba(255,255,255,.7)'
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: '',
                fontColor: 'white'
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ],

          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value'
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.2)',
                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ]
        }
      }
    };


    window.chartDay && window.chartDay.destroy();
    window.chartDay = new Chart(ctx, config);
  }, [data]);
  return (
    <>
      <div className="rounded-md relative flex flex-col min-w-0 break-words bg-white w-full">
        <div className="rounded-t mb-6 px-4 pt-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase mt-3 text-blueGray-700 mb-1 text-xs font-semibold">
                ENERGY
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">MONITORING</h2>

            </div>
          </div>
        </div>
        <div className="px-4 flex-auto">
          <div className="relative h-screen ">
            <canvas id="daychartLineDay"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
