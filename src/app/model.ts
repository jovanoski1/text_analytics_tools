export interface TextSimilarityResult {
    similarity: number;
    language: string;
    time: number;
    langConfidence: number;
    timestamp: number;
}

export interface LanguageDetectionResult {
    timestamp: number;
    time: number;
    text: string;
    detectedLangs: DetectedLanguage[];
}

export interface DetectedLanguage {
    lang: string;
    confidence: number;
}