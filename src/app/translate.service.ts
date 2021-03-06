import {EventEmitter, Injectable} from '@angular/core';
import {Lang} from "../assets/lang";
import {LangCZ} from "../assets/lang-CZ";
import {LangEN} from "../assets/lang-EN";

const locales: string[] = [ "CZ", "EN" ];
type OnLocaleChanged = (locale: string) => any;

@Injectable()
export class TranslateService {

  private map = new Map<string, Lang>();
  private localChange: EventEmitter<string> = new EventEmitter();
  locale: string;

  constructor() {
    this.map["CZ"] = new LangCZ();
    this.map["EN"] = new LangEN();
  }

  translate(key: string): string {
    return this.map[this.getLocale().toUpperCase()].getByKey(key);
  }

  setLocale(locale: string) {
    this.locale = locale;
    this.localChange.emit(locale);
  }

  getLocale(): string {
    return this.locale;
  }

  getLocales(): string[] {
    return locales;
  }

  subscribe(callback: OnLocaleChanged): void {
    this.localChange.subscribe(callback);
  }

}
