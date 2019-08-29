import React, { Component } from 'react';
import './App.css';
import TableBody from './TableBody'
import TableHeader from './TableHeader'

class Table extends Component {
  render() {
    const {characterData, removeEntry} = this.props;
    return (
        <table>
            <TableHeader />
            <TableBody 
              characterData={characterData}
              removeEntry={removeEntry}
            />
        </table>
    );
  }
  
}

export default Table;
