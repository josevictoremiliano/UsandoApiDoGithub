const app = document.getElementById('app');
const ul = document.querySelector('ul');

fetch('https://api.github.com/users/josevictoremiliano/repos')
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', repo.html_url);
            a.setAttribute('target', '_blank');
            a.innerText = repo.name;
            li.appendChild(a);
            ul.appendChild(li);
        });
    });

// dados do usuario

const user = document.getElementById('user');

fetch('https://api.github.com/users/josevictoremiliano')
    .then(response => response.json())
    .then(data => {
        const img = document.createElement('img');
        img.setAttribute('src', data.avatar_url);
        img.setAttribute('width', '100px');
        img.setAttribute('height', '100px');
        img.setAttribute('alt', 'avatar');
        user.appendChild(img);

        const p = document.createElement('h1');
        p.innerText = data.name;
        user.appendChild(p);

        const p2 = document.createElement('p');
        p2.innerText= "Repositorios publicos: " + data.public_repos;
        user.appendChild(p2);

        const btn = document.createElement('button');
        btn.innerText = 'Ver no github';
        btn.setAttribute('onclick', 'window.location.href = "https://github.com/josevictoremiliano"');
        user.appendChild(btn);
    });
