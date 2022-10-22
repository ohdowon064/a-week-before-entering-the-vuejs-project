<template>
    <h1>Hello, {{title}}!</h1>
    <div>
        <div>{{htmlString}}</div>
        <div v-html="htmlString"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "World",
            htmlString: '<P style="color:red;">This is a red string.</P>'
        };
    }
}
</script>