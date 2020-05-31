import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {
       this.http = http;
    }

    listByUser(name: string) {
        return this.http.get<Response[]>(`http://localhost:3000/${name}/photos`);
    }

}