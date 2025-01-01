# Unexpected Multiple Executions of useEffect with Empty Dependency Array in React Native

This repository demonstrates a common, yet subtle, issue in React Native development involving the `useEffect` hook. When using an empty dependency array (`[]`), the effect is expected to run only once upon mounting.  However, due to React's optimization and re-rendering processes, it may execute multiple times, leading to unexpected side effects and potential performance problems.  The example illustrates this problem and shows a solution to ensure the effect runs only once.

## Problem
The `UnexpectedMultipleuseEffect.js` file showcases the issue: the console log will show multiple executions during the initial mount.

## Solution
The `UnexpectedMultipleuseEffectSolution.js` file provides a solution to enforce a single execution. This is achieved by using a `mounted` state variable to control the effect's execution.