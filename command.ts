import {grep_case_sensitive, grep_case_insensitive, read_into_string} from './func';
 

// Function containing the main high-level logic
function main() {
    
    const query: String = process.argv[2];
    const filename: String = process.argv[3];
    const caseOption: String = process.argv[4];

    // reading file contents to string
    const file: String = read_into_string(filename);

    // Case sensitivity 
    if(caseOption) {
        grep_case_insensitive(query, file);
    } else {
        grep_case_sensitive(query, file);
    }

}


main();


/*
    Current State:

    Command structure set up, done procedurally may need to change to OOP or Data-Driven

    Commands curretnly print entire file, don't look for query inside


*/