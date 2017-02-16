import React from 'react';
import { Link } from 'react-router'

export default function Sidebar() {
    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <Link to="/">Kraft UI</Link>
                </li>
                <li>
                    <Link to="/kui-select">KuiSelect</Link>
                </li>
                <li>
                    <Link to="/kui-multiselect">KuiMultiSelect</Link>
                </li>
                <li>
                    <Link to="/kui-datepicker">KuiDatePicker</Link>
                </li>
                <li>
                    <Link to="/kui-checkbox">KuiCheckBox</Link>
                </li>
                <li>
                    <Link to="/kui-slider">KuiSlider</Link>
                </li>
                <li>
                    <Link to="/kui-rating">KuiRating</Link>
                </li>
            </ul>
        </div>
        )
} 