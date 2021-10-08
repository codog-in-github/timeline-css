<template>
  <div class="container" ref="container">
    <div class="line" :style="{top:lineTop}">
      <div class="start" @click="changeYear()">&gt;</div>
      <div class="year" ref="year" :class="{focus : current === year}" v-for="year of years" :key="year" @click="changeYear(year)">{{year}}</div>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utils/common';
export default {
    props:{
      years:{
        type:Array,
        default:()=>[]
      },
      current:{
        type:String,
        default:''
      },
    },
    data(){
      return {
        centerHeight:0,
        itemHeight:30,
      }
    },
    computed:{
      lineTop(){
        if(this.current === ''){
          return this.centerHeight + 'px'
        }else{
          return this.centerHeight - (this.years.indexOf(this.current) + 1) * this.itemHeight + 'px'
        }
      }
    },
    methods:{
      changeYear(year){
        this.$emit('change',year || '')
      },

      wheelHandler(e){
        this.changeYear(this.years[this.years.indexOf(this.current) +(e.deltaY > 0?1:-1)])
      }
    },
    mounted(){
      document.body.onmousewheel= debounce(this.wheelHandler, this);  //chrome
      document.body.DOMMouseScroll = debounce(this.wheelHandler, this); //ff

      this.centerHeight = this.$refs.container.clientHeight / 2
      this.itemHeight = this.$refs.year[0].clientHeight
    },
    beforeDestroy(){
      document.body.onmousewheel= null; 
      document.body.DOMMouseScroll = null;
    }
}
</script>
<style lang="less" scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .line{
    border-right: 1px solid #fff;
    position: absolute;
    transition: top 1s;
  }

  .start{
    padding: 1em;
  }
  .year{
    padding: 1em;

    &::after{
      content: '';
      display: inline-block;
      width: .5em;
      height: .5em;
      background: #fff;
      position: relative;
      right: -1.3em;
      border-radius: .25em;
      box-shadow:0 0  2px 7px #ffffff55;
    }
  }
  .focus::after{
      box-shadow:0 0  2px 7px #0000ff55;
  }
}
</style>