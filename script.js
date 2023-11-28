
function addHeader(){
      //get the header where all this will go
      const header = document.getElementById("header");

      let icon = document.createElement("img");
      icon.src = "./images/Word Logo.svg";
      icon.alt = "The word Rose, the 'o' is a simplified cat head.";
      icon.class = "logo";

      //Navigation
      let navi = document.createElement("nav");
      //links to the parts of the site
      let indexLink = document.createElement("a");
            indexLink.href = "./index.html";
            indexLink.innerHTML = "Home";
      let aboutMeLink = document.createElement("a");
            aboutMeLink.href = "./about me.html";
            aboutMeLink.innerHTML = "About Me";
      let galleryLink = document.createElement("a");
            galleryLink.href = "./gallery.html";
            galleryLink.innerHTML = "Gallery";
      //place them in the header
      header.appendChild(icon);
  	header.appendChild(navi); //navi floats to the right
      navi.appendChild(indexLink);
      navi.appendChild(aboutMeLink);
      navi.appendChild(galleryLink);
      console.log("header")
}

function addFooter(){
      const footer = document.getElementById("footer")
      const today = new Date()
      
      let copyrightText = document.createElement("p");
      copyrightText.innerHTML = "&copy;2023 Margaret Johnson. ";
      let contactLink = document.createElement("a");
      contactLink.href = "https://www.linkedin.com/in/margaret-johnson-450b06288/";
      contactLink.innerHtml = "Linkedin, ";
      let connectLink = document.createElement("a");
      connectLink.href = ""; //TODO
      connectLink.innerHTML = "Instagram. ";
      let toTop = document.createElement("p");
      toTop.href = "#header";
      toTop.innerHTML = "Top";

      //place them inside
      footer.appendChild(copyrightText);
      footer.appendChild(contactLink);
      footer.appendChild(connectLink);
      footer.appendChild(toTop);
      console.log("footer")
}
addHeader()
addFooter()