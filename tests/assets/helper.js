global.jsonize = function (json) {
	return JSON.parse(require("child_process").execSync(
        "jsonize --instance --register " + __dirname + "/../../index.js",
        { input: JSON.stringify(json) }
    ).toString());
};