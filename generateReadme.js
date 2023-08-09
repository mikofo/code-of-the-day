const fs = require("fs");
const { glob } = require("glob");
const getReadmeTemplate = require("./getReadmeTemplate");

let solutionCount = 0;
let runtimeTotal = 0;
let memoryTotal = 0;

glob("**/stats.json").then((files) => {
  // Loop through each stats file to get total statistics
  files.forEach((jsonFile) => {
    const data = fs.readFileSync(jsonFile, "utf8");
    const stats = JSON.parse(data);
    solutionCount += 1;
    runtimeTotal += stats.runtimePercentile;
    memoryTotal += stats.memoryPercentile;
  });

  const runtimeAverage = runtimeTotal / solutionCount;
  const memoryAverage = memoryTotal / solutionCount;

  const content = getReadmeTemplate(
    solutionCount,
    runtimeAverage,
    memoryAverage
  );

  // Write content to the markdown file
  fs.writeFile("./README.md", content, (err) => {
    if (err) {
      console.error("Error writing markdown file:", err);
      return;
    }
    console.log(`Readme was generated.`);
  });
});
