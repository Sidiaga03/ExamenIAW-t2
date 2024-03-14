

export interface SdagIUser {
    id?: number;
    email: string;
    fullname: string;
    password: string;
    isActive?: boolean;
    roles?: string[];
}