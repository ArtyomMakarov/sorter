class Sorter {

  constructor() {
      this.elements = [];
      this.comparator = (a, b) => a - b;
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
      const sortedArr = [];
      const sortedIndices = indices.sort((a, b) => a - b);

      for (let i=0, length = sortedIndices.length; i < length; i++) {
          sortedArr.push(this.elements[sortedIndices[i]]);
      }

      sortedArr.sort(this.comparator);

      for (let i=0, length = sortedIndices.length; i < length; i++) {
          this.elements[sortedIndices[i]] = sortedArr.shift();
      }
  }

  setComparator(compareFunction) {
      this.comparator = compareFunction;

  }
}



module.exports = Sorter;