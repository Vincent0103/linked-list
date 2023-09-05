function linkedList() {
  this.nodeList = node();

  function append(value) {
    if (!this.nodeList.value) this.nodeList.value = value;
    else {
      let tmp = this.nodeList;
      while (tmp.nextNode != null) tmp = tmp.nextNode;
      tmp.nextNode = node(value);
    }
  }

  function prepend(value) {
    // console.log(this.nodeList);
    if (!this.nodeList.value) this.nodeList = node(value);
    else {
      const newNodeList = node(value, this.nodeList);
      this.nodeList = newNodeList;
    }
  }

  function size() {
    let tmp = this.nodeList;
    if (!tmp) return 0;
    let length = 1;
    while (tmp.nextNode) {
      length += 1;
      tmp = tmp.nextNode;
    }

    return length;
  }

  function head() {
    return this.nodeList.value;
  }

  function tail() {
    let tmp = this.nodeList;
    while (tmp.nextNode) tmp = tmp.nextNode;
    return tmp.value;
  }

  function at(index) {
    let nodeCount = 0;
    let tmp = this.nodeList;
    while (nodeCount < index) {
      tmp = tmp.nextNode;
      nodeCount += 1;
    }
    return tmp.value;
  }

  function pop() {
    let tmp = this.nodeList;
    if (!tmp.nextNode) this.nodeList = node();
    else {
      while (tmp.nextNode.nextNode) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = null;
    }
  }

  function contains(value) {
    let tmp = this.nodeList;
    while (tmp.nextNode) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }
    if (tmp.value === value) return true;
    return false;
  }

  function find(value) {
    let tmp = this.nodeList;
    let count = 0;
    while (tmp.nextNode) {
      if (tmp.value === value) return count;
      tmp = tmp.nextNode;
      count += 1;
    }
    if (tmp.value === value) return count;
    return null;
  }

  function toString() {
    let str = '';
    let tmp = this.nodeList;

    if (!tmp.value) return str = 'null';
    else str = `( ${tmp.value} )`;

    while (tmp.nextNode) {
      tmp = tmp.nextNode;
      str += ` -> ( ${tmp.value} )`;
    }

    if (!tmp.nextNode) {
      str += ' -> null';
    }

    return str;
  }

  return {nodeList: this.nodeList, append, prepend, size,
    head, tail, at, pop, contains, find, toString};
}

function node(value=null, nextNode=null) {
  return {value, nextNode};
}

const myLinkedList = linkedList();
myLinkedList.append('Hello!1!1!1');
myLinkedList.append('John');
myLinkedList.prepend('Ariel');
myLinkedList.append('Sarah');
console.log(myLinkedList.toString());