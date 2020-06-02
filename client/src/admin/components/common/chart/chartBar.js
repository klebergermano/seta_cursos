import React, { Component } from "react";
import { Bar, Line, Pie, Area } from "react-chartjs-2";
class ChartBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    textTitle: "",
    legendPosition: "top",
  };
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.textTitle,
              fontSize: 14,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              align: "end",
            },
            responsive: true,
            //  maintainAspectRatio: false,
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
}

export default ChartBar;
