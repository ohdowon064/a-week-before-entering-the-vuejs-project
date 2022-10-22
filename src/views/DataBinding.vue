<template>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select>
        <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no">{{checked}}</label>
    </div>
</template>
<script>
export default {
    data() {
        return {
            city: "064",
            checked: "no"
        };
    }
}
</script>