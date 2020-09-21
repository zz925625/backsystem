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