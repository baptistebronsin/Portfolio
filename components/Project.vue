<script setup lang="ts">
import { LucideGithub, LucideGitlab, LucideLink, LucideFigma, NuxtLink } from '#components';

type Props = {
    name: string;
    links: {
        gitlab?: string;
        github?: string;
        external?: string;
        figma?: string;
    },
    description: string;
    details: {
        type: string;
        technology: string;
    }[];
};
const props = defineProps<Props>();
</script>
<template>
    <div>
        <div class="flex items-center gap-4">
            <h3 class="text-secondary-color">{{ props.name }}</h3>
            <div class="flex gap-2">
                <NuxtLink :to="props.links.gitlab" target="_blank" v-if="props.links.gitlab"><LucideGitlab color="#FC6D26" :size="20"/></NuxtLink>
                <NuxtLink :to="props.links.github" target="_blank" v-if="props.links.github"><LucideGithub color="#171515" :size="20"/></NuxtLink>
                <NuxtLink :to="props.links.figma" target="_blank" v-if="props.links.figma"><LucideFigma color="#A259FF" :size="20"/></NuxtLink>
                <NuxtLink :to="props.links.external" target="_blank" v-if="props.links.external"><LucideLink color="#ADADAD" :size="20"/></NuxtLink>
            </div>
        </div>
        <div class="flex flex-col sm:grid sm:grid-cols-[1fr_1px_1fr] gap-4">
            <p>{{ props.description }}</p>
            <div class="hidden sm:flex justify-center" v-if="props.details.length > 0">
                <div class="border-t w-[80%] sm:w-px sm:border-r border-custom-grey"></div>
            </div>
            <div v-if="props.details.length > 0">
                <ul>
                    <li v-for="detail in props.details" :key="detail.type">
                        <span class="text-tertiary-color">{{ detail.type }} :</span> {{ detail.technology }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>