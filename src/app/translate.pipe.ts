import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from "./translate.service";
import {Observable} from "rxjs/Observable";

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private ts: TranslateService) {
  }

  transform(value: string, args?: any): any {
    return Observable.create(observer => {
      observer.next(this.ts.translate(value));
      this.ts.subscribe(locale => observer.next(this.ts.translate(value)));
    });
  }

}
