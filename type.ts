// function process(value:number){
//     console.log("process",value)
// }
// function getValue(func:(key:number)=>void){
//     setTimeout(()=>{
//         func(500)
//     },2000)
//     return "Hello"
// }

// let t = getValue(process)


// function callback(value: number){
//     console.log('data is ',value)
// }
// function getValue(func:(e:number)=>void)
// {
//     setTimeout(()=>{
//         console.log('data is ready')
//         func(500)
//     },2000)

//     console.log('Return func')
// }

// let k = getValue(callback)


function add(a:string,b:string):string;
function add(a: number , b: number) : number;
function add(a:any , b : any){
    return a + b;
}
add(1,2);
add("hello", "str")

interface Animal{
    name :string
}

interface Bear extends Animal{
    honey : boolean
}

let bear : Bear = {
    name : 'bear',
    honey : true
}