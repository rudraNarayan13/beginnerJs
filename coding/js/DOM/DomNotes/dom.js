// How to catch elements and attributes ? How to read edit inpu delete data in document?
// QuerySelector 
// appendChild
// Parent-child-sibling relation 
// Data extraction from dataBase and inject in document 
// ****CSS selectors ****      


// What is DOM? 
// ===============
// The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.Document Object Model (DOM) representation allows webpage or HTML source to be manipulated .The DOM is built using multiple APIs that work together.
//     The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts. 
//*DOM is not part of Js* .The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript.


// run this function when the document is loaded
window.onkeypress = (e) => {
    // create a couple of elements in an otherwise empty HTML page
    const heading = document.createElement("h1");// header space created like this <h1></h1>
    const headingText = document.createTextNode("Big Head!");// text writeen on memory.. not injected yet in document
    heading.appendChild(headingText);// being text added to h1 tag 
    document.body.appendChild(heading);// being h1 tag added to the document
    heading.id="head";
  //   headingText.replaceWith("hello");
    console.log(`operation 1's data :- ${e}`);
  };
  window.onclick = (e) =>{
      const h = document.getElementById(`head`)
    //   h.replaceWith(`Header has been changed on click`)
    h.remove();
      console.log(e);// in this function we are getting data of mouse click event
      
  }
//  const heading = document.querySelector("#header")
//  heading.innerHTML="hello"
//   const headingText = document.createTextNode("DomManupulationTutorial");
//   heading.appendChild(headingText);
window.onload = (
    (e)=>{
        const titel =document.createElement("title");
        const titelText= document.createTextNode("DOM MANIPULATION 1")
        document.head.appendChild(titel);
        titel.appendChild(titelText);
        console.log(e);
        // console.log(`Take time to load:${e.timeStamp}ms`);
        const divOne= document.createElement("div");
        const divText=document.createTextNode(`Take time to load:${e.timeStamp}ms`);
        document.body.appendChild(divOne);
        divOne.appendChild(divText);
        

    }
)
