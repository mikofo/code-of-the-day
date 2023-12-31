function getReadmeTemplate(solutionCount, runtimeAverage, memoryAverage) {
  return `
# code-of-the-day

Each day I do a coding exercise a la leetcode. I decided to start recording them here including summary statistics and analysis.

Each day will have a markdown file with more detail along with a solution file.

# Running Statistics

I have completed ${solutionCount} problem${solutionCount === 1 ? "" : "s"}.

On average, my solutions have a better runtime than ${runtimeAverage}% of solutions.

On average, my solutions have more efficient memory usage than ${memoryAverage}% of solutions.
`;
}

module.exports = getReadmeTemplate;
