export interface NewReport {

    report: string;
    title: string;

}

export interface NewReportWithStudentId extends NewReport {
    student_id: string;
}