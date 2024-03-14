import  {SdagIUser}  from './SdagIUser'

export interface SdagILogin {
    email: string;
    password: string;
}

export interface SdagIRespLogin {
    msg: string;
    status: number;
    user: SdagIUser,
    token: string;
}