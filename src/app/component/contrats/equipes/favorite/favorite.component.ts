import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/model/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';
import {
  query,
  stagger,
  transition,
  trigger,
  animateChild,
  style,
  animate
} from "@angular/animations";
import { LoginService } from 'src/app/core/services/login.service';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  animations: [
    trigger("list", [
      transition(":enter", [query("@items", stagger(150, animateChild()))]),
      transition(":leave", [query("@items", stagger(-150, animateChild()))])
    ]),
    trigger("items", [
      // cubic-bezier for a tiny bouncing feel
      transition(":enter", [
        style({ transform: "scale(0.5)", opacity: 0 }),
        animate("1s ease-out", style({ transform: "scale(0.5)", opacity: 1 }))
      ]),
      transition(":leave", [
        style({ transform: "scale(1)", opacity: 1 }),
        animate("1s ease-in", style({ transform: "scale(0.5)", opacity: 0 }))
      ])
    ])
  ]
})
export class FavoriteComponent implements OnInit {
  public listE: Equipe[];
  public enabled: boolean = true;
  public visible: boolean = true;
  id : number;

  constructor(private equipeService : EquipeService , private loginservice: LoginService) {
    
   }

  ngOnInit(): void {
    if(this.loginservice.getUserRole()=="ADMIN"){
      this.equipeService.getAllfav().subscribe(
        (x:Equipe[])=>{
          this.listE = x;
        }
      )

    }
else{
  this.equipeService.getfavv(this.loginservice.getUser()["id"]).subscribe(

    (x:Equipe[])=>{
      this.listE = x;
    }
  )
}
   
  }

}
