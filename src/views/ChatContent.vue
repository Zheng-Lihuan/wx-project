<template>
  <div class="chat-content-page" id="infoPage" ref="infoPage" :class="{'autoHeight':isScroll}">
    <div class="group-people"><span class="color-blue">“姚明”</span>邀请你加入<span
        class="color-blue">“中国篮球新闻奖群”</span>，群聊参与人还有：姚明、徐济成、苏群、杨毅、范佳元、林德韧、王镜宇......</div>
    <div class="flex-center time">星期二 上午9:50</div>

    <div class="chat-list">
      <div v-for="(item,index) in current_list" :key="index">
        <!-- 左边对话列表 -->
        <div class="flex-center item-chat" v-if="item.position==1">
          <div class="flex-center l-item">
            <div class="chat-photo">
              <img class="photo" :src="item.photo" object-fit="cover" alt="">
            </div>
            <div class="content-wrap">
              <div class="chat-name">{{item.name}}</div>
              <div class="chat-info">

                <!-- 文字内容 -->
                <div class="txt-wrap" v-if="item.type==1">
                  <div class="p">{{item.content}}</div>
                  <div class="pub-arrow arrow"></div>
                </div>

                <!-- 图片 -->
                <div class="img-wrap" v-if="item.type==2"></div>

                <!-- 视频-->
                <div class="flex-center video-wrap" v-if="item.type==3" @click="playVideo(item.video)">
                  <div class="play-btn"></div>
                  <div class="video-time">10:00</div>
                </div>

                <!-- 链接 -->
                <div class="img-wrap link-wrap" v-if="item.type==4"></div>

                <!-- 红包-->
                <div class="img-wrap img-wrap2" v-if="item.type==5"></div>
              </div>
            </div>
          </div>
          <div class="r-item"></div>
        </div>

        <!-- 右边对话列表 -->
        <div class="flex-center item-chat right-content" v-else>
          <div class="r-item"></div>
          <div class="flex-center l-item">
            <div class="content-wrap right-content">
              <div class="chat-name">{{item.name}}</div>
              <div class="flex-center chat-info">

                <div class="txt-wrap" v-if="item.type==1">
                  <div class="p">姚明出现，</div>
                  <div class="pub-arrow arrow2"></div>
                </div>

                <!-- 图片 -->
                <div class="img-wrap" v-if="item.type==2">
                  <img class="img" :src="item.img" alt="" srcset="">
                </div>

                <!-- 视频-->
                <div class="flex-center video-wrap" v-if="item.type==3" @click="playVideo(item.video)">
                  <div class="play-btn"></div>
                  <div class="video-time">10:00</div>
                </div>

                <!-- 链接 -->
                <div class="img-wrap link-wrap" v-if="item.type==4"></div>

                <!-- 红包-->
                <div class="img-wrap img-wrap2" v-if="item.type==5"></div>

              </div>
            </div>
            <div class="chat-photo">
              <img class="photo" :src="item.photo" object-fit="cover" alt="">
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- 视频 -->
    <video class="video"
      poster="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2679588924,39093503&fm=26&gp=0.jpg"
      :class="{'show-video':show_video}" :src="video_url" controls autoplay></video>
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
        video_url: '',
        current_list: [], //当前展示的信息列表
        current_index: 0, //发送的消息索引
        video_list: [
          'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
          'https://v-cdn.zjol.com.cn/280443.mp4',
          'https://v-cdn.zjol.com.cn/276982.mp4',
          'https://v-cdn.zjol.com.cn/276984.mp4',
          'https://v-cdn.zjol.com.cn/276985.mp4'
        ],
        show_video: false, //展示视频
        isScroll:false,//是否可以滑动
        // type: 1 文字  2：图片 3：视频  4：链接 5：红包 6：小程序卡片
        // position: 1 左边  2 右边
        list: [{
            type: 1,
            position: 1,
            content: '我是文字内容',
            name: '昵称',
            photo: require("../assets/img/photo.jpeg"),
          },
          {
            type: 2,
            position: 1,
            img: require("../assets/img/photo.jpeg"),
            name: '昵称',
            photo: require("../assets/img/photo.jpeg"),
          },
          {
            type: 3,
            position: 1,
            img: require("../assets/img/photo.jpeg"),
            video: 'https://v-cdn.zjol.com.cn/280443.mp4',
            name: '昵称',
            photo: require("../assets/img/photo.jpeg"),
          },
          {
            type: 4,
            position: 1,
            img: require("../assets/img/photo.jpeg"),
            link: '',
            name: '昵称',
            photo: require("../assets/img/photo.jpeg"),
          },
          {
            type: 5,
            position: 1,
            name: '昵称',
            photo: require("../assets/img/photo.jpeg"),
          },
          {
            type: 1,
            position: 2,
            content: '我是文字内容',
            name: '昵称',
            photo: require("../assets/img/photo.jpeg"),
          },
          {
            type: 2,
            position: 2,
            // content: '我是文字内容',
            img: require("../assets/img/photo.jpeg"),
            name: '昵称',
            photo: require("../assets/img/photo.jpeg"),
          },
          {
            type: 3,
            position: 2,
            // content: '我是文字内容',
            img: require("../assets/img/photo.jpeg"),
            video: 'https://v-cdn.zjol.com.cn/276982.mp4',
            name: '昵称',
            photo: require("../assets/img/photo.jpeg"),
          },
          {
            type: 4,
            position: 2,
            img: require("../assets/img/photo.jpeg"),
            link: '',
            name: '昵称',
            photo: require("../assets/img/photo.jpeg"),
          },
          {
            type: 5,
            position: 2,
            name:'昵称',
            photo:require("../assets/img/photo.jpeg"),
          },
        ]

      }
    },

    computed: {

    },

    watch: {
      current_index() {
        this.$nextTick(() => {
          this.scrollToPageBottom();//滑动到页面底部
        })
      }
    },

    created() {
      //修改标题
      changeTitle('中国篮球新闻奖群')
      console.log('Math.random().toString(36)', Math.random().toString(36).substr(2, 15))
    },

    mounted() {

      this.addInfo();
    },

    methods: {
      //点击视频框播放视频
      playVideo(url) {
        this.video_url = url;
        // this.show_video=true;
        console.log('this.video_url', this.video_url);
        if (this.video_timer) {
          clearInterval(this.video_timer)
          this.video_timer = null;
        }
        this.video_timer = setTimeout(() => {
          document.querySelector('.video').play();
        }, 0);
      },

      //添加消息
      addInfo() {
        this.addInfoTimer=setInterval(() => {
          let current_index=this.current_index;
          current_index++
          // console.log('current_index',current_index);

          //发送的消息数大于消息数据列表
          if(current_index>this.list.length){
            console.log('消息发送完了');
            this.current_index=this.list.length;
            this.clearAddInfoTimer();
          }else {
            console.log('发送信息', current_index);
            this.current_index=current_index;
            this.current_list.push(this.list[current_index-1]);
          }
        }, 500);
      },

      //清楚添加消息定时器
      clearAddInfoTimer(){
        clearInterval(this.addInfoTimer)
        this.addInfoTimer=null
      },

      // 滑动网页到底部
      scrollToPageBottom(){
        let clientHeight=document.documentElement.clientHeight;//获取屏幕高度
        let scrollHeight = this.$el.querySelector('.chat-list').scrollHeight;//获取网页内容高度

        if(scrollHeight>clientHeight){
          console.log('移动');
          this.isScroll=true;
          this.scroll_timer=setTimeout(() => {
            window.scrollTo(0,scrollHeight);
            clearTimeout(this.scroll_timer);
            this.scroll_timer=null
          }, 0);
          
        }
      }

    }

  }
