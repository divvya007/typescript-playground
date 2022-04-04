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

function getFirstBook(books:any):void {
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

console.log(Category[Category.biography])