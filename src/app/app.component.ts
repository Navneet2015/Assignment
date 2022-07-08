import { Component, OnInit } from '@angular/core';
import{ GetapiService } from './getapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  title = 'assignment3';
  public apidata:any[]=[];//to store the incomming Api data
  public tableData:any='';//to store the data on click of navbar
  public tableShow:number=1;//variable to decide the display of table
  ids:number=0;//to store id and push it to apidata
  names:string='';//to store name and push it to apidata
  emails:string='';//to store email and push it to apidata
  designations:string='';//to store designation and push it to apidata
  //showForm:number=0;
  searchText:any;//for search filter

  constructor(private api:GetapiService) { }

  ngOnInit(){
    this.api.apiCall().subscribe((data)=>{
      console.warn("get api data",data);
      this.apidata=data
    })
    this.showAll();//to set all option for table display as default on initialization
  }
  setTableData(s:any)//function for table display for other than all option
  {
    this.tableData=s;
    this.tableShow=0;
  }
  showAll()//function for table display for all option
  {
    this.tableShow=1;
  }
  addData(id:any,name:any,email:any,designation:any)//to store data comming from modal and push it into apidata
  {
    this.ids=id;
    this.names=name;
    this.emails=email;
    this.designations=designation;
    this.apidata.push({id:this.ids,Name:this.names,Email:this.emails,Designation:this.designations});
    this.names='';
    this.emails='';
    this.designations='';
    //this.showForm=0;
  }
  /*displayForm()
  {
    this.showForm=1;
  }*/
}
