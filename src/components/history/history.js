import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getHistory } from "../redux/actions/checkout";
import { Line } from "react-chartjs-2";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

class History extends Component {
  state = {
    start: new Date(),
    end: new Date(),
  };

  onStart = (event) => this.setState({ start: event });
  onEnd = (event) => this.setState({ end: event });

  onSubmit = (event) => {
    event.preventDefault();
    const startDate = this.state.start;
    console.log(startDate);
    const endDate = this.state.end.toLocaleDateString();
    this.props.dispatch(getHistory(startDate, endDate));
  };

  render() {
    const { histories } = this.props;
    let x = [];
    let y = [];
    let i = 0;
    histories.forEach((item) => {
      x[i] = item.date;
      y[i] = item.total;
      i++;
    });
    const data = {
      labels: x,
      datasets: [
        {
          label: "Transaction History",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: y,
        },
      ],
    };

    return (
      <>
        <div className="row">
          <div className="col-md-10">
            <div className="col-md-12">
              <Navbar />
            </div>
            <div className="row">
              <div className="col-md-1">
                <Sidebar />
              </div>
              <div className="col-md-11">
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-md-5">
                    <div>Start Date</div>
                    <DatePicker
                      selected={this.state.start}
                      onChange={this.onStart}
                    />
                  </div>
                  <div className="col-md-5">
                    <div> End Date</div>
                    <DatePicker
                      selected={this.state.end}
                      onChange={this.onEnd}
                    />
                  </div>
                  <div className="col-md-2">
                    <Button onClick={this.onSubmit}>Submit</Button>
                  </div>
                </div>
                <div className="col-md-10" style={{ marginTop: "20px" }}>
                  <Line data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    histories: state.order.histories,
  };
};
export default connect(mapStateToProps)(History);
