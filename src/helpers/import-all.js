export default requireContext => requireContext.keys().map((fileName) => {
  const fileContent = requireContext(fileName);

  // Handle both CommonJS and ES2015+ modules
  return fileContent.default || fileContent;
});
