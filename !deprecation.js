const processEmitWarning = process.emitWarning;
process.emitWarning = (warning, ...args) => {
  if (args[0] !== 'Deprecation Warning') {
    processEmitWarning(warning, ...args);
  }
};