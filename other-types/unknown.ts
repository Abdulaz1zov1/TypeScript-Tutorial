let value: unknown;

let value_1: unknown = value; // OK
let value_2: any = value; // OK
let value_3: boolean = value; // Error
let value_4: number = value; // Error
let value_5: string = value; // Error