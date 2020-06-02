import React, { useState, Component, useEffect } from "react";
import { Bar, Line, Pie, Area } from "react-chartjs-2";
import * as helpers from "../../helpers/index";

function ChartAlunoIdade(props) {
  const changeDataAno = (e) => {
    let ano = e.target.name;
    setDataAno(parseInt(ano));
  };
  const ano_atual = new Date().getFullYear();
  const [chartData, setChartData] = useState({});
  const [dataAno, setDataAno] = useState(ano_atual);

  const chart = () => {
    fetch("/profile/alunos")
      .then((res) => res.json())
      .then((res) => {
        let idades = helpers.graphicFunc.alunoIdade(res);

        setChartData({
          labels: [
            "5-9",
            "10-15",
            "16-18",
            "19-25",
            "26-30",
            "31-39",
            "40-50",
            "51-59",
            "60+",
            "N.D",
          ],
          datasets: [
            {
              label: "Alunos Idade ",
              data: idades,
              backgroundColor: [
                "#68e256",
                "#56e2cf",
                "#fbce4a",
                "#e95b54",
                "#854e9b",
                "#309fdb",
                "#3caf85",
                "#cf56e2",
                "#e25668",
                "#666",
              ],
              borderWdth: 0,
              hoverBorderWidth: 0,
              fill: false,
            },
          ],
        });
      });
  };
  useEffect(() => {
    chart();
  }, [dataAno]);

  return (
    <div>
      <Pie
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Idade dos Alunos",
            fontSize: 14,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                  min: 0,
                  stepSize: 1,
                  max: 4,
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                  display: false,
                  beginAtZero: true,
                  precision: 0,
                },
              },
            ],
          },
          legend: {
            display: true,
            position: "top",
            align: "end",
          },
          responsive: true,
          elements: {
            line: {
              tension: 0,
            },
          },
        }}
      />
    </div>
  );
}

export default ChartAlunoIdade;
