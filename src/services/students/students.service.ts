import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { CreateStudentPayload, GetStudent } from "../../app/models/students.model";

@Injectable()
export class StudentsService {
  private readonly http = inject(HttpClient);
  private readonly STUDENTS_API = "http://localhost:3000/students";

  async getStudents(): Promise<GetStudent[]> {
    const response = await firstValueFrom(
      this.http.get<GetStudent[]>(`${this.STUDENTS_API}`)
    );
    return response ?? [];
  }

  async createStudent(student: CreateStudentPayload): Promise<GetStudent> {
    const response = await firstValueFrom(
      this.http.post<GetStudent>(`${this.STUDENTS_API}`, student)
    );
    return response;
  }

  async deleteStudent(studentId: string): Promise<void> {
    await firstValueFrom(
      this.http.delete<void>(`${this.STUDENTS_API}/${studentId}`)
    );
  }
}
