<script setup>

</script>
 
<template>
<div class="contianer flex flex-col gap-4">
    <slot name="header"></slot>
    <div class="flex flex-col gap-6">
        <slot></slot>
    </div>
</div>
</template>
 
<style scoped>

</style>