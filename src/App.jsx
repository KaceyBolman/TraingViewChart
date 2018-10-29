import React from 'react';
import './App.css';
import { TVChartContainer } from './components/TVChartContainer/index';

class App extends React.Component {
	render() {
		return (
			<div className={ 'App' }>
				Example for Trading View Chart
				<TVChartContainer />
			</div>
		);
	}
}

export default App;