</script>


<style scoped>
  .chat-content-page {
    width: 100%;
    height: 100vh;
    /* background-color: #EAEAEA; */
    color: #000;
    padding-top: .5rem;
    box-sizing: border-box;
    flex-direction: column;
    padding: .2rem;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  .autoHeight {
    height: auto;
  }

  .group-people {
    width: 100%;
    border-radius: .1rem;
    font-size: .3rem;
    color: #fff;
    background-color: #ccc;
    padding: .1rem .2rem;
    box-sizing: border-box;
  }

  .color-blue {
    color: #3261B3;
  }

  .time {
    width: 2.4rem;
    height: .6rem;
    border-radius: .1rem;
    font-size: .3rem;
    background-color: #ccc;
    color: #fff;
    margin: .2rem auto 0;
  }

  .img-demo {
    position: relative;
    width: 3rem;
    height: 3rem;
    margin-bottom: .5rem;
    /* overflow: hidden; */
  }

  .img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: .1rem;
  }

  .video {
    position: fixed;
    top: 0;
    left: -1000px;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: block;
  }

  .show-video {
    left: 0;
  }


  /* 列表 */
  .chat-list {
    width: 100%;
  }

  .item-chat {
    width: 100%;
    margin-bottom: .3rem;
  }

  .l-item {
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: .35rem;
    color: #333;
    /* background-color: pink; */
  }

  .right-content {
    justify-content: flex-end;
  }

  .chat-photo {
    width: 1.14rem;
    height: 1.14rem;
    margin-right: .2rem;
    background: url('../assets/img/photo.jpeg') no-repeat center center;
    background-size: cover;
  }

  .photo {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: .1rem;
  }

  .content-wrap {
    flex: 1;
    text-align: left;
  }

  .chat-name {
    font-size: .26rem;
    color: #999;
    margin-bottom: .1rem;
  }

  /* 文字内容 */
  .txt-wrap {
    position: relative;
    border: 2px solid #999;
    border-radius: .1rem;
    padding: .2rem .3rem;
    background-color: #fff;
    display: inline-block;
  }

  .pub-arrow {
    position: absolute;
    top: .3rem;
    width: .2rem;
    height: .2rem;
    background-color: #fff;
    border: 2px solid #999;
    transform: rotate(45deg)
  }

  .arrow {
    left: -0.14rem;
    border-top-color: rgba(0, 0, 0, 0);
    border-right-color: rgba(0, 0, 0, 0);
  }

  /* 图片 */
  .img-wrap {
    display: block;
    width: 2rem;
    height: 2rem;
    background: url('../assets/img/photo.jpeg') no-repeat center center;
    background-size: cover;
    border-radius: .1rem;
  }

  /* 红包 */
  .img-wrap2 {
    width: 4.7rem;
    background: url('../assets/img/bg_hb.png') no-repeat center center;
    background-size: contain;
    margin-left: -0.1rem;
  }

  /* 视频 */
  .video-wrap {
    position: relative;
    width: 4rem;
    height: 3rem;
    background: url('../assets/img/photo.jpeg') no-repeat center center;
    background-size: cover;
    border-radius: .1rem;
  }

  .play-btn {
    width: 1rem;
    height: 1rem;
    background: url('../assets/img/btn_play.png') no-repeat center center;
    background-size: cover;
  }

  .video-time {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: .2rem;
    color: #fff;
    padding: .1rem .15rem;
  }

  /* 链接 */
  .link-wrap {
    width: 5rem;
    height: 2.1rem;
    border-radius: .1rem;
  }

  .r-item {
    width: 1.14rem;
    height: 1.14rem;
  }


  /* 右边消息 */
  .right-content .content-wrap {
    text-align: right;
  }

  .right-content .chat-photo {
    margin-left: .2rem;
  }

  .right-content .chat-info {
    justify-content: flex-end;
  }

  .arrow2 {
    right: -0.14rem;
    border-bottom-color: rgba(0, 0, 0, 0);
    border-left-color: rgba(0, 0, 0, 0);
  }
</style>