import React from 'react';

export default function CardLineChartDay({ time, consumption, flow }) {
  React.useEffect(() => {
    let config = {
      type: "line",
      data: {
        labels: time,
        datasets: [
          {
            label: "kWh",
            backgroundColor: "#3FFFF",
            borderColor: "#33FFFF",
            data: consumption,
            fill: false,
            tension: 0.1,
            yAxisID: "y",
          },
          {
            label: "Flow",
            backgroundColor: "#CCFF00",
            borderColor: "#CCFF00",
            data: flow,
            fill: false,
            tension: 0.1,
            yAxisID: "y1",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
          fontColor: "white",
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: "x",
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              mode: "x",
            },
          },
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
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
            // suggestedMin: 0,
            // suggestedMax: 500000,
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            // suggestedMin: 0,
            // suggestedMax: 100000,
          },
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: "",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],

          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };

    let ctx = document.getElementById("daychartLineDay").getContext("2d");
    window.chartDay && window.chartDay.destroy();
    window.chartDay = new Chart(ctx, config);
  }, [consumption, flow, time]);
  return (
    <>
      {/* <ExportPopup /> */}

      <div className="relative flex flex-col min-w-0 break-words bg-blueGray-700 w-full">
        <div className="rounded-t mb-0 px-4 pt-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase mt-3 text-blueGray-100 mb-1 text-xs font-semibold">
                ENERGY
              </h6>
              <h2 className="text-white text-xl font-semibold">MONITORING</h2>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Total orders
              </h2>
            </div>
          </div>
        </div>
        <div className="px-4 flex-auto">
          <div className="relative h-screen">
            <canvas id="daychartLineDay"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
