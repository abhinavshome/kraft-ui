import React, { Component } from 'react';
import KuiSelect from '../components/inputs/kui-select';
import Highlight from 'react-highlight';
import 'react-highlight/node_modules/highlight.js/styles/arta.css';

export default class KuiSelectTest extends Component {
	constructor() {
		super();
		this.state = {
			value: null
		};
	}

	render() {
		var cities = [{
			id: 1,
			name: 'New York',
			code: 'NY'
		}, {
			id: 2,
			name: 'Washington',
			code: 'WD'
		}, {
			id: 3,
			name: 'Chicago',
			code: 'CG'
		}, {
			id: 4,
			name: 'New Jersey',
			code: 'NJ'
		}, {
			id: 5,
			name: 'San Francisco',
			code: 'SF'
		}];

		//options are optional
		var options = {
			inputStyle: {
				width: 350,
				height: 30
			},
			resultsBoxStyle: {
				width: 350,
				boxShadow: '2px 2px 3px #eee'
			}
		}

		return (
			<div>
			<h1>KuiSelect</h1>
            <p>This is a custom select box with autocomplete feature</p>
            <hr />  

			Select a city:
			<KuiSelect 
				suggestions={cities} 
				searchKey={'name'}
				onResultSelect={(val) => this.setState({value: val})}
				options={options}
			/>
			Result is : {JSON.stringify(this.state.value)}

			<hr/>
			<Highlight className='JSX'>
{`import React, { Component } from 'react';
import { KuiSelect } from 'kraft-ui';

export default class KuiSelectTest extends Component {
	constructor() {
		super();
		this.state = {
			value: null
		};
	}

	render() {
		var cities = [{
			id: 1,
			name: 'New York',
			code: 'NY'
		}, {
			id: 2,
			name: 'Washington',
			code: 'WD'
		}, {
			id: 3,
			name: 'Chicago',
			code: 'CG'
		}, {
			id: 4,
			name: 'New Jersey',
			code: 'NJ'
		}, {
			id: 5,
			name: 'San Francisco',
			code: 'SF'
		}];

		//options are optional
		var options = {
			inputStyle: {
				width: 350,
				height: 30
			},
			resultsBoxStyle: {
				width: 350,
				boxShadow: '2px 2px 3px #eee'
			}
		}

		return (
			<div>
				Select a city:
				<KuiSelect 
					suggestions={cities} 
					searchKey={'name'}
					onResultSelect={(val) => this.setState({value: val})}
					options={options}
				/>
				Result is : {JSON.stringify(this.state.value)}
			</div>
		)
	}
}`}
				</Highlight>
		</div>
		)
	}
}