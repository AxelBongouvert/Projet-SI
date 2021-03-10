import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{border:"solid grey", margin:"1%"}}>
          <div className="col-md-1" style={{ fontSize: 24 }}>
            {this.props.counter.nom} ({this.props.counter.volume} m3)
          </div>

          <div className="col-md-1" style={{ fontSize: 24 }}>
            <button
              className="btn btn-info m-3"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>

            <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>

            <button
              className="btn btn-secondary m-3"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
          </div>
        </div>


      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;