export interface SchoolInterface {
    cep: string
    created_at: string
    id: string
    name: string
}

export interface UserInterface {

    created_at: string
    username: string
    email: string
    id: string
    job: string
    name: string
    phone_number: string
    profile_img: string
    schools: SchoolInterface[]

}