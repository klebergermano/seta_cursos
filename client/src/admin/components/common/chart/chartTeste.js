import React, { useState, Component, useEffect } from "react";
import { Bar, Line, Pie, Area } from "react-chartjs-2";
import * as helpers from "../../helpers/index";

function ChartTeste(props) {
  const changeDataAno = (e) => {
    let ano = e.target.name;
    setDataAno(parseInt(ano));
  };
  const ano_atual = new Date().getFullYear();
  const [chartData, setChartData] = useState({});
  const [dataAno, setDataAno] = useState(ano_atual);

  const chart = () => {
    fetch("/profile/alunos_classe")
      .then((res) => res.json())
      .then((res) => {
        let cadastros = helpers.graphicFunc.monthRegister(res, dataAno);

        setChartData({
          labels: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Desembro",
          ],
          datasets: [
            {
              label: "Alunos Mês " + cadastros.ano,
              data: cadastros.mes_dados,
              backgroundColor: "#336699",
              borderWdth: 1,
              borderColor: "#ff7766",
              hoverBorderWidth: 10,
              hoverBorderColor: "#212529",
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
      <div>
        <button name="2019" onClick={changeDataAno}>
          2019
        </button>
        <button name="2020" onClick={changeDataAno}>
          2020
        </button>
      </div>

      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: "",
            fontSize: 14,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
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

export default ChartTeste;
