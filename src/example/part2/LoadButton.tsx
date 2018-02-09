import * as React from 'react';
import { Button } from 'antd';

interface LoadButtonProps {
  loadButtonClick: () => void;
}

class LoadButton extends React.Component<LoadButtonProps> {
  render() {
    return (
      <Button onClick={this.props.loadButtonClick}>
        Click me for an ajax call
      </Button>
    );
  }
}

export default LoadButton;
