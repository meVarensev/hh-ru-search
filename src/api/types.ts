export interface Data {
    alternate_url: string;
    id: string;
    area: {
        id: string;
        name: string;
    };
    salary: {
        from: number;
        to: number;
        currency: string;
        gross: boolean;
    };
    type: {
        id: string;
        name: string;
    };
    experience: {
        id: string;
        name: string;
    };
    schedule: {
        id: string;
        name: string;
    };
    employment: {
        id: string;
        name: string;
    };
    department: any;
    contacts: any;
    description: string;
    key_skills: {
        name: string;
    }[];
    professional_roles: {
        id: string;
        name: string;
    }[];
    employer: {
        id: string;
        name: string;
    };
    published_at: string;
    created_at: string;
    initial_created_at: string;
}


export interface Area {
    id:   string;
    name: string;
    url:  string;
}

export interface BillingType {
    id:   string;
    name: string;
}

export interface Employer {
    id:                     string;
    name:                   string;
    url:                    string;
    alternate_url:          string;
    logo_urls:              null;
    vacancies_url:          string;
    accredited_it_employer: boolean;
    trusted:                boolean;
}

export interface KeySkill {
    name: string;
}

export interface Salary {
    from:     number;
    to:       number;
    currency: string;
    gross:    boolean;
}

export interface ResponseData {
    id:                           string;
    premium:                      boolean;
    billing_type:                 BillingType;
    relations:                    any[];
    name:                         string;
    insider_interview:            string | null;
    response_letter_required:     boolean;
    area:                         Area;
    salary:                       Salary;
    type:                         BillingType;
    address:                      string | null;
    allow_messages:               boolean;
    experience:                   BillingType;
    schedule:                     BillingType;
    employment:                   BillingType;
    department:                   string | null;
    contacts:                     string | null;
    description:                  string;
    branded_description:          string | null;
    vacancy_constructor_template: string | null;
    key_skills:                   KeySkill[];
    accept_handicapped:           boolean;
    accept_kids:                  boolean;
    archived:                     boolean;
    response_url:                 string | null;
    specializations:              any[];
    professional_roles:           BillingType[];
    code:                         string | null;
    hidden:                       boolean;
    quick_responses_allowed:      boolean;
    driver_license_types:         any[];
    accept_incomplete_resumes:    boolean;
    employer:                     Employer;
    published_at:                 string;
    created_at:                   string;
    initial_created_at:           string;
    negotiations_url:             string | null;
    suitable_resumes_url:         string | null;
    apply_alternate_url:          string;
    has_test:                     boolean;
    test:                         string | null;
    alternate_url:                string;
    working_days:                 any[];
    working_time_intervals:       any[];
    working_time_modes:           any[];
    accept_temporary:             boolean;
    languages:                    any[];
}
