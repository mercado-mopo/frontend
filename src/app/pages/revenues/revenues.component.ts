import { RevenuesService } from './../../services/revenues.service';
import { Component, OnInit } from '@angular/core';
import { FooterNavigationComponent } from '../../shared/footer-navigation/footer-navigation.component';
import { RevenueModel } from '../../models/RevenueModel';
import { CardRevenueComponent } from "../../shared/card-revenue/card-revenue.component";
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-revenues',
  imports: [FooterNavigationComponent, NgFor, CardRevenueComponent, RouterLink],
  templateUrl: './revenues.component.html',
  styleUrl: './revenues.component.scss',
  standalone: true
})
export class RevenuesComponent implements OnInit {
  revenues!: RevenueModel[];
  errorMessage!: string;

  constructor(private revenuesService: RevenuesService) { }

  ngOnInit(): void {
    this.revenuesService.getRevenues().subscribe({
      next: (data) => {
        this.revenues = data;
      },
      error: (error) => {
        console.log('Erro ao buscar receitas:', error);
      },
      complete: () => {
        console.log('Requisicao de receitas finalizada.');
      }
    });
  }

}
