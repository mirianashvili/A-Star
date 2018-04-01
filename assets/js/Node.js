class Node{
  constructor(parent,x,y){
    this.x = x;
    this.y = y;
    this.parent = parent;
    this.f = 0;
    this.g = 0;
    this.h = 0;
  }

  getF(){
    return this.f;
  }

  setG(g){
    this.g = g;
  }

  setF(f){
    this.f = f;
  }

  setH(h){
    this.h = h;
  }

  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }

  getG(){
    return this.g;
  }

  getH(){
    return this.h;
  }

  getParent(){
    return this.parent;
  }

  Equals(node){
    return this.getX() === node.getX() && this.getY() === node.getY();
  }
}
