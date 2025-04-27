import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() variant: "primaria" | "secundaria" = "primaria"
  @Input() size: "sm" | "md" | "lg" = "md"
}
