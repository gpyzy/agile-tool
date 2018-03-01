import * as React from 'react';
import { Button } from 'antd';
import Part3State from './state';
import User from '../../Models/User';

interface Part3ButtonsProps {
  getUsersButtonClick: (part3: Part3State) => void;
  updateTokenButtonClick: (part3: Part3State) => void;
  part3: Part3State;
}
interface ResultAreaProps {
  users: User[];
  clickCount: number;
  token: string;
}

let counter = 0;

class Part3Buttons extends React.Component<Part3ButtonsProps> {
  render() {
    return (
      <div>
        <Button
          onClick={e => {
            this.props.getUsersButtonClick(this.props.part3);
          }}
        >
          Get users
        </Button>
        <Button
          onClick={e => {
            this.props.updateTokenButtonClick(this.props.part3);
          }}
        >
          Update token
        </Button>
        <ResultArea
          users={this.props.part3.data}
          clickCount={this.props.part3.clickCount}
          token={this.props.part3.token}
        />
      </div>
    );
  }
}

function ResultArea({ users, clickCount, token }: ResultAreaProps) {
  return (
    <div>
      <h2>User list</h2>
      {users.map(user => (
        <div key={counter++}>
          {user.fullName}, {user.title}, {user.age}
        </div>
      ))}
      <h2>Get users button click count: {clickCount}</h2>
      <h2>token value</h2>
      <div>In state: {token}</div>
      <div>In storages: {token}</div>
    </div>
  );
  // tslint:disable-next-line:semicolon
}

export default Part3Buttons;
