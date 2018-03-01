import { User } from '../../Models';

export default interface Part3State {
    url: string;
    data: User[];
    clickCount: number;
    token: string;
}