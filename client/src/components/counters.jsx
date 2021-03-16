import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		const {
			onIncrement,
			onDecrement,
			counters,
		} = this.props;
		return (
			<div>
				{counters.map(counter => (
					<Counter
						nom={counter.nom}
						volume={counter.volume}
						dimX={counter.dimX}
						dimY={counter.dimY}
						dimZ={counter.dimZ}
						key={counter.id}
						counter={counter}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
					/>
				))}
				<div>
					<br></br>
				</div>
			</div>

		);
	}
}

export default Counters;