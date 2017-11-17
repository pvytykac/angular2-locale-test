import {Lang} from "./lang";

export class LangEN implements Lang {

  private map = new Map<string, string>();

  constructor() {
    this.map["app.home.text1"] = "app.home.text1 EN";
    this.map["app.home.text2"] = "app.home.text2 EN";
    this.map["app.home.text3"] = "app.home.text3 EN";
    this.map["app.home.text4"] = "app.home.text4 EN";
    this.map["app.people.text1"] = "app.people.text1 EN";
    this.map["app.people.text2"] = "app.people.text2 EN";
    this.map["app.people.text3"] = "app.people.text3 EN";
    this.map["app.people.text4"] = "app.people.text4 EN";
    this.map["app.person.text1"] = "app.person.text1 EN";
    this.map["app.person.text2"] = "app.person.text2 EN";
    this.map["app.person.text3"] = "app.person.text3 EN";
    this.map["app.person.text4"] = "app.person.text4 EN";
  }

  getByKey(key: string): string {
    return (this.map[key]) ? this.map[key] : key;
  }

}
