<template>
    <div>
        <sun-header></sun-header>
        <sun-menu></sun-menu>
        <div class="main" :class="isSpread ? 'spread' : 'close'">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import sunHeader from '@/components/Header'
import sunMenu from '@/components/Menu'
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            aniClass: ''
        }
    },
    computed: {
        ...mapGetters([
            'isSpread'
        ])
    },
    updated() {
        this.aniClass = 'bounceInRight'
    },
    created() {
        console.log('mounte')
        this.aniClass = 'bounceInRight'
    },
    components: {
        sunHeader,
        sunMenu
    }
}

</script>
<style scoped>
.main {
    position: absolute;
    top: 58px;
    right: 0;
    bottom: 0;
    background: #ececec;
    overflow-x: hidden;
}
.main.spread{
    left:180px;
    transition: all .3s ease;
}
.main.close {
    left:50px;
    transition: all .3s ease;
}
</style>


