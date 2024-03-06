<script setup>
const props = defineProps({
  size: {
    validator(value, props) {
        return ['sm', 'md', 'lg'].includes(value)
    },
    default: 'sm'
  },
  variant: {
    validator(value, props) {
        return ['flat', 'tonal', 'outlined'].includes(value)
    },
    default: 'flat'
  },
});

// size: sm, md, lg
// variant: flat, tonal, outlined
const size = {
    sm: 'w-44 h-36',
    md: 'w-60 h-52',
    lg: 'w-80 h-72'
}
const variant = {
    flat: 'shadow-md',
    tonal: 'bg-slate-50',
    outlined: 'border border-slate-500'
}
</script>

<template>
  <div class="flex flex-col p-3" :class="size[props.size], variant[props.variant]">
    <div class="font-bold"><slot name="title"></slot></div>
    <div class="font-semibold"><slot name="subTitle"></slot></div>
    <div class="pt-2"><slot name="content"></slot></div>
    <div class="flex justify-end gap-2 pt-2"><slot name="action"></slot></div>
  </div>
</template>

<style scoped></style>
