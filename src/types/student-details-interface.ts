export interface SchoolInterface {
    id: string;
    name: string;
    cep: string;
    created_at: string;
}

export interface StudentReports {
    id: string;
    title: string;
    report: string;
    created_at: string;
    updated_at: string;
    student_id: string;
}

export interface ParentInterface {
    id: string;
    mother_name?: string;
    father_name?: string;
    phone_number1: string;
    phone_number2?: string;
    address: string;
    created_at: string;
}

export interface StudentDetailsInterface {

    birthday: string;
    created_at: string;
    id: string;
    name: string;
    parents: ParentInterface; // Defina o tipo correto para os pais
    reports: StudentReports[]; // Defina o tipo correto para os relatórios
    school: SchoolInterface; // Defina o tipo correto para a escola
    school_grade: string;
    service_days: string[];
    status: boolean;
    teacher: {
        id: string;
        name: string;
        email: string;
        password: string;
        username: string;
        // Adicione as outras propriedades do professor aqui
    };
    teacher_id: string;
    updated_at: string;
}