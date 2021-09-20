//toggle button
const toggleBtn = document.querySelector('.toggle-btn');
const linksContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linksContainer.classList.toggle('show');
});

//Links
const links = document.querySelectorAll('.link');

links.forEach((link) => {
	link.addEventListener('click', () => {
		links.forEach((ele) => ele.classList.remove('active'));
		link.classList.add('active');
	});
});

//creating dynamic project card
const projectContainer = document.querySelector('.project-container');

projects.forEach((project) => {
    const {name, tags, image} = project;
	projectContainer.innerHTML += `
        <div class="project-card" data-tags="#all, ${tags}">
            <img src="img/${image}" alt="">
            <div class="content">
                <h1 class="project-name">${name}</h1>
                <span class="tags">${tags}</span>
            </div>
        </div>
    `;
});

//filters
const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        let id = filterBtn.getAttribute('id');
        let projectsCards = document.querySelectorAll('.project-card');
        projectsCards.forEach( card => {
            if (card.getAttribute('data-tags').includes(id)) {
                card.classList.remove('hide');
            } else{
                card.classList.add('hide');
            }
        });

        filters.forEach( btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
    });
});

//contact forms
const contactBtn = document.querySelector('.contact-btn');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const msg = document.querySelector('.message');

contactBtn.addEventListener('click', () => {
    if (firstName.value.length && lastName.value.length && email.value.length && msg.value.length) {
        fetch('/mail', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                msg: msg.value,
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data);
        })
    }
});