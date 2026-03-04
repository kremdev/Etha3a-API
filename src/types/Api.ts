/*
 * Etha3a – Quran & Azkar API
 * Copyright (c) 2026 RlxChap2 and kremdev
 * MIT License
 */

export type ApiFunction<T> = () => Promise<T[]>;

export interface Mp3QuranReciters {
    id: number;
    name: string;
    date: string;
    moshaf: {
        id: number;
        name: string;
        server: string;
    }[];
}

export interface Mp3QuranResponse {
    reciters: Mp3QuranReciters[];
}
