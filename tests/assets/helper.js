global.jsonize = function (json) {
	var result = require("child_process").execSync(
        "jsonize --instance --register " + __dirname + "/../../index.js",
        { input: JSON.stringify(json) }
    ).toString().trim().split("\n").pop();
	return JSON.parse(result);
};