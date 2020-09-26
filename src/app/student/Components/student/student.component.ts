import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  showFlex : boolean = false;
  studentDetails : Array<any> = [];
  studentData : any;

  constructor(
    private studentService : StudentService
  ) { }

  ngOnInit() {

    this.studentService.getstudentData().subscribe(
      (response : any) => {
        this.studentDetails = response.data;
      }
    )

  }

  getStudentDetails(data){
    this.showFlex = true;
    this.studentData = data;
    
  }

}
