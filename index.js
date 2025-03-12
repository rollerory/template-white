import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import prompts from "prompts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    const response = await prompts({
        type: "text",
        name: "projectName",
        message: "Enter project name:",
        initial: "my-app"
    });

    const projectName = response.projectName;
    const projectPath = path.resolve(process.cwd(), projectName);

    console.log(chalk.blue(`\nCreating project in ${projectPath}...`));

    if (fs.existsSync(projectPath)) {
        console.log(chalk.red("\nError: Folder already exists. Choose a different name."));
        process.exit(1);
    }

    fs.mkdirSync(projectPath, { recursive: true });
    execSync(`cp -r ${__dirname}/template/* ${projectPath}`, { stdio: "inherit" });

    // Remove unnecessary files
    fs.rmSync(path.join(projectPath, "index.js"));

    console.log(chalk.green("\nProject setup completed!\n"));
    console.log(chalk.yellow(`\nNext steps:`));
    console.log(chalk.cyan(`  cd ${projectName}`));
    console.log(chalk.cyan("  npm install"));
    console.log(chalk.cyan("  npm run dev"));
}

main().catch(err => console.error(chalk.red("Error:"), err));
