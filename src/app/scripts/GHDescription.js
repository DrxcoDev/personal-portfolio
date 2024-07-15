export const gh = document.addEventListener("DOMContentLoaded", function() {
    const username = 'drxcodev'; // Cambia esto por el nombre de usuario de GitHub
    const repoName = 'optimus'; // Cambia esto por el nombre del repositorio de GitHub

    const url = `https://api.github.com/repos/${username}/${repoName}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const repoData = JSON.parse(xhr.responseText);
            const description = repoData.description;
            document.getElementById("repo-description").innerText = description || 'No hay descripción disponible.';
        } else if (xhr.readyState === 4) {
            document.getElementById("repo-description").innerText = 'Error al cargar la descripción.';
        }
    };

    xhr.send();
});
