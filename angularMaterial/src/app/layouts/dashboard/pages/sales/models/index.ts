import { IProduct } from "../../products/models";
import { IUser } from "../../users/models";

export interface ISale{
    id: string;
    product : IProduct;
    buyer: IUser;
    quantity: number; 
}