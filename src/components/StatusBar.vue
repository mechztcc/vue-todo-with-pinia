<template>
    <div class="status">
        <div class="grow" style="width: 10%;"></div>
        <span>10%</span>
    </div>
</template>
<script>
export default {
    name: 'app-statusbar'
}
</script>
<style>
.status {
    height: 20px;
    width: 100%;
    background-color: #393E46;
    border-radius: 20px;
    margin-top: 1%;
}

.grow {
    height: 20px;
    border-radius: 20px 0 0 20px;
    background-color: #00ADB5;
}

span {
    font-weight: bold;
}
</style>