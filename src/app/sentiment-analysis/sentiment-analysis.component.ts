import { Component } from '@angular/core';
import { SentimentAnalysisService } from '../services/sentiment-analysis.service';
import { Sentiment } from '../model';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent {
  text: string;
  lang: string;
  sentimentResult: Sentiment | null;

  constructor(private sentimentAnalysisService: SentimentAnalysisService) { 
    this.text = 'I really love your APIs!';
    this.lang = 'en';
    this.sentimentResult = null;
  }

  analyzeSentiment() {
    console.log('Text: ' + this.text);
    console.log('Language: ' + this.lang);
    this.sentimentAnalysisService.analyzeSentiment(this.text, this.lang).subscribe(
      result =>{
        console.log(result);
        this.sentimentResult = result.sentiment;
        // this.sentimentResult.score = -0.5;
      });
  }

  getSentimentColor(score: number): string {
    const normalized = (score + 1) / 2; // Normalizing the score to be between 0 and 1
    const red = Math.round(255 * (1 - normalized));
    const green = Math.round(255 * normalized);
    const blue = 0;
    return `rgb(${red}, ${green}, ${blue})`;
  }
}
