import * as React from 'react';
import { Button } from 'antd';
import { User } from '../../Models';

interface LoadButtonProps {
  loadButtonClick: (users: User[]) => void;

  users: User[];
}

class LoadButton extends React.Component<LoadButtonProps> {
  render() {
    return (
      <div>
        <Button onClick={this.onClick}>
          Click me for an ajax call
      </Button>
      </div>
    );
  }

  onClick() {
    this.props.loadButtonClick(this.props.users);
  }

  UserItemElement(user: User): JSX.Element {
    return (
      <div>
        {user.fullName}, {user.age}, {user.title}
      </div>);
  }

}

export default LoadButton;
