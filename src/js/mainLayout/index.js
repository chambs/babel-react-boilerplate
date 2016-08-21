import React from 'react';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>Boilerplate</h1>
        <h2>Children:</h2>
        <div id="children">
          {this.props.children}
        </div>
      </div>
      );
  }
}