export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IDToken {
  sub: number;
  firstName: string;
  lastName: string;
  email?: string;
  emails?: string[];
}