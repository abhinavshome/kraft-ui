import React, { Component } from 'react';
import './App.css';
import Sidebar from './site/sidebar';


class App extends Component {
  render() {
    return (
        <div id="wrapper">
          <Sidebar />
          <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        {this.props.children || <h1>Home</h1>}
                    </div>
                </div>
            </div>
          </div>
          
        </div>
    );
  }
}

export default App;
