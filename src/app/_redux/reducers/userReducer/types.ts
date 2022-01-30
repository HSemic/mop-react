import { userTypes } from '../../actiontypes/userTypes';

export interface UserApiData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserData {
  firstName: string;
  lastName: string;
}

export interface UserState {
  pending: boolean;
  loggedInUser: UserApiData | null;
  userList: { [id: string]: UserData };
  error: string | null;
}

export interface FetchUserByEmailAndValidateSuccessPayload {
  user: UserApiData;
}

export interface FetchUserByEmailAndValidateFailurePayload {
  error: string;
}

export interface FetchUserByEmailAndValidateRequest {
  type: typeof userTypes.FETCH_USER_BY_EMAIL_AND_VALIDATE_REQUEST;
  email: string;
  password: string;
}

export interface FetchUserByEmailAndValidateSuccess {
  type: typeof userTypes.FETCH_USER_BY_EMAIL_AND_VALIDATE_SUCCESS;
  payload: FetchUserByEmailAndValidateSuccessPayload;
}

export interface FetchUserByEmailAndValidateFailure {
  type: typeof userTypes.FETCH_USER_BY_EMAIL_AND_VALIDATE_FAILURE;
  payload: FetchUserByEmailAndValidateFailurePayload;
}

export interface FetchUserListSuccessPayload {
  userList: { [id: string]: UserData };
}

export interface FetchUserListFailurePayload {
  error: string;
}

export interface FetchUserListRequest {
  type: typeof userTypes.FETCH_USERLIST_REQUEST;
}

export type FetchUserListSuccess = {
  type: typeof userTypes.FETCH_USERLIST_SUCCESS;
  payload: FetchUserListSuccessPayload;
};

export type FetchUserListFailure = {
  type: typeof userTypes.FETCH_USERLIST_FAILURE;
  payload: FetchUserListFailurePayload;
};

export type UserAction =
  | FetchUserListRequest
  | FetchUserListSuccess
  | FetchUserListFailure
  | FetchUserByEmailAndValidateRequest
  | FetchUserByEmailAndValidateSuccess
  | FetchUserByEmailAndValidateFailure;
