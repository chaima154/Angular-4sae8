import { Component } from '@angular/core';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  searchAddress: string = '';
  visibility= false;
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpeg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpeg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/R4.jpeg", status: "En Construction"}
    ];

    
  
    showLocation(R :Residence){
      if(R.address==='inconnu')
        alert(' adress inconnu')
      else
     {
      this.visibility=true
     }

    }
    favorites: Residence[] = [];
  
    addToFavorites(residence: Residence): void {
      if (!this.favorites.includes(residence)) {
        this.favorites.push(residence);
        alert(`${residence.name} a été ajouté aux favoris !`);
      } else {
        alert(`${residence.name} est déjà dans vos favoris.`);
      }
    }
  
    // Fonction pour filtrer les résidences
    getFilteredResidences(): Residence[] {
      if (!this.searchAddress.trim()) {
        return this.listResidences;
      }
      return this.listResidences.filter((residence) =>
        residence.address.toLowerCase().includes(this.searchAddress.toLowerCase())
      );
    }

}
