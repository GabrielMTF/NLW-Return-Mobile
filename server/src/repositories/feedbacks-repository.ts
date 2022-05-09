export interface FeedbackCreateData {
    type: string;
    coment: string;
    screenshot?: string;
}


export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
}