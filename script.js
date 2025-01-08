const outputDiv = document.getElementById("output");
const userInput = document.getElementById("user-input");

const systemStartTime = new Date();
let runningProcesses = ["chrome.exe", "cmd.exe", "explorer.exe"];

// Commands
const commands = {
    help: `
    Supported commands:
    - help: List all commands
    - dir: List directories and files
    - cls: Clear the terminal
    - echo [text]: Output the text
    - date: Show the current date and time
    - ver: Show version info
    - matrix: Start tech-themed Matrix effect
    - stop: Stop Matrix effect
    - mkdir [name]: Create a new directory
    - del [name]: Delete a file or directory
    - exit: Close the terminal simulation
    - ping [url]: Simulate pinging a website
    - ipconfig: Show simulated network config
    - uptime: Show system uptime
    - cpuinfo: Show CPU usage
    - meminfo: Show memory usage
    - diskinfo: Show disk usage
    - tasklist: List running processes
    - whoami: Display current user
    - fortune: Get a random fortune
    - ascii-art: Display fun ASCII art
    - hack: Simulate a hacking sequence`,
    dir: `Directory of C:\\\n\n01/06/2025  01:30 PM    <DIR>          Users\n01/06/2025  01:30 PM    <DIR>          Program Files\n01/06/2025  01:30 PM    <DIR>          Windows\n01/06/2025  01:30 PM               0   file.txt`,
    ver: `Windows Terminal Emulation - Version 2.1 (GitHub Pages)`
};

function getRandomPercentage() {
    return `${Math.floor(Math.random() * 100)}%`;
}

function executeCommand(input) {
    const args = input.split(" ");
    const cmd = args[0].toLowerCase();
    const params = args.slice(1).join(" ");

    switch (cmd) {
        case "help":
            appendOutput(commands.help);
            break;
        case "dir":
            appendOutput(commands.dir);
            break;
        case "cls":
            outputDiv.innerHTML = "";
            break;
        case "echo":
            appendOutput(params || " ");
            break;
        case "date":
            appendOutput(new Date().toString());
            break;
        case "ver":
            appendOutput(commands.ver);
            break;
        case "uptime":
            const uptime = Math.floor((new Date() - systemStartTime) / 1000);
            appendOutput(`System Uptime: ${uptime} seconds`);
            break;
        case "cpuinfo":
            appendOutput(`CPU Usage: ${getRandomPercentage()}`);
            break;
        case "meminfo":
            appendOutput(`Memory Usage: ${getRandomPercentage()}`);
            break;
        case "diskinfo":
            appendOutput(`Disk Usage: ${getRandomPercentage()}`);
            break;
        case "tasklist":
            appendOutput("Running Processes:\n" + runningProcesses.join("\n"));
            break;
        case "whoami":
            appendOutput("Current User: GitHub_User");
            break;
        case "fortune":
            const fortunes = ["You will have a great day!", "An adventure awaits you.", "Stay curious, my friend."];
            appendOutput(fortunes[Math.floor(Math.random() * fortunes.length)]);
            break;
        case "ascii-art":
            appendOutput(`
                /\_/\\
               ( o.o )
                > ^ <
            `);
            break;
        case "ping":
            appendOutput(`Pinging ${params}... Success`);
            break;
        case "ipconfig":
            appendOutput(`IPv4 Address: 192.168.1.100\nSubnet Mask: 255.255.255.0\nDefault Gateway: 192.168.1.1`);
            break;
        case "hack":
            appendOutput("Initializing hack...\nBypassing firewall...\nAccessing system...\nDone!");
            break;
        case "exit":
            appendOutput("Terminal session ended.");
            userInput.disabled = true;
            break;
        default:
            appendOutput(`'${cmd}' is not recognized as an internal or external command.`);
    }
}

function appendOutput(text) {
    const newLine = document.createElement("div");
    newLine.textContent = text;
    outputDiv.appendChild(newLine);
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const input = userInput.value.trim();
        appendOutput(`> ${input}`);
        executeCommand(input);
        userInput.value = "";
    }
});
