
(function () {
  let speed=5000 //加载进度展示时间
  let load_percent=0;//加载百分比
  
  let load_timer=setInterval(() => {
    load_percent++
    console.log('加载进度'+load_percent);
    if(load_percent>=100){
      load_percent=100
      clearInterval(load_timer)
      document.querySelector('#loading').style="display:none;"
    }
    document.querySelector('#loadPercent').innerHTML=`${load_percent}%`
    
  }, speed/100);
})();