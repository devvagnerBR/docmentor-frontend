export interface SchoolInterface {
    id: string;
    name: string;
    cep: string;
    created_at: string;
}

export interface StudentDetailsInterface {

    birthday: string;
    created_at: string;
    id: string;
    name: string;
    parents: any[]; // Defina o tipo correto para os pais
    reports: any[]; // Defina o tipo correto para os relatórios
    school: SchoolInterface[]; // Defina o tipo correto para a escola
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