import React from 'react';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <a href="#another">go to another</a> |
        <a href="#">go to home</a> |

        <h1>Boilerplate</h1>
        <div id="children">
          {this.props.children}
        </div>
      </div>
      );
  }
}