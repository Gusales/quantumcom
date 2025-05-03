import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/ui/button/button.component";
import { TimelineComponent } from "../../components/timeline/timeline.component";

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, TimelineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public title: string = "QuantumCom"
}
