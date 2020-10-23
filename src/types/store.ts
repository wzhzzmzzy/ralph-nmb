export interface GlobalState {
  editorVisible: boolean;
}

export interface UserState {
  token: string;
  cookies: string[];
  currentCookie: string;
}

export interface RootState {
  isMobile?: boolean;
}
