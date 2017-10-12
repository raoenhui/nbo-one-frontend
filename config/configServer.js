var envs = [

  // 生产环境
  {
    active: true,
    one: 'http://localhost:8080'
  },
  // 测试环境
  {
    // active: true,
    one: 'http://183.66.65.223:8080'
  }
];

var env = envs[0];

for (var i in envs) {
  if (envs[i].active) {
    env = envs[i];
    break;
  }
}

module.exports = env;
