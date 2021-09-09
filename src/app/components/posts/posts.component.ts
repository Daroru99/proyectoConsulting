import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  {

  title = 'ejercicioConsulting';
  pageSize = 1000;
  pageSizeOptions = [50, 100, 500, 1000];
  desde:number = 0;
  hasta:number = 1000;
  filterPost = '';
  items = [];

  @Input() contacto: any = null;
  @Output() cerrar = new EventEmitter();
  constructor(private _service: ServiceService){
    this.getData();
  }


  cambiarpagina(e:PageEvent){
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  getData(){
    this._service.getData().subscribe(
      response => {
        this.items = response.data;

      },
      error => {
        console.log('error', error);
      }
    );
  }

  onClick(contacto: any){
    this.contacto = contacto;
  }
  
  onCerrar(){
    this.cerrar.emit();
  }

  cerrarDetalles(){
    this.contacto = null;
  }

}
