let a:number = 20;
let b:string = "hello world";

console.log(a," ",b)



// show error 
// run this in powershell as administrator
// Set-ExecutionPolicy Unrestricted -Scope CurrentUser
// press Y

// tsc filename 
// new js file same name as ts file we be made
// file will run but show error in ts because we dont define the verion we are writing the code in
// we can either do this tsc filename --target es2016 everytime we run our file so that we are telling to use 2016's version for conversion or
// we can config this setting in it config file 
// run "tsc --init" new config file we be created
// config es2016 there
// why not latest version why 2016 , because it was a major update and many codebases now are 2016 verion and its
// very hectic to migrate the code(change from one version to another we cant just do it using ai we have to use manpower to rereade the code and convert to latest version)
// thats why 2016 version is the best aproach now.

// if you want changes to be at same time.
// tsc --watch 
// ctrl + c to exit watch mode