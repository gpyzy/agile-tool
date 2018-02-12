import * as React from 'react';
import { Button } from 'antd';
import { User } from '../../Models';
import { Part2State } from '../part2';

interface LoadButtonProps {
  loadButtonClick: (part2: Part2State) => void;
  part2: Part2State;
}

interface UserListProps {
  users: User[];
}

class LoadButton extends React.Component<LoadButtonProps> {
  render() {
    return (
      <div>
        <Button onClick={this.onClick}>Click me for an ajax call</Button>
        {<this.UserItemElementList users={this.props.part2.userList} />}
      </div>
    );
  }

  onClick = (event: React.FormEvent<{}>) => {
    this.props.loadButtonClick(this.props.part2);
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
