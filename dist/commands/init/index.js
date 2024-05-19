import inquirer from "inquirer";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { createProjectWithSyncEnabled, setUpANewMinimalProject, } from "./installations.js";
export const initProjectCreation = ({ repoName, }) => {
    const argv2 = yargs(hideBin(process.argv)).argv;
    inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "template_type",
            message: "What kind of project do you want?",
            choices: [
                { name: "a) Simple Hello World project ", value: "a" },
                {
                    name: "b) Connect to existing project at nanoapp.dev",
                    value: "b",
                },
            ],
        },
    ])
        .then((answers) => {
        if (answers != null && answers["template_type"] != null) {
            switch (answers["template_type"]) {
                case "a":
                    setUpANewMinimalProject({
                        repoName,
                        nanoversion: argv2["nano-version" /* COMMAND_ARGUMENTS.NANO_VERSION */],
                        reactNativeVers: argv2["react-native-version" /* COMMAND_ARGUMENTS.REACT_NATIVE_VERSION */],
                    });
                    break;
                case "b":
                    createProjectWithSyncEnabled({
                        projectName: repoName,
                        nanoversion: argv2["nano-version" /* COMMAND_ARGUMENTS.NANO_VERSION */],
                        reactNativeVers: argv2["react-native-version" /* COMMAND_ARGUMENTS.REACT_NATIVE_VERSION */],
                    });
                    break;
                default:
                    break;
            }
        }
    })
        .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
};
//# sourceMappingURL=index.js.map