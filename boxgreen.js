class boxgreen extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
    
    this.Visibility=255;
  }

  display()
  {
    if(this.body.speed>2.5)
    {
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
     /* tint(255,this.Visibility);
      var pos=this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height)*/
      pop();
    }
    else
    {
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
      super.display();
    }
  }

  
  score()
  {
    if(this.Visibility<0&&this.Visibility>-100)
    {
      score++
    }
  }
}
     