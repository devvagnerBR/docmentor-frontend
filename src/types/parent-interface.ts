export interface ParentsInterface {

    id: string
    address: string
    father_name?: string
    mother_name?: string
    phone_number1: string
    phone_number2?: string
}

export interface ParentsWithParentId extends ParentsInterface {
    parentId: string;
}

export interface ParentsInterfaceWithStudentId {
    address: string
    phone_number1: string
    phone_number2?: string
    father_name?: string
    mother_name?: string
    studentId: string
}