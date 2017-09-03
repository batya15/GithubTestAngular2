import { IUser } from '../models/iuser';

export const FAKE_USER1: IUser = {
  login: 'mojombo',
  avatar: 'https://avatars0.githubusercontent.com/u/1?v=4',
  url: 'https://github.com/mojombo',
};

export const FAKE_USER2: IUser = {
  login: 'defunkt',
  avatar: 'https://avatars0.githubusercontent.com/u/2?v=4',
  url: 'https://github.com/defunkt',
};

export const FAKE_USERS: IUser[] = [
  FAKE_USER1,
  FAKE_USER2,
  FAKE_USER1,
  FAKE_USER2,
  FAKE_USER1,
  FAKE_USER2,
  FAKE_USER1,
  FAKE_USER2,
  FAKE_USER1,
  FAKE_USER2,
];
