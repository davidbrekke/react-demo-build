module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      { runtime: "automatic" },
    ] /* dont need to import react when only using jsx */,
  ],
};
