import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residences-details-component.component.html',
  styleUrls: ['./residences-details-component.component.css'],
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.residenceId = +this.route.snapshot.paramMap.get('id')!;
    // Vous pouvez utiliser un service pour récupérer les détails de la résidence
  }

  showNextResidence(): void {
    this.router.navigate(['/residences', this.residenceId + 1]);
  }
}
