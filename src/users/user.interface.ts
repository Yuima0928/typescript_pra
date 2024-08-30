export interface User {
    username : string,
    email : string,
    password: string,
    phoneNumber : string
}

export interface UnitUser extends User {
    id : string
}

export interface Users {
    [key : string] : UnitUser
}