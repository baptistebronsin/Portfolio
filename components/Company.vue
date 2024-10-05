<script setup lang="ts">
import type { CompanyRow } from '~/types/company-row';

type Props = {
    name: string;
    jobs: CompanyRow[];
};
const props = defineProps<Props>();
</script>
<template>
    <div>
        <h3 class="text-secondary-color">{{ props.name }}</h3>
        <div>
            <ul>
                <li v-for="job in props.jobs" :key="job.id" class="ml-2">
                    <div class="flex gap-6">
                        <p>{{ job.title }}</p>
                        <p class="text-tertiary-color">{{ job.start }} - {{ job.end }}</p>
                    </div>
                    <p class="leading-6 text-tertiary-color" v-if="job.description">{{ job.description }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>