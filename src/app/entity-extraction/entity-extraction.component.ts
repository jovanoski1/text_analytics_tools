import { Component } from '@angular/core';
import { Entity } from '../model';
import { EntityExtractionService } from '../services/entity-extraction.service';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent {
  text: string;
  minConfidence: number;
  includeOptions: string[] = ['image', 'abstract', 'categories'];
  include: any;
  entities: Entity[];

  constructor(private entityExtractionService: EntityExtractionService) { 
    this.text = 'The doctor says an apple is better than an orange. Banana is yellow.';
    this.minConfidence = 0.2;
    this.entities = [];
    this.include = {};
    this.includeOptions.forEach(option => this.include[option] = true);
  }

  extractEntities() {
    // console.log(this.include);

    this.entityExtractionService.extractEntities(this.text, this.include, this.minConfidence).subscribe(
      result => {
        console.log(result);
        this.entities = result.annotations;
      });
  }
}
