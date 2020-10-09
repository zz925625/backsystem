import Mock from 'mockjs'

const User = {
	name: 'admin',
	psw: "123"
}
Mock.mock('/api/user/logoin', 'post', (options) => {
	let { name, psw } = JSON.parse(options.body)
	if (name === User.name && psw === User.psw) {
		return Mock.mock({
			code: 1,
			msg: '登录成功'
		})
	} else {
		return Mock.mock({
			code: -1,
			msg: '用户名或密码错误'
		})
	}
})

var Userlist = [];
function InitUserlist() {
	for (let i = 0; i < 60; i++) {
		Userlist.push(Mock.mock({
			id: "@increment()",
			name: "@cname",
			sex: "@natural(0, 1)",
			age: "@natural(0, 100)",
			date: "@date()",
			address: "@county(true)"
		}))
	}
}
InitUserlist()
Mock.mock('/api/user/list', 'post', (option) => {
	let { search, pagenum, size } = JSON.parse(option.body);
	// 筛选查询    
	let filterList = Userlist.filter((index) => {
		return index.name.indexOf(search) > -1
	})


	// 分页效果  
	let start = (pagenum - 1) * size;
	let end = start + size

	let newList = filterList.slice(start, end)

	// return data里面的数据内容
	return {
		total: filterList.length,
		code: 1,
		list: newList
	}
})


Mock.mock('/api/user/del', 'post', (option) => {
	let { id } = JSON.parse(option.body);
	Userlist.forEach((index, a) => {
		if (index.id == id) {
			console.log(index, a)

			Userlist.splice(a, 1)
		}
	})

	return {
		code: 1, message: '删除成功'
	}
})