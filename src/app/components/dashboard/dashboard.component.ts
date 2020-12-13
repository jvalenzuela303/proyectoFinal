import { Component, OnInit, Input,Output ,EventEmitter, NgZone} from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
//import {Product} from '../../shared/models/product'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  //@Input() product: Product;
  //@Output() productClicked: EventEmitter<any> = new EventEmitter();


  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { }

}
