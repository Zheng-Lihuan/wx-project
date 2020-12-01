<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
  @import url(./assets/scss/_reset.scss);
  @import url(./assets/scss/_normal.scss);

  #app {
    width: 100%;
    max-width: 7.5rem;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #EAEAEA; 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* .video-js {
    position: relative;
  }

  .video-js .vjs-big-play-button {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .video-js .vjs-big-play-button {
    line-height: 6em;
    height: 6em;
    width: 6em;
    border-radius: 100%;
    border: .2em solid #fff;
  }

  .video-js .vjs-big-play-button .vjs-icon-placeholder:before,
  .vjs-button>.vjs-icon-placeholder:before {
    text-align: center;
    font-size: 4em;
  } */
</style>