<template>
<div class="container" :style="{ backgroundImage : 'url(' + background + ')' }" >
    <main>
        <div class="curmbs">公司概况 &gt; 发展历程</div>
        <div class="years index" :class="{ focus:currentYear === '' }">
            <h1 class="year">发展历程</h1>
            <div class="items">
                标语标语标语标语标语标语标语标语标语标语标语标语标语标语
            </div>
        </div>
        <div class="years" :class="{ focus:year === currentYear }" v-for="year in years" :key="year">
            <h1 class="year">—{{year}}</h1>
            <div class="items">
                <div class="item" v-for="(img, i) in yearData[year]" :key="i">
                    <div class="title">{{img.title}}</div>
                    <div 
                        class="img" 
                        :style="{
                            backgroundImage: 'url(' + img.img + ')'
                            }"
                        >
                    </div>
                </div>
            </div>
        </div>
    </main>
    <aside>
        <timeline :years="years" :current="currentYear" @change="yearChangeHander" />
    </aside>
</div>
</template>

<script>
import Timeline from './Timeline.vue'

const yearData = {
    '2021':[
        { 
            img:'/logo.png', 
            title:'标题' 
        },
        { 
            img:'/logo.png', 
            title:'标题' 
        },
    ],
    '2020':[
        { 
            img:'/logo.png', 
            title:'标题' 
        },
        { 
            img:'/logo.png', 
            title:'标题' 
        },
        { 
            img:'/logo.png', 
            title:'标题' 
        },
    ]
}
const indexBackgroundImage = '/bg1.jpg';

const backgroundImages = [
    '/bg2.jpg',
    '/bg3.jpg',
];

export default {
  components: { Timeline },
  data(){
      return{
          yearData,
          backgroundImages,
          indexBackgroundImage,
          currentYear:'',
      }
  },
  methods:{
      yearChangeHander(year){
          if(year === '' || this.years.indexOf(year) !== -1)
            this.currentYear = year
      },
      startIntroduce(){
          this.yearChangeHander(this.year[0])
      }
  },
  computed:{
      years(){
          return Object.keys(yearData).sort((x,y)=>y-x)
      },
      background(){
          if(this.currentYear === ''){
            return this.indexBackgroundImage
          }else{
            return this.backgroundImages[this.years.indexOf(this.currentYear) % this.backgroundImages.length]
          }
      }
  },
}
</script>
<style lang="less" scoped>
.container{
    width: 100%;
    height: 100%;
    background-size: cover;
    display: flex;
    color: #fff;
    transition: background-image 1s;
    main{
        position: relative;
        width: 80%;
        height: 100%;
        box-sizing: border-box;
        padding:4em 10em;
    }
    aside{
        flex: 0 0  auto;
        width: 20%;
        height: 100%;
    }
    .years{
        position: absolute;
        opacity: 0;
        padding: 2em;
        transition: opacity 1s;
        width: 100%;
        box-sizing: border-box;
    
    }
    .focus{
        opacity: 1;
    }
    .year{
        padding: 2em 0;
    }
    .items{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        & > *{
            flex:  0 0 auto;
            width: 30%;
            box-sizing: border-box;
            padding: 2em;
            
            .title{
                padding: .5em;
            }
            .img{
                height: 20em;
                background-size: cover;
            }
        }

    }

}
</style>