import { IUser } from "../models/user.interface";

export const LIST_USER: IUser [] = [
    {"id":1,"name": "administrador","password": "123456", admin: true},
    {"id":2,"name": "User1","password": "123456", admin: false},
    {"id":3,"name": "User2","password": "123456", admin: false}
]