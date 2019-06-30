export class List {
  _id: string;
  _name: string;

  constructor(public id: string, public name: string) {
    this._name = name;
    this._id = id;
  }
}