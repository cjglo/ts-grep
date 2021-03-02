import fs = require('fs');
import { readFileSync } from 'fs';

export function grep_case_sensitive(query: String, file: String) {

    // UNIMPLEMENTED
    // prints entire file

    console.log("\n debug: case sensitive \n");
    console.log(file);
    
}



export function grep_case_insensitive(query: String, file: String) {

    // UNIMPLEMENTED
    // prints entire file

    console.log("\n debug, not case sensitive! Case insensitive! \n");
    console.log(file);
    
}



export function read_into_string(filename: String) {

    // empty string used for casting buffer to string
    return "" + readFileSync('./' + filename);

}