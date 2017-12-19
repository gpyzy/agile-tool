import * as React from 'react';
import fetch from 'node-fetch';
import { Button } from 'antd';

class TestFetch extends React.Component {

  render() {
    return (
      <div className="App">
        <Button onClick={this.handleOnClick}>Test fetch</Button>
      </div>
    );
  }

  public handleOnClick(event: any): void {
    fetch('http://localhost:3000/hello.txt')
      .then(function (res) {
        return res.text();
      }).then(function (body) {
        window.alert(body);

      });
  }




}

export default TestFetch; 