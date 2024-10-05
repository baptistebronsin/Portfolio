<script setup lang="ts">
import type { SchoolRow } from '~/types/school-row';

type Props = {
    name: string;
    years: SchoolRow[];
};
const props = defineProps<Props>();
</script>
<template>
    <div>
        <h3 class="text-secondary-color">{{ props.name }}</h3>
        <div>
            <ul>
                <li v-for="year in props.years" :key="year.id" class="flex justify-between ml-2">
                    <div class="flex items-center gap-3">
                        <span class="bg-custom-grey w-2 h-2 rounded-full"></span>
                        <p>{{ year.name }}</p>
                    </div>
                    <p class="text-tertiary-color">{{ year.start }}-{{ year.end }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>