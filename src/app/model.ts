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

export interface Entity{
    id: string;
    title: string;
    start: number;
    end: number;
    confidence: number;
    spot: string;
    uri: string;
    label: string;
    categories: string[];
    image: Image;
    abstract: string;
}

export interface Image{
    full: string;
    thumbnail: string;
}

export interface EntityExtractionResult {
    timestamp: number;
    time: number;
    lang: string;
    annotations: Entity[];
}