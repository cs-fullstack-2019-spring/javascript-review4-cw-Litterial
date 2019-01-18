main();
function main()
{
 quest1();
 // quest2();
 // quest3();

 /*Write a JavaScript function that accepts a sentence of words all in lowercase, and returns every other word in all caps.
 Hint: see toUppercase() ex. ```in a galaxy far far away``` -> ```in A galaxy FAR far AWAY``` */
function quest1()
{
 var sentence= "I thought what I'd do was, I'd pretend I was one of those deaf-mutes.";

 var all_lowercase = function(value)   //creates a function that turns the string into all lowercase
 {
  return value.toLowerCase();
 };

 all_lowercase(sentence);   //calls function

 var othersent = all_lowercase(sentence).split(" ");   //splits the string into an array
 console.log(othersent);


 var upandlow =othersent.map(function(element,index){ //ues.map method to create a new array to alternate cases


  for (i=0;i<1;i++){              //index does not increment until the the for loop is complete. Then it will run the for-loop again
   if (index%2==1)                /// ex: (reads the first index of the array, "0" Then runs the for-loop once. reads next index then
    return(element.toUpperCase())  //restarts for-loop)
   else
    return(element);

  }

 })
 console.log(upandlow)







}
 // Write a JavaScript function that accepts a word in all lowercase or in all uppercase, and returns the word in the
 // opposite case. Hint: see toLowercase()
 //
 // ex. ```hello``` -> ```HELLO``` or ```HOWDY``` -> ```howdy```

function quest2()
{
 var sentence2= "I thought what I'd do was, I'd pretend I was one of those deaf-mutes.";

 function up_or_low(convert)

 {
  do{
   var choice = prompt ("Select 'u' for all uppercase or 'l' for all lowercase")
  }while (choice!= 'u' && choice!='q')

  if (choice='u') // changes all text to lowercase then uppercase
  {
   console.log(convert.toLowerCase());
   return (convert.toUpperCase())
  }

  else
  {
   console.log(convert.toUpperCase());// changes all text to uppercase then lowercase
   return (convert.tolowerCase())
  }
 }
 up_or_low(sentence2); // calls function
}

function quest3()
{
 var array = ["I", "thought", "what", "I'd", "do", "was,", "I'd","pretend", "I", "was", "one", "of", "those", "deaf-mutes."];
 var firstn= getfirstN(array,7);//uses index as an end point
 var lastn= getlastN(array,7);//uses index as an starting point

 function getfirstN(dummyarray,index) //function to list first n elements; uses the slice method to start at the first index
 {
  return dummyarray.slice(0,index)
 }

 function getlastN(dummyarray,index)  //function to list las n elements; uses slice method to start at the given index -1
 {                                    //(otherwise it leaves out that element) then counts all the way to the array length
   return dummyarray.slice((index-1),(dummyarray.length))
 }


}

}