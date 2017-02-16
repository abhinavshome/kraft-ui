import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'
import KuiSelectTest from './site/kui-select-test';

const KuiMultiSelect = () => <div><h1>KuiMultiSelect</h1>Coming soon..</div>;
const KuiDatePicker = () => <div><h1>KuiDatePicker</h1>Coming soon..</div>;
const KuiCheckBox = () => <div><h1>KuiCheckBox</h1>Coming soon..</div>;
const KuiSlider = () => <div><h1>KuiSlider</h1>Coming soon..</div>;
const KuiRating = () => <div><h1>KuiRating</h1>Coming soon..</div>;

ReactDOM.render((
   <Router history={browserHistory}>
      <Route path="/" component={App}>
         <Route path="/kui-select" component={KuiSelectTest} />
         <Route path="/kui-multiselect" component={KuiMultiSelect} />
         <Route path="/kui-datepicker" component={KuiDatePicker} />
         <Route path="/kui-checkbox" component={KuiCheckBox} />
         <Route path="/kui-slider" component={KuiSlider} />
         <Route path="/kui-rating" component={KuiRating} />
      </Route>
   </Router>
	
), document.getElementById('root'))