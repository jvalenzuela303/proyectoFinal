import { Component, OnInit, Input,Output ,EventEmitter, NgZone} from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import {Product} from '../../shared/models/product'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  products : Product[] = [{
    id: 1,
    imagen: 'assets/img/product/1.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente de 1kg ropa blanca y color',
    price: 3000,
  },
  {
    id: 2,
    imagen: 'assets/img//product/2.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
  {
    id: 3,
    imagen: 'assets/img//product/3.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
  {
    id: 4,
    imagen: 'assets/img//product/4.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
  {
    id: 5,
    imagen: 'assets/img//product/5.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
  {
    id: 6,
    imagen: 'assets/img//product/6.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
]
clickProduct(id: number){
  console.log("id es:" + id)

}

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { }

}
