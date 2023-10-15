import { Component } from '@angular/core';
import { TextSimilarityService } from '../services/text-similarity.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent {
  text1: string;
  text2: string;
  similarity: number;

  constructor(private textSimilarityService: TextSimilarityService) {
    this.text1 = 'Cameron wins the Oscar';
    this.text2 = 'All nominees for the Academy Awards';
    this.similarity = 0;
  }

  public calculateSimilarity(): void {
    this.textSimilarityService.calculateSimilarity(this.text1, this.text2).subscribe(similarityResult => {
      this.similarity = similarityResult.similarity;
    });
  }

}
