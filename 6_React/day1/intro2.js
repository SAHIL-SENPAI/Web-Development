// HOW TO USE REACT  IN OUR CODE.
// 1. search "React cdn" (content delevery network);
// 2. copy both react and react DOM
// 3. past in your html file just like js script

// WHY WE HAVE DIFF FILES FOR REACT AND REACTDOM WHY NOT A SINGLE FILE?
// because react native devs also need react dom but they dont need react so we cant just heavy their load by doing that 
// all in a single file


// code is same as our previous file
const element = React.createElement("h1",{},'hello world');
reactDom.render(element,document.getElementById("root")); //This will show error but run

// error "no longer supported in react 18" reaseon same buttoon data load freez problem.
// solution.
const root = reactDom.createRoot(document.getElementById("root")) //we give access of root to reactdom using "createroot"
root.render(element);

// CDN (CONTENT DELEVERY NETWORK)
// . we put static data in cdn ----> images , videos , etc that will probably be same for long Time.
// . and changable data in Main servers ----> comments, like count count,followers.

// as main servers cant handel all the load like for youtube itll make many mini servers called  mirror servers to help



