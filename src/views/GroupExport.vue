<template>
  <div class="flex-center group-export-page">
    <div class="flex-center group-info-wrap">
      <img class="photo" src="../assets/img/photo.jpeg" alt="" srcset="">
      <div class="name">中国篮球新闻奖群</div>
      <div class="people">500人</div>
    </div>
    <div class="export-btn">
      <div class="flex-center content">
        <div class="hinit">“姚明”邀请你加入群聊</div>
        <div class="flex-center btn" @click="enterChat">加入群聊</div>
      </div>
    </div>
  </div>
</template>

<script>

import {changeTitle} from '../utils/utils'

export default {
  name: 'Home',
  components: {
    // WxHinit
  },

  data(){
    return {
      
    }
  },

  computed:{
    
  },

  created(){
    //修改标题
    changeTitle('群聊邀请')

  },

  mounted(){
    
  },

  methods:{
    enterChat(){
      this.$router.push({
        path:'/ChatContent'
      })
    }
  }

  
}
</script>

<style scoped>
  .group-export-page {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    color: #fff;
    box-sizing: border-box; 
    flex-direction: column;
  }

  .group-info-wrap {
    width: 100%;
    height: 4.5rem;
    background-color: #fff;
    color: #000;
    flex-direction: column;
  }


  .photo {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: .2rem;
  }

  .name {
    font-size: .38rem;
    padding: .3rem 0 .2rem;
  }

  .people {
    font-size: .3rem;
  }


  /* 按钮部分 */

  .export-btn {
    flex: 1;
    width: 100%;
    background-color: #F2F1F8;
    padding-top: 1rem;
    box-sizing: border-box;
    border-top: 1px solid #B3B3B3;
  }

  .content {
    width: 100%;
    flex-direction: column;
  }

  .hinit {
    font-size: .36rem;
    color: #000;
  }

  .btn {
    width: 3.8rem;
    height: .8rem;
    border-radius: .2rem;
    font-size: .3rem;
    color: #fff;
    background-color: #55BA36;
    margin-top: .3rem;
  }

</style>


