export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
}

export interface Task {
    id?: number;
    name?: number;
    country?: Country;
    company?: string;
    date?: string;
    status?: string;
    representative?: Representative;
}