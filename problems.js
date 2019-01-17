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

 var all_lowercase = function(value)
 {
  return value.toLowerCase();
 };
 //all_lowercase(sentence);

 var othersent = all_lowercase(sentence).split();
 console.log(othersent);

 var some_uppercase = function uppercase(statement)
  {
   for (i=0; i<statement.length;i++)
   {
    if (i%2!=2)
     return statement.toUpperCase();
   }
 }
 console.log(othersent);
 console.log(some_uppercase(sentence));

 //
} //
 //

}