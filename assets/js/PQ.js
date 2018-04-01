class PQ{
  constructor(){
    this.data = [];
  }

  left(i){ return 2 * i + 1;}
  right(i) { return 2 * i + 2;}

  parent(i) { return (i - 1) / 2;}

  heapify(i){
    let l = this.left(i);
    let r = this.right(i);
    let n = this.data.length;
    let largest;
    if(l < n && this.data[l].getF() < this.data[i].getF()){
      largest = l;
    }else{
      largest = i;
    }

    if(r < n && this.data[r].getF() < this.data[largest].getF()){
      largest = r;
    }

    if(largest != i){
        let tmp = this.data[largest];
        this.data[largest] = this.data[i];
        this.data[i] = tmp;
        this.heapify(largest);
    }
  }

  make_heap(){
    let n = this.data.length;
    for(let i = (n - 2) / 2 ; i >= 0 ; i--){
      this.heapify(i);
    }
  }

  pop(){
    let tmp = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data[this.data.length  - 1] = tmp;
    let pop = this.data.pop();
    this.heapify(0);
    return tmp;
  }

  push(item){
    this.data.push(item)
    let i = this.data.length
    while(i >= 0 && this.data[this.parent(i)] < this.data[i]){
      let tmp = this.data[i];
      this.data[i] = this.data[this.parent(i)];
      this.data[this.parent(i)] = tmp;
      i = this.parent(i);
    }
  }

  sort(){
    let n = this.data.length - 1;
    while(n >= 0){
      console.log(this.pop())
      n--;
    }
  }
}
