const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(event);
        const input = document.querySelector("input#searchByID");
        console.log("input.value: ", input.value);

        // fetch("http://localhost:3000/movies")
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.textContent = data.title;
                summary.textContent = data.summary;
            });
    });
}

// NOTE:
// We can visit an individual object by specifying it within the fetch URL itself:
// Ex:
// This will produce the first object of the returned json output which is based upon the 'id' value (id: 1)
// http://localhost:3000/movies/1

document.addEventListener("DOMContentLoaded", init);

