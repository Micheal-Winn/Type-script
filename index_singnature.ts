interface stringArray{
    [index : number] : string | number;
}

const myArray : stringArray = ["one","two",3]
const item = myArray["2"]
console.log("result", item)