<template>
    <div>
        <img v-bind:src="imgSrc"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgSrc: "https://v3.ko.vuejs.org/logo.png"
        };
    }
}
</script>