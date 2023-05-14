function abdulazizov(value: string | number){
    if(typeof value == "string"){
        value    // Type string
    }else if(typeof value == "number"){
        value    // Type number
    }else{
        value.   // Type never
    }
}