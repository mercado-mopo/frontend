import { Component } from "@angular/core";
import { FooterNavigationComponent } from "../../shared/footer-navigation/footer-navigation.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register-revenue',
  imports: [FooterNavigationComponent, RouterLink],
  templateUrl: './register-revenue.component.html',
  styleUrl: './register-revenue.component.scss',
  standalone: true
})
export class RegisterRevenueComponent{}