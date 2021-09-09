import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() contacto: any = null;
  @Output() cerrar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onCerrar(){
    this.cerrar.emit();
  }

}
