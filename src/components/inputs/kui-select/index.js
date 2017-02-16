import React, { Component } from 'react';
import './kui-select.css';
import closeIcon from './close.svg';

export default class KuiSelect extends Component {
	constructor() {
		super();
		this.renderResults = this.renderResults.bind(this);
		this.search = this.search.bind(this);
		this.handleBodyClick = this.handleBodyClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.computeStyle = this.computeStyle.bind(this);
		this.clearInput = this.clearInput.bind(this);
		this.hideResults = this.hideResults.bind(this);
		this.state = {
			searchResults: [],
			showResults: false,
			currentlySelectedResult: -1,
			showClearIcon: false
		}
	}

	componentDidMount() {
        document.body.addEventListener('click', this.handleBodyClick);
        this.searchTextInput.addEventListener('keyup', this.handleKeyPress);
    }

    render() {
		this.computeStyle();
		return (
			<div className="kui-select">
				<input 
					className="kui-select-input"
					type="text" 
					onChange={this.search} 
					ref={input => this.searchTextInput = input}
					onFocus={this.search}
					onClick={this.search}
					style={this.inputStyle}
					placeholder="Type here.."
				/>
				{ this.state.showClearIcon && 
				<img 
						className="kui-select-clear" 
						onClick={this.clearInput}
						src={closeIcon} 
						alt="y"
						style={{left: this.inputStyle.width - 7}}
				/>
				}
				{this.state.showResults && this.renderResults()}
			</div>
			)
	}

	renderResults() {
		var searchKey = this.props.searchKey;
		return (
			<ul 
				className="kui-select-results" 
				style={this.resultsBoxStyle}>
			{this.state.searchResults.map((res, i) =>
			    <li
			    	className={ 'kui-select-result ' + (this.state.currentlySelectedResult === i ? 'kui-active' : '') }
			    	key={i}
			    	onClick={() => this.onResultClick(res)}
			    >
			    	{res[searchKey]}
			    </li>
			)}
			</ul>
		)
	}

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleBodyClick);
        this.searchTextInput.removeEventListener('keyup', this.handleKeyPress);
    }

    handleKeyPress(event) {
    	var numOfResults = this.state.searchResults.length;
    	switch(event.key) {
    		case 'ArrowUp':
	    		this.state.currentlySelectedResult === 0 && this.setState({
	    			currentlySelectedResult: numOfResults
	    		});
	    		this.setState({
	    			currentlySelectedResult: (this.state.currentlySelectedResult - 1) % numOfResults
	    		});
	    		break;
    		case 'ArrowDown':
    			if(this.state.showResults)
		    		this.setState({
		    			currentlySelectedResult: (this.state.currentlySelectedResult + 1) % numOfResults
		    		});
		    	else
		    		this.search();
	    		break;
    		case 'Enter':
	    		if(this.state.currentlySelectedResult !== -1) {
	    			this.onResultClick(this.state.searchResults[this.state.currentlySelectedResult]);
	    		}
    			break;
    		case 'Escape':
	    		this.hideResults()
    			break;
    		default:
    	}
    }

    handleBodyClick(event) {
    	var classesOnTargetElement = event.target.className.split(' ');
    	var isClickedOutside = classesOnTargetElement.indexOf('kui-select-input') === -1 && classesOnTargetElement.indexOf('kui-select-result') === -1;
    	isClickedOutside && this.hideResults();
    }

    hideResults() {
    	this.setState({showResults: false, currentlySelectedResult: -1});	
    }

	computeStyle() {
		this.inputStyle = (this.props.options && this.props.options.inputStyle) || {};
		this.resultsBoxStyle = (this.props.options && this.props.options.resultsBoxStyle) || {};

		//set default styles
		this.inputStyle.width = this.inputStyle.width || 300;
		this.inputStyle.height = this.inputStyle.height || 30;
		this.resultsBoxStyle.width = this.inputStyle.width || 300;
		this.resultsBoxStyle.top = this.inputStyle.height + 5;
	}

	clearInput() {
		this.searchTextInput.value = '';
		typeof(this.props.onResultSelect) === 'function' && this.props.onResultSelect(null);
		this.setState({showClearIcon: false});
	}

	search() {
		var searchText = this.searchTextInput.value.toLowerCase();
		var searchKey = this.props.searchKey;
		var showClearIcon = searchText === '' ? false : true;
		var searchResults = this.props.suggestions
								.filter(el => el[searchKey].toLowerCase().indexOf(searchText) !== -1);
		this.setState({
				searchResults: searchResults,
				showResults: searchResults.length > 0,
				showClearIcon: showClearIcon
		});
	}

	onResultClick(result) {
		typeof(this.props.onResultSelect) === 'function' && this.props.onResultSelect(result);
		this.hideResults();
		this.searchTextInput.value = result[this.props.searchKey];
		this.setState({showClearIcon: true});
	}
}