module.exports = {
	devServer: {
		proxy: {
			//當請求地址中包含 expectlist ，就會走代理
			'/api': {
				//目标地址
				target: 'http://localhost:5512/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '', // rewrite path
				}
			},

		}
	},
}