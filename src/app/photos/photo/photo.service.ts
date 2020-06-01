import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo';

const path = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) { }

    listByUser(name: string) {
        return this.http.get<Photo[]>(`${path}${name}/photos`);
    }

    listByUserPaginator(name: string, page: number) {
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Photo[]>(`${path}${name}/photos`, { params });
    }

}
