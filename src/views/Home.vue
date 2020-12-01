<template>
  <div class="home-page">
    <!-- 密码输入框 -->
    <div class="input-part">
      <div class="hinit-txt">{{hinit}}</div>
      <div class="flex-center password-wrap">
        <div class="flex-center p-item" v-for="(item,index) in p_list" :key="index">{{item}}</div>
      </div>
    </div>

    <!-- 键盘部分 -->
    <div class="flex-center keyborder-wrap">
      <div class="flex-center key-item" v-for="(item,index) in key_list" :key="index" @click="input(item)">{{item}}
      </div>
    </div>

    <div id="loading" class="loading" v-if="load_percent<100">
      <div class="pic">
        <!-- <div class="loading-gif"></div> -->
        <b id="loadPercent"> {{load_percent}}%</b>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    changeTitle
  } from '../utils/utils'

  export default {
    name: 'Home',
    components: {
      // WxHinit
    },

    data() {
      return {
        hinit: '输入0428，进入中国篮球新闻奖群', //密码提示语
        password: [], //密码
        key_list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'x'],
        load_percent: 0,
      }
    },

    computed: {
      p_list() {
        let p = ['o', 'o', 'o', 'o']
        p.forEach((ele, idx) => {
          if (this.password[idx]) {
            p[idx] = this.password[idx];
          }
        })
        return p
      }
    },

    created() {
      //修改标题
      changeTitle('2017标题')

    },

    mounted() {
      this.$nextTick(()=>{
        this.loadProgress(5)
      })
    },

    methods: {
      //输入密码
      input(str) {
        if (str == 'x') { //点击删除
          if (this.password.length > 0) {
            this.password.pop(str)
          }
        } else if (str.length > 0 && str != 'x') { //点击数字
          if (this.password.length < 4) {
            this.password.push(str)
          }
        } else if (str.length < 1) { //点击空白
          return
        }

        //检查是否输入正确密码
        if (this.password.length >= 4 && this.password.join() == "0,4,2,8") {
          this.$router.push({
            path: '/GroupExport',
          })
        }
      },

      //加载进度
      loadProgress(time) {
        let speed = time*1000 || 5000 //加载进度展示时间
        let load_timer = setInterval(() => {
          this.load_percent++
          // console.log('加载进度' + this.load_percent);
          if (this.load_percent >= 100) {
            this.load_percent = 100
            clearInterval(load_timer)
          }
        }, speed / 100);
      }
    },
  }
</script>

<style scoped>
  .home-page {
    width: 100%;
    /* max-width: 7.5rem; */
    height: 100vh;
    background-color: #1F2427;
    color: #fff;
    padding-top: .5rem;
    box-sizing: border-box;
  }

  .input-part {
    width: 100%;

  }

  .hinit-txt {
    font-size: .3rem;
    text-align: center;
  }

  .password-wrap {
    font-size: .3rem;
    margin-top: .3rem;
  }

  .p-item {
    width: .6rem;
    height: .6rem;
  }


  /* 键盘部分 */
  .keyborder-wrap {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    /* height: 5rem; */
    /* background-color: pink; */
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .key-item {
    width: 33.333%;
    height: 1rem;
    border: 1px solid #252A2D;
    box-sizing: border-box;
    font-size: .5rem;
  }


  .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #000;
    color: #fff;
    font-size: .24rem;
  }

  .loading .pic {
    width: 2.86rem;
    height: 5rem;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    text-align: center;
    line-height: 100px;
  }
</style>