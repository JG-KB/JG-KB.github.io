document.querySelector("textarea").addEventListener("keyup", function() {
    const div = document.querySelector(".jaylenCoding")

    if (this.value !== "") {
        div.innerHTML = this.value;

        if(this.value.toLowerCase() === "about me") {
            window.location.href="aboutMe.html";                            }

        if(this.value.toLowerCase() === "github") {
            window.open("https://github.com/JG-KB", "_blank");
        }
        if(this.value.toLowerCase() === "linkedin") {
            window.open("https://www.linkedin.com/in/jaylen-guevara-kirksey-bey-098135165/", "_blank");
        }
        if(this.value.toLowerCase() === "email jaylen") {
            window.open("mailto:36jguevara@gmail.com", "_blank");
        }
        if(this.value.toLowerCase() === "projects") {
            window.location.href="projects.html";
        }
        if(this.value.toLowerCase() === "fun fact") {
            openModal();
        }
        }else{
            div.innerHTML= " Hello ! Type where you want to go! use the keywords located at the bottom of the page";
        }
    });
        
    //    myfunction();
    //    timeoutfunction();