export interface PhraseModel {
    id: number;
    korean: string;
    read: string;
    english: string;
    lao: string;
}
export interface WordModel {
    id: number;
    korean: string;
    read: string;
    english: string;
    lao: string;
    speech?: string;
    emoji?: string;
    examples?: PhraseModel[];
}

export interface PageList {
    image: string;
    korean: string;
    lao: string;
    route: string;
    slug: string;
    data: any;
}
