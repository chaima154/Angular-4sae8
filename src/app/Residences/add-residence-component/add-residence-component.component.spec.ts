import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/app/Core/Models/residence';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence-component.component.html',
  styleUrls: ['./add-residence-component.component.css'],
})
export class AddResidenceComponent implements OnInit {
  residence: Residence = {
    id:'',
    name: '',
    address: '',
    status: 'Disponible',
    image: '',
  };
  isEditMode: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const residenceId = this.route.snapshot.paramMap.get('id');
    if (residenceId) {
      this.isEditMode = true;
      // Simuler la récupération de la résidence par son ID (utiliser un service dans un vrai cas)
      this.residence = {
        id: +residenceId,
        name: 'Nom existant',
        address: 'Adresse existante',
        status: 'Disponible',
        image: '',
      };
    }
  }

  saveResidence() {
    if (this.isEditMode) {
      alert('Résidence mise à jour avec succès !');
    } else {
      alert('Nouvelle résidence ajoutée avec succès !');
    }
    this.router.navigate(['/residences']); // Redirection après l'ajout ou la mise à jour
  }
}
