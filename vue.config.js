/*
 * @Author: lychen13
 * @Description: 
 * @FilePath: \scroll-number-card\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	pages: {
		index: {
			entry: "examples/main.js",
			template: "public/index.html",
			filename: "index.html",
			title: "数字滚动卡片",
		},
	},
});
