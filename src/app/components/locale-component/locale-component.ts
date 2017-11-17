import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TranslateService} from "../../translate.service";
import {RoutingService} from "../../routing.service";

@Component({
  selector: 'app-locale-component',
  templateUrl: './locale-component.html',
  styleUrls: ['./locale-component.css']
})
export class LocaleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rs: RoutingService, private ts: TranslateService) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.ts.setLocale(params['lang']));
  }

  getLocale(): string {
    return this.ts.getLocale();
  }

  getLocales(): string[] {
    return this.ts.getLocales();
  }

  isSelected(locale: string): boolean {
    return this.getLocale().toLowerCase() === locale.toLowerCase();
  }

  setLocale(event: MouseEvent, locale: string): void {
    event.preventDefault();
    if (!this.isSelected(locale)) {
      const url = this.rs.getRoute();
      this.ts.setLocale(locale);
      this.rs.routeByUrl(url);
    }
  }

}
