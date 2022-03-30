module.exports = {
    helpKey: helpfn
}

function helpfn() {
    console.log(`
                    List of All Commands:
                        1. node main.js help
                        2. node main.js tree "dirpath"
                        3. node main.js organize "dirpath"
    `);
}