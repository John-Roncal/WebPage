import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../landing/pages/footer/footer.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
