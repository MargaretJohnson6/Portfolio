console.log("hello")
//load header info
function addHeader(){
      //get the header where all this will go
      const header = document.getElementById("header");

      let icon = document.createElement("img");
      icon.src = "./images/Word Logo.svg";
      icon.alt = "The word Rose, the 'o' is a simplified cat head.";
      icon.class = "logo";

      //Navigation
      let navi = document.createElement("nav");
      let navList = document.createElement("ul");
      //links to the parts of the site
      let indexLink = document.createElement("a");
      indexLink.href = "./index.html";
      indexLink.innerHTML = "Home";
      let aboutMeLink = document.createElement("a");
      aboutMeLink.href = "./about me.html";
      aboutMeLink.innerHTML = "About Me";
      let galleryLink = document.createElement("a");
      galleryLink.href = "./gallery.html";
      galleryLink.innerHTML = "Gallery"
      //place them
      header.appendChild(icon);
  	header.appendChild(navi);
      navi.appendChild(navList);
      navList.appendChild(indexLink);
      navList.appendChild(aboutMeLink);
      navList.appendChild(galleryLink);
}


//load footer info
function addFooter(){
      const footer = document.getElementById("footer")
      const today = new Date()
      //call functions
      
}
addHeader()
addFooter()