(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{2:function(e,t,n){e.exports=n("zUnb")},"3lBL":function(e,t){e.exports='<h1>\n  Oops! That page doesn\'t exist. Please select a link below.\n</h1>\n<nav>\n  <a routerLink="/" routerLinkActive="active">\n    <button>Home</button>\n  </a>\n  <a routerLink="/search" routerLinkActive="active">\n    <button>Search For Repositories</button>\n  </a>\n</nav>'},"7aDK":function(e,t){e.exports='<h3>{{title}} - {{displayQuery}}</h3>\n\n<form (ngSubmit)="sendQuery()" [formGroup]="form">\n  <div *ngFor="let key of modelKeys">\n        {{key}}<input placeholder="Enter {{key}} Here" formControlName="{{key}}" />\n  </div>\n  <button type="submit" [disabled]="!form.valid">Submit</button>\n  \n  \x3c!--<input name="query" placeholder="Enter Search Here" [(ngModel)]="searchQuery" />--\x3e\n  \x3c!--<button (click)="gitSearch()">Submit</button>--\x3e\n  \n</form>\n<br />\n\n<div *ngIf="searchResults; else elseBlock">\n  <h3 class="total">Total Results: {{searchResults.total_count}}</h3>\n  \n  <ul class="list">\n    <li [ngStyle]="{\'background-color\' : (i % 2 === 0) ? \'silver\' : \'white\'}" \n        class="list_item" \n        *ngFor="let result of searchResults.items; index as i;">\n      <a [href]="result.html_url">\n        <img class="avatar" [src]="result.owner.avatar_url" /> \n        <h4 class="title">{{result.name}} \n          <small> by {{result.owner.login | uppercase}}</small> \n        </h4>\n      </a> \n      <p class="description"> {{result.description}}</p>\n      <p> Created On: {{result.created_at | date:\'fullDate\'}} </p>\n    </li>\n  </ul>\n</div>\n<ng-template #elseBlock>Loading...</ng-template>\n'},A3xY:function(e,t){e.exports=""},CGgs:function(e,t){e.exports='<h1>\n  Welcome to the Angular Fundamentals Git Search!\n</h1>\n<nav>\n  <a routerLink="/search" routerLinkActive="active">\n    <button>Search For Repositories</button>\n  </a>\n</nav>'},M8Sw:function(e,t){e.exports=""},VN1M:function(e,t){e.exports=".total {\n    font-size:24px;\n}\n.list {\n    list-style-type: none;\n}\n.list_item {\n    border: 1px solid black;\n    height: 165px;\n    margin-top: 20px;\n    padding-top: 10px;\n    padding-left: 10px;\n}\n.avatar {\n    width:150px;\n    height:150px;\n    float:left;\n}\n.title {\n    font-size:20px;\n}\n.description {\n    font-size:18px;\n}\n.ng-valid  {\n    border: 2px solid #42A948; /* green */\n  }\n.ng-invalid:not(form)  {\n    border: 2px solid #a94442; /* red */\n}"},VziJ:function(e,t){e.exports=""},crnd:function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error('Cannot find module "'+e+'".');throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="crnd"},"nH/3":function(e,t){e.exports='<div style="text-align:center">\n  <router-outlet></router-outlet>\n</div>\n\n'},zUnb:function(e,t,n){"use strict";n.r(t);var r=n("CcnG"),o=n("ToYH"),i=n("ZYjt"),c=n("gIcY"),a=n("t/Na"),s=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(e){var t=this;this.http=e,this.cachedValues=[],this.cachedValues2=[],this.gitSearch=function(e){return new Promise(function(n,r){t.cachedValues[e]?n(t.cachedValues[e]):t.http.get("https://api.github.com/search/repositories?q="+e).toPromise().then(function(e){n(e)},function(e){r(e)})})},this.gitUsers=function(e){return new Promise(function(n,r){t.cachedValues2[e]?n(t.cachedValues2[e]):t.http.get("https://api.github.com/search/users?q="+e).toPromise().then(function(e){n(e)},function(e){r(e)})})}}return e=s([Object(r.A)(),l("design:paramtypes",[a.a])],e)}(),f=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(){function e(e){this.GitSearchService=e,this.title="GitHub Browser"}return e.prototype.ngOnInit=function(){this.GitSearchService.gitUsers("tom").then(function(e){},function(e){})},e=f([Object(r.n)({selector:"app-root",template:n("nH/3"),styles:[n("A3xY")],providers:[u]}),p("design:paramtypes",[u])],e)}(),d=n("ZYCi"),y=function(){return function(e,t,n,r,o,i){this.q=e,this.language=t,this.user=n,this.size=r,this.stars=o,this.topic=i}}(),m=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(){function e(e,t,n){var r=this;this.GitSearchService=e,this.route=t,this.router=n,this.formControls={},this.model=new y("","","",null,null,""),this.modelKeys=Object.keys(this.model),this.gitSearch=function(){r.GitSearchService.gitSearch(r.searchQuery).then(function(e){r.searchResults=e},function(e){alert("Error: "+e.statusText)})},this.sendQuery=function(){r.searchResults=null;var e=r.form.value.q,t="";r.modelKeys.forEach(function(e){if("q"===e)return!1;r.form.value[e]&&(t+="+"+e+":"+r.form.value[e])}),r.searchQuery=e,""!==t&&(r.searchQuery=e+"+"+t),r.displayQuery=r.searchQuery,console.log(r.form.value),r.gitSearch()},this.modelKeys.forEach(function(e){var t=[];"q"===e&&t.push(c.e.required),"stars"===e&&t.push(c.e.maxLength(4)),t.push(r.noSpecialChars),r.formControls[e]=new c.a(r.model[e],t)}),this.form=new c.b(this.formControls)}return e.prototype.noSpecialChars=function(e){return new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/).test(e.value)?{validateEmail:{valid:!1}}:null},e.prototype.ngOnInit=function(){var e=this;this.route.paramMap.subscribe(function(t){e.searchQuery=t.get("query"),e.displayQuery=t.get("query"),e.gitSearch()}),this.route.data.subscribe(function(t){e.title=t.title})},e=m([Object(r.n)({selector:"app-git-search",template:n("7aDK"),styles:[n("VN1M")]}),g("design:paramtypes",[u,d.a,d.b])],e)}(),v=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},O=function(){function e(){}return e.prototype.ngOnInit=function(){},e=v([Object(r.n)({selector:"app-home-page",template:n("CGgs"),styles:[n("M8Sw")]}),R("design:paramtypes",[])],e)}(),x=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(){function e(){}return e.prototype.ngOnInit=function(){},e=x([Object(r.n)({selector:"app-not-found",template:n("3lBL"),styles:[n("VziJ")]}),j("design:paramtypes",[])],e)}(),S=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},k=[{path:"",component:O},{path:"search",redirectTo:"/search/angular",pathMatch:"full"},{path:"search/:query",component:b,data:{title:"Git Search"}},{path:"**",component:w}],P=function(){function e(){}return e=S([Object(r.I)({declarations:[h,O,w,b],imports:[i.a,c.c,a.b,c.d,d.c.forRoot(k)],providers:[u],bootstrap:[h]})],e)}();Object(o.a)().bootstrapModule(P).catch(function(e){return console.log(e)})}},[[2,0,1]]]);
//# sourceMappingURL=main.js.map