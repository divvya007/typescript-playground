export class HelloWorld {
constructor(public message: string){
}
}

let hello = new HelloWorld("hello");
console.log(hello.message);

let myString: string = "this is a string";
console.log(myString)



function returnsString(a:string){
    return a;
}

let anotherString = returnsString("inside of returnsString fn");
console.log("anotherString:",anotherString)


console.log(returnsString("this is a function returned string"))

const numericValue: number = 1;

console.log(numericValue);

const SampleObj = {
name :"John",
lastName:"Doe"

}
console.log(SampleObj.name);

function getAllBooks(){
    let books = [{ name: "book1",available:true }, 
{ name: "book2",available:true }, { name: "book3",available:false }];
return books;
}

const getBooks = getAllBooks()
console.log(getBooks)

type Obj = { name: string, available: boolean }

function getFirstBook(books: Obj[]):void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = "";
     for(let currentBook of books){
         console.log("currentBook",currentBook)
         if(currentBook.available){
             firstAvailable = currentBook.name;
             break;
         }
     }
     console.log("totalNumberOfBooks:" + numberOfBooks);
     console.log("firstAvailable" + firstAvailable )
}
getBooks.push({name:"book4",available:false})
getFirstBook(getBooks);


enum Biography{
a,b,c,d

}
console.log("a",Biography.a);

enum Category{
    biography,
    poetry,
    fiction
}

const favoriteCategory:Category = Category.biography;

console.log(favoriteCategory);

console.log(Category[Category.biography]);

// let arrayOfString:string[] = ["hello","world"];
let arrayOfNum : number[]= [1,2,3];

console.log(arrayOfNum)
let newArrayOfString:any[]=[1,"this","is","array"];
console.log(newArrayOfString);

// tuples 
let myTuple : [number,string] = [0,"string"];
console.log(myTuple);




let firstElement = myTuple[0];
console.log(firstElement);
