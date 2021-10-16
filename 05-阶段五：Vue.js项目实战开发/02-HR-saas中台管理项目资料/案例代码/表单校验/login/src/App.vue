<template>
  <div id="app">
    <el-card class="login-card">
      <!-- 放置表单容器 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" style="margin-top:50px">
        <!-- 表单项 -->
        <el-form-item prop="mobile">
            <!-- 输入框 -->
            <el-input v-model="loginForm.mobile" placeholder="请输入您的手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <!-- 输入框 -->
            <el-input v-model="loginForm.password" placeholder="请输入您的密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="test">测试async</el-button>
      <el-button type="primary" @click="test1">测试async1</el-button>
      <el-button type="primary" @click="getCatch">捕获异常</el-button>

    </el-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data () {
    const checkMobile = function (rule, value, callback) {
      // 校验的是value
      // 第三位必须是9
      value.charAt(2) === "9" ? callback() : callback(new Error("手机号第三位必须是9"))
    }
    return {
      // 数据对象
      loginForm: {
        //  校验的字段
        mobile: '',
        password: '' 
      },
      // 校验规则
      // { key: value }
      loginRules: {
        mobile: [{ required: true, message: '手机号不能为空', trigger: 'blur' }, {
          trigger: 'blur',
          message: '手机号格式不正确',
          pattern: /^1[3-9]\d{9}$/  // 校验手机号
        }, {
          trigger: 'blur',
          validator: checkMobile
        }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' },{
          min: 6, max: 16, trigger: 'blur', message: '密码的长度为6-16位'
        }]
      }
    }
  },
  methods: {
    login () {
      // this.$refs.loginForm.validate(isOK => {
      //     if (isOK) {
      //       // 表示 校验是通过
      //       console.log("校验通过")  // 去做接下来的业务
      //     }
      // })
      // then是成功校验 catch是失败校验
      this.$refs.loginForm.validate().then(() => {
        console.log("成功")
      }).catch(() => {
        console.log("失败")
      })
    },
   async test () {
      // await后面跟上一个promise对象 总是会等到promise对象 resolve结束之后 接收它的结果 执行下面的逻辑
      // await必须和async配合使用  必须在await的父级函数的位置 标记一个async
     const result =  await new Promise(function(resolve){
          // 5秒之后执行resolve
          setTimeout(function() {
            resolve(100)
          }, 5000)
        })
       alert(result)
    },
  async test1() {
     await this.test() // 调用test方法 标记了async的方法是 异步的方法
      // 异步方法不会阻塞其他逻辑的执行
      alert(1234)
    },
   async getCatch() {
     try {
      const  result = await new Promise(function(resolve, reject) {
       reject("失败了")
     })
     alert(result)
     } catch (error) {
         alert(error)
     }
  }
  },

}
</script>

<style>
#app {
 width: 100%;
 height: 100vh;
 background-color: pink;
 display: flex;
 justify-content: center;
 align-items: center;
}
.login-card {
  width: 440px;
  height: 300px;
}
</style>
