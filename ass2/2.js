function marksgrade(marks)
{

switch (marks)
{
case (90<marks<=100):
  console.log("S grade");
  break;
case (80<marks<=90):
  console.log("A grade");
  break;
case (70<marks<=80):
  console.log("B grade");
  break;
case (60<marks<=70):
  console.log("C grade");
  break;
case (50<marks<=60):
  console.log("D grade");
  break;
case (40<marks<=50):
  console.log("E grade");
  break;
case (0<marks<=40):
    console.log("Student has failed");
    break;
default:
  console.log("Invalid marks");
}
}
var marks = parseInt(prompt('enter marks : '));
marksgrade(marks)