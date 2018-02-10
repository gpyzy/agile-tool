import * as React from 'react';
import { Button } from 'antd';
import { User } from '../../Models';

interface LoadButtonProps {
  loadButtonClick: (users: User[]) => void;
  users: User[];
}

interface UserListProps {
  users: User[];
}

class LoadButton extends React.Component<LoadButtonProps> {
  render() {
    return (
      <div>
        <Button onClick={this.onClick}>Click me for an ajax call</Button>
        {<this.UserItemElementList users={this.props.users} />}
      </div>
    );
  }

  onClick = (event: React.FormEvent<{}>) => {
    this.props.loadButtonClick(this.props.users);
  // tslint:disable-next-line:semicolon
  };

  UserItemElement = ({ fullName, title, age }: User): JSX.Element => {
    return (
      <div>
        {fullName}, {age}, {title}
      </div>
    );
  // tslint:disable-next-line:semicolon
  };

  UserItemElementList = ({ users }: UserListProps) => {
    return (
      <div>
        {users.map(user => (
          <this.UserItemElement
            title={user.title}
            fullName={user.fullName}
            age={user.age}
          />
        ))}
      </div>
    );
  // tslint:disable-next-line:semicolon
  };
}

export default LoadButton;
