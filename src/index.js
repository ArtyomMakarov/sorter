class Sorter {

  constructor() {
      this.elements = [];
  }

  add(element) {
      this.elements.push(element);
  }

  at(index) {
      return this.elements[index];
  }

  get length() {
      return this.elements.length;
  }

  toArray() {
      return this.elements;
  }

  sort(indices) {
      this.index = [];
        for (var i=0; i<indices.length;i++) {
          this.index.push(this.elements[indices[i]]);
        }
      return this.index;
  }

  setComparator(compareFunction) {
      this.arr = [];

  }
}
var sorter = new Sorter();
sorter.add(7);
sorter.add(6);
sorter.add(5);
console.log(sorter.length);
console.log(sorter.toArray());
console.log(sorter.sort([0,2,1]));


module.exports = Sorter;