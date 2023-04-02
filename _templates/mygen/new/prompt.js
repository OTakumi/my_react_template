// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
    {
        type: "select",
        name: "atomic",
        message: "Where's the directory?",
        choices: ["atoms", "molecules", "organisms", "templates", "pages"],
    },
    {
        type: "input",
        name: "component_name",
        message: "What's the component name?",
        validate: (input) => input !== "",
    },
    {
        type: "confirm",
        name: "require_storybook",
        message: "need storyfile?",
    }
]
