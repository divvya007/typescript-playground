import { Type } from "typescript";

let array: number[] = [1,2,3,4,5,6,7];
// slice array 
// export const numberFunction = <Type>(arr:Type[]):Type | number[] =>  {
// return 


// } 

export function toStr<Type, Type2>(p: Type, p2: Type2): void{
    console.log(p,p2)
}

toStr(3, 3);
toStr("str", 3);
toStr<Object, number>({},1);

