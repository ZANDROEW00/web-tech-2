import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { GetStudent } from from '../../../models/students.model';
import { StudentsService } from from '../../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  imports: [CommonModule]
})

export class StudentsComponent implements OnInit {

  private readonly studentsService = inject(StudentsService);

  public students = signal<GetStudent[]>([]); 

  public async ngOnInit(): Promise<void> {
    const students = await this.studentsService.getStudents();
    this.students.set(students); 
  }

  public async deleteStudent(studentId: string): Promise<void> {
    try {
      await this.studentsService.deleteStudent(studentId);

      
      this.students.set(this.students().filter(student => student.id !== studentId));
    } catch (error) {
      console.error(error);
    }
  }
}