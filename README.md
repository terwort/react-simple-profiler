# React Simple Profiler

This tool is used to clearly explain which functions are taking so long to complete.

## Getting Started

```
npm install --save-dev react-simple-profiler
```

### Instructions

To use React Simple Profiler, its quite simple. Just import the component, and the record function to get started

```
import ReactSimpleProfiler, { record } from 'react-simple-profiler'
```

Place the ReactSimpleProfiler where you would like to see the results, and use the record function, as seen below, whenever you would like to record something!

```
record('A custom message goes here!', functionToRecord)
```

The record function will then run your function, as well as measure the amount of time it takes to run. Once it is done running the results will then be sent to the ReactSimpleProfiler component to be displayed, and that's it!
