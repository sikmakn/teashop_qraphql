export interface IClientCreate {
    phoneNumber: string
    email?: string
}

export interface IClientUpdate {
    id: string
    phoneNumber?: string
    email?: string
}