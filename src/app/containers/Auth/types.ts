/* --- STATE --- */
export interface AuthState {
  authenticated: boolean;
  user: any;
  loading: boolean;
  error: boolean;
}

export type ContainerState = AuthState;
