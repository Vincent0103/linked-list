function linkedList() {
  this.nodeList = node();

  function append(value) {
    if (!this.nodeList.value) this.nodeList.value = value;
    else {
      tmp = this.nodeList;
      while (tmp.nextNode != null) tmp = tmp.nextNode;
      tmp.nextNode = node(value);
    }
  }

  function prepend(value) {
    const newNodeList = node(value, this.nodeList);
    this.nodeList = newNodeList;
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

  return {nodeList: this.nodeList, append, prepend, size, head, tail, at};
}

function node(value=null, nextNode=null) {
  return {value, nextNode};
}

const myLinkedList = linkedList();
myLinkedList.append('Hello!1!1!1');
myLinkedList.append('John');
myLinkedList.prepend('Ariel');
myLinkedList.append('Sarah');
console.log(myLinkedList.at(3));
// myLinkedList.prepend('akr');