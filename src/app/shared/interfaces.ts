export interface User {
    name: string,
    email: string,
    password: string,
}

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}