<script setup lang="ts">
type Props = {
  title: string;
};
const props = defineProps<Props>();
</script>

<template>
    <div class="mt-14">
        <h2 class="font-medium text-lg sm:text-xl">{{ props.title }}</h2>
        <hr class="border-0 h-px border-t border-custom-grey p-0 m-0 mb-3">
        <slot></slot>
    </div>
</template>
