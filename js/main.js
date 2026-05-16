function collapseNav() {
    navb = document.getElementById("navBox");
    if (navb.classList.contains('hidden')) {
        navb.classList.add('block');
        navb.classList.remove('hidden');
    } else {
        navb.classList.remove('block');
        navb.classList.add('hidden');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split('/').pop();
    // Map of pages to nav link IDs
    const navLinks = {
        '': 'nav-home',
        'about': 'nav-about',
        'contact': 'nav-contact',
        'portfolio': 'nav-portfolio' // Add more pages as needed
    };

    // Load the navigation bar
    fetch('./pages/components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-id').innerHTML = data;
            window.scrollTo(0, 0);
            // Add 'active' class to the corresponding nav item
            if (navLinks[currentPage]) {
                document.getElementById(navLinks[currentPage]).classList.add('text-orange-600');
            }
        });

    // Load the footer
    fetch('./pages/components/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-id').innerHTML = data);

    var footer = document.getElementById('footer-id');
    if (document.body.scrollHeight <= window.innerHeight) {
        footer.classList.add('fixed');
        footer.classList.add('bottom-0');
        footer.classList.add('inset-x-0');
    }
});

/* TERMINAL COMMANDS */
document.addEventListener("DOMContentLoaded", async () => {

    const input = document.getElementById("terminalInput");
    const terminalBody = document.getElementById("terminalBody");

    let commands = {};

    // LOAD COMMANDS JSON
    try {

        const response = await fetch("./data/terminal-commands.json");
        commands = await response.json();

    } catch (error) {

        console.error("Failed to load terminal commands:", error);

    }

    input.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            const value = input.value.trim().toLowerCase();

            if (value === "") return;

            // COMMAND LINE
            const commandLine = document.createElement("div");

            commandLine.className = "terminal-line";

            commandLine.innerHTML = `
                <span class="prompt">visitor@portfolio:~$</span>
                <span class="command">${value}</span>
            `;

            terminalBody.insertBefore(commandLine, input.parentElement);

            // CLEAR COMMAND
            if (value === "clear") {

                const lines = terminalBody.querySelectorAll(
                    ".terminal-line, .terminal-response"
                );

                lines.forEach(line => {

                    if (!line.contains(input)) {
                        line.remove();
                    }

                });

                input.value = "";
                return;
            }

            // RESPONSE
            const responseDiv = document.createElement("div");

            responseDiv.className = "terminal-response";

            const commandData = commands[value];

            if (commandData) {

                responseDiv.textContent = commandData.response;

                // OPEN LINK TYPE
                if (commandData.type === "link") {

                    setTimeout(() => {
                        window.open(commandData.url, "_blank");
                    }, 500);

                }

            } else {

                responseDiv.textContent =
                    `command not found: ${value}`;

            }

            terminalBody.insertBefore(responseDiv, input.parentElement);

            input.value = "";

            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });
});