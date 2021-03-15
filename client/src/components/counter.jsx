import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div class="col-xl-12 col-md-12 mb-4">
          <div class="card border-left-danger shadow h-100 py-2">
            <div className="col-md-6" style={{ fontSize: 24 }}>
              {this.props.counter.nom}             
            </div>
            <div className="col-md-6" style={{ fontSize: 15 }}>
              Dim: {this.props.counter.dimX}m x {this.props.counter.dimY}m x {this.props.counter.dimZ}m : ({this.props.counter.volume} m3)
            </div>
            <div className="col-md-3" style={{ fontSize: 24 }}>
              <button className="btn btn-danger m-3" onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value === 0 ? "disabled" : ""} >
                <i className="fa fa-minus-circle" aria-hidden="true" />
              </button>

              <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>

              <button className="btn btn-success m-3" onClick={() => this.props.onIncrement(this.props.counter)}>
                <i className="fa fa-plus-circle" aria-hidden="true" />
              </button>
            </div>
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