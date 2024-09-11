module.exports = {
	plugins: {
		"postcss-import-url": {},
		"postcss-import": {},
		"postcss-easings": {},
		"tailwindcss/nesting": {},
		"postcss-preset-env": {
			stage: 0,
			features: {
				"logical-properties-and-values": false,
				"prefers-color-scheme-query": false,
				"gap-properties": false,
				"custom-properties": false,
			},
		},
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
	},
};
