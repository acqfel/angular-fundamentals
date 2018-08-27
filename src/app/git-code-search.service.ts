import { Injectable } from '@angular/core';
import { GitCodeSearch } from './git-code-search';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitCodeSearchService {

  cachedValue: string;    
  search: Observable<GitSearch>;

  constructor(private http: HttpClient) {
    
  }
  
  codeSearch : Function = (query: string) : Observable<GitCodeSearch> => {
    // Git Code Search is that it can only be performed on a single user, 
    // repository, or organization without authentication.
    // query to search through Angular's source code if there is no user specified.
    if (query.indexOf('user') <= -1) {
      query = query + '+user:angular';
    }
    if (!this.search) {
        this.search = this.http.get<GitCodeSearch>('https://api.github.com/search/code?q=' + query)
        .pipe(
          retry(1) // retry a failed request up to 1 time
        );
        this.cachedValue = query;
    }
    else if (this.cachedValue !== query) {
        this.search = null;
        this.codeSearch(query);
    }
    return this.search;
  }
}
