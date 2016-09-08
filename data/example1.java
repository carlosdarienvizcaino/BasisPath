
public void a(int a, int b, int c) {
// Comment     
  int i = a;
    while (i < 20) {
       
      if (i % 2 == 0) {
          i = i + b;
      } 
      else {
          i = i + c;
       }
         print("in loop");
         print("in loop 2");
     }  // end-while
     
      print(i);
      print(i+2);
}


