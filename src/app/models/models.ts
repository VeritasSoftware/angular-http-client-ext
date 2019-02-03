export class RacingResponse {
    result: RacingItem[];
}

export class RacingItem {
    EventID: number;
    EventTypeDesc: string;
    EventName: string;
    AdvertisedStartTime: Date;    
    Venue: Venue;
}

export class Venue {
    Venue: string;
}

export enum EventType {
    Thoroughbred = 1,
    Trots = 2
}

export class Response {
    result: string;
}

export class APIException {
    ClassName: string;
}