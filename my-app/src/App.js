import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	render() {
		return (
			<div>
				<p>You clicked {this.state.count} times</p>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click me
				</button>
			</div>
		);
	}
}

export default App;


/*
 //first step -> create a function component

import React from 'react';

function App() {
	return (<div>Hi!</div>)
}

export default App;
*/


/*
 //second step -> create the state variable

import React, { useState } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0); // 0 is the default value
  // the state is not an object
  return (
		<div>Hi!</div>
	)
}

export default App;
*/

/*
//third step -> read and update the state
import React, { useState } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0); // 0 is the default value
  // the state is not an object
  return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	)
}

export default App;
*/