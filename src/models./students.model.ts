export interface GetStudent {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  course: string;
  year_level: number;
  gap: number;
  enrollment_status: number;
  created_at: string;
}

export interface CreateStudentPayload {
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  course: string;
  year_level: number;
  gap: number;
  enrollment_status: string;
}