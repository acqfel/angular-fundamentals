import { Injectable, Inject } from '@angular/core';
import { GitSearch } from './git-search';
import { GitUsers } from './git-users';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/operators';
//import { Observable } from 'rxjs/Observable';
import { Observable, throwError } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/publishReplay';
import { catchError, retry } from 'rxjs/operators';



@Injectable()
export class GitSearchService {
  // to Promise
  // cachedSearches: Array<{
  //   [query: string]: GitSearch
  // }> = [];
  
  // cachedUsers: Array<{
  //     [query: string]: GitUsers
  // }> = [];
  
  // Observables
  cachedValue: string;
  
  cachedUsers: Array<{
      [query: string]: GitUsers
  }> = [];
  
  search: Observable<GitSearch>;
  
  constructor(private http: HttpClient) {
      
  }

  /*  //gitSearch using Promise
  gitSearch = (query: string): Promise<GitSearch> => {
    let promise = new Promise<GitSearch>((resolve, reject) => {
        if (this.cachedSearches[query]) {
            resolve(this.cachedSearches[query])
        }
        else {
            this.http.get('https://api.github.com/search/repositories?q=' + query)
            .toPromise()
            .then( (response) => {
                resolve(response as GitSearch)
            }, (error) => {
                reject(error);
            });
        }
    })
    return promise;
  }
  */
  
  
  gitUsers = (query: string): Promise<GitUsers> => {
    let promise = new Promise<GitUsers>((resolve, reject) => {
        if (this.cachedUsers[query]) {
            resolve(this.cachedUsers[query])
        }
        else {
            this.http.get('https://api.github.com/search/users?q=' + query)
            .toPromise()
            .then( (response) => {
                resolve(response as GitUsers)
            }, (error) => {
                reject(error);
            })
        }
    })
    return promise;
  }
  
  // gitSearch unsing Observable
  // publishReplay(1) tells RxJS to cache the most recent value
  // refCount() keeps the observable alive for as long as there are subscribers
  gitSearch : Function = (query: string) : Observable<GitSearch> => {
    if (!this.search) {
        this.search = this.http.get<GitSearch>('https://api.github.com/search/repositories?q=' + query)
        .pipe(
          retry(1) // retry a failed request up to 1 times
        );
        this.cachedValue = query;
    }
    else if (this.cachedValue !== query) {
        this.search = null;
        this.gitSearch(query);
    }
    return this.search;
  }
  
}