import { Component } from '@angular/core';
import { LanguageDetectionService } from '../services/language-detection.service';
import { DetectedLanguage } from '../model';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent {
  text: string;
  clean: boolean;
  languageResult: DetectedLanguage[];

  constructor(private languageDetectionService: LanguageDetectionService) { 
    this.text = 'I am a mighty pirate von Deutschland, kako se ti zoves?';
    this.clean = false;
    this.languageResult = [];
  }

  detectLanguage() {
    this.languageDetectionService.detectLanguage(this.text, this.clean).subscribe(result => {
      this.languageResult = result.detectedLangs;
    });
  }
}
