import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  modalRef: BsModalRef;
  empdata={
    description:'',
    designation:''
  }
 public myarr = [];

 public data:any; 
 public data2:any;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  constructor(
    private modalService: BsModalService
    
  ) { }

  ngOnInit() {
  }
  Save() {
    this.data=this.empdata.designation;
    this.data2=this.empdata.description;
    this.myarr.push(this.data);
    this.myarr.push(this.data2);
    this.empdata.designation = '';
    this.empdata.description = '';
    this.modalRef.hide();
  }
  Cancel(): void {
   
    this.modalRef.hide();
  }

}
