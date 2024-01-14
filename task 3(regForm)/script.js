let submit = document.querySelector(".submit");

submit.addEventListener('click', () => {

    var output = document.querySelector(".output");
    console.log(output);
    let imageurl = document.querySelector("#img").value;
    var generatedurl = "img/photoimg.png";
    //console.log(generatedurl);



    //storing the data in objects getting from form
    const data = {
        name: document.getElementById("name").value,
        img: generatedurl,
        email: document.getElementById("email").value,
        year: document.getElementById("year").value,
        depart: document.getElementById("depart").value,
        project: document.getElementById("project").value,
        websitelink: document.getElementById("websitelink").value,
        skills: document.getElementById("skills").value
    };
    console.log(data);

    //Card Template
    let newlist = document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML = `
      <img src="${generatedurl}" alt="image">
      <div class="NameContainer">${data.name}</div>
      <a href="mailto:xyz55610@ieee.org">${data.email}</a><br>
      <div class="yearContainer">${data.year}</div>
      <div class="departContainer">${data.depart}</div>
      <div class="projectContainer">${data.project}</div>
      <a href="www.xyz.com">${data.websitelink}</a>
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
    //adding the card one after the other
    output.appendChild(newlist);

    //clearing the input fields after submission
    let input = document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
    });

})