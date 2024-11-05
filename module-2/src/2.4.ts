{
    //

// function with genarict
const creatArray =(param:string):string[]=>{
        return [param]
}

const creatArrayWithGenric=<T>(param:T):T[]=>{
    return [param]
}

const res1= creatArray('Bangladesh');
console.log(res1);


    //
}