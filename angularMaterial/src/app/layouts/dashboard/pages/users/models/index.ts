//Creamos una variable que contenga esto valores
export type UserRole = 'ADMIN' | 'USER';

//Definimos nuestra interfaz y los tipo de datos que van a utilizar las propiedades
export interface IUser{
    id: number;
    firstName : string;
    lastName : string;
    email : string;
    role: UserRole;
    createdAt : Date;
}

export interface CreateUserPayload {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    role: UserRole | null;
    createdAt: Date | null;
  }