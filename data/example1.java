
public void a(int a, int b, int c) {
     
  int i = a;
    while (i < 20) {
       
      if (i % 2 == 0) {
          i = i + b;
      } 
      else {
          i = i + c;
       }
         print("in loop");
     }  // end-while
     
      print(i);
}



