const { execSync } = require('child_process');
const readline = require('readline');

const logo = `
${Beast}
╦ ┌─┐═ ─┐└─┐└┬┘
    With love!
    By: JUHINSOHAM
    [Version: v1]
`;

const Fore = {
    BLUE: "\x1b[34m",
    CYAN: "\x1b[36m",
    GREEN: "\x1b[32m",
    RED: "\x1b[31m",
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tools() {
    console.clear();
    console.log(logo);
    console.log(`${Fore.BLUE}
  [1] TheFatRat - TheFatRat is an exploiting tool which compiles a malware with famous payload, and then the compiled maware can be executed on Linux , Windows , Mac and Android
  
  [2] KitHack - Kithack is a framework designed to automate the process of downloading and installing different tools for penetration testing, with a special option that allows you to generate cross-platform backdoors using the Metasploit Framework.
  
  [3] Winpayloads - Generator of undetectable payloads in Windows.
  
  [4] Backdoor-Apk - Add a backdoor to any APK file
  
  [~] Soon more...
  
  [00] Back to main menu
  
  [99] Exit
  `);
    
    rl.question('\n>> ', (b) => {
        if (b === "1") {
            if (fs.existsSync('tools/TheFatRat')) {
                console.log(`${Fore.GREEN}\n[!] TheFatRat already exists!`);
                rl.question('\n[?] You want to run the tool [Y/n]: ', (ans) => {
                    if (ans.toLowerCase() === "y") {
                        execSync("bash tools/TheFatRat/fatrat");
                    } else if (ans.toLowerCase() === "n") {
                        tools();
                    } else {
                        console.log(`\n${Fore.RED}[!] Wrong option.`);
                        setTimeout(tools, 2000);
                    }
                });
            } else {
                console.log(`\n${Fore.CYAN}[~] Installing TheFatRat...`);
                execSync("git clone https://github.com/Screetsec/TheFatRat && mv 'TheFatRat' tools/ && chmod +x tools/TheFatRat/setup.sh && bash tools/TheFatRat/setup.sh");
                tools();
            }
        } else if (b === "2") {
            // Implement KitHack installation and execution logic here
        } else if (b === "3") {
            // Implement Winpayloads installation and execution logic here
        } else if (b === "4") {
            // Implement Backdoor-Apk installation and execution logic here
        } else if (b === "99") {
            exit();
        } else if (b === "00") {
            main();
        } else {
            console.log(`\n${Fore.RED}[!] Wrong option.`);
            setTimeout(tools, 2000);
        }
    });
}

// Define the 'gen' function and the rest of your JavaScript code here

// Implement the 'main' and 'check' functions here

// Call the 'check' function to start the script
check();
