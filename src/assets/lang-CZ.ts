import {Lang} from "./lang";

export class LangCZ implements Lang {

  private map = new Map<string, string>();

  constructor() {
    this.map["app.home.text1"] = "app.home.text1 CZ";
    this.map["app.home.text2"] = "app.home.text2 CZ";
    this.map["app.home.text3"] = "app.home.text3 CZ";
    this.map["app.home.text4"] = "app.home.text4 CZ";
    this.map["app.people.text1"] = "app.people.text1 CZ";
    this.map["app.people.text2"] = "app.people.text2 CZ";
    this.map["app.people.text3"] = "app.people.text3 CZ";
    this.map["app.people.text4"] = "app.people.text4 CZ";
    this.map["app.person.text1"] = "app.person.text1 CZ";
    this.map["app.person.text2"] = "app.person.text2 CZ";
    this.map["app.person.text3"] = "app.person.text3 CZ";
    this.map["app.person.text4"] = "app.person.text4 CZ";
  }

  getByKey(key: string): string {
    return (this.map[key]) ? this.map[key] : key;
  }
}
