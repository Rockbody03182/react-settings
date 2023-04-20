module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      // 플러그인 옵션 설정
      {
        browsers: "> 2% in KR, defaults, not IE < 11",
        autoprefixer: { grid: "autoplace" }, // CSS Grid 활성화 [false, 'autoplace', 'no-autoplace']
      },
      "postcss-short",
      { prefix: "x", skip: "-" },
    ],
  ],
};
