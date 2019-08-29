import React, { Component } from 'react';
import './App.css';

class TableHeader extends Component {
  render() {
    return (
        <thead>
           <tr>
               <th>Name</th>
               <th>Job</th>
               <th>Remove</th>
           </tr>
        </thead>
    );
  }
  
}

export default TableHeader;
