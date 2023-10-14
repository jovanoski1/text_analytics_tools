import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
  },
  {
    path: 'entityExtraction',
    component: EntityExtractionComponent,
  },
  {
    path: 'textSimilarity',
    component: TextSimilarityComponent,
  },
  {
    path: 'languageDetection',
    component: LanguageDetectionComponent,
  },
  {
    path: 'sentimentAnalysis',
    component: SentimentAnalysisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
