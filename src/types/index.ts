// Root navigation params
export type RootStackParamList = {
    Landing: undefined;
    Login: undefined;
    Signup: undefined;
    MainTabs: undefined;
  };
  
  // Bottom Tab navigation params
  export type BottomTabParamList = {
    Events: undefined;
    Packages: undefined;
    Profile: undefined;
  };
  
  // User type
  export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string; // optional profile image URL
  }
  
  // Event type
  export interface Event {
    id: string;
    title: string;
    date: string; // ISO format date string
    location: string;
    description?: string;
  }
  
  // Package type
  export interface Package {
    id: string;
    name: string;
    price: number;
    description?: string;
  }
  
  // Auth state type
  export interface AuthState {
    isLoggedIn: boolean;
    user?: User;
    token?: string;
  }
  