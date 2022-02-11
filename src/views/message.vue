<template>
<div>
  <subNav></subNav>
  <div class="box wp">
    <div class="top">
      <input type="text" placeholder="您的名字" v-model="userForm.messageName">
      <input type="text" placeholder="手机号码" v-model="userForm.messagePhone" >
      <input type="text" placeholder="QQ/微信"  v-model="userForm.messageWechat">
    </div>
    <textarea placeholder="留言内容"  v-model="userForm.messageContext">
    </textarea>
    <button @click="sendMessage">发送咨询消息</button>
  </div>
</div>
</template>

<script>
import subNav from "@/components/subNav";
import {sendMessage} from "@/api/api";
export default {
  name: "message",
  data() {
    return {
      infoList: {
        title:'在线留言',
        path:'/message'
      },
      userForm:{
        messageName:'',
        messagePhone:'',
        messageWechat:'',
        messageContext:''
      }
    }
  },
  methods:{
    async sendMessage() {
        console.log(this.verify.falg)
        if (!this.verify.falg){
          this.$message.error(this.verify.msg)
          return
        }
        const res = await sendMessage(this.userForm)
        if (res.code === 200) {
          this.$message({
            message:'发送成功',
            type:'success'
          })
        }
    },
  },
  computed:{
    verify:function () {
      if(!this.userForm.messageName || !this.userForm.messageWechat || !this.userForm.messageContext){
        return {"falg":false,"msg":'内容不能为空'}
      }
      if(!/^1[3456789]\d{9}$/.test(this.userForm.messagePhone)){
        return {"falg":false,"msg":'手机号错误'}
      }
      return {"falg":true,"msg":'ok'}
    }
  },
  components:{
    subNav
  }
}
</script>

<style scoped lang="less">
.box {
  height: 500px;
  box-shadow: 0 0 15px #cccccc;
  margin-bottom: 115px;
  padding: 65px 100px 0;
  .top{
    display: flex;
    justify-content: space-between;
    input {
      width: 360px;
      height: 60px;
      border: 1px solid #cccccc;
      font-size: 21px;
      padding-left: 1em;
    }
  }
  textarea {
    margin-top: 25px;
    height: 165px;
    width: 100%;
    padding: 10px;
    border: 1px solid #cccccc;
  }
  button {
    height: 60px;
    width: 260px;
    background-color: #239bd8;
    border-radius: 15px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin: 50px 450px;
  }
}
</style>