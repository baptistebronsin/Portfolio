<script setup lang="ts">
import { LucideGitlab, LucideLinkedin } from '#components';

const { t } = useI18n();

useHead({
  meta: [
    {
      name: "description",
      content: t("meta.description")
    }
  ]
})
</script>
<template>
  <div class="flex justify-center pt-6 px-4">
    <div class="max-w-6xl w-full text-primary-color text-base sm:text-lg">
      <h1 class="text-xl sm:text-2xl font-semibold">{{ t('aboutMe.title') }}<span class="text-secondary-color">Baptiste BRONSIN</span></h1>
      <p class="mt-8">{{ t('aboutMe.firstSubTitle') }}</p>
      <p class="mt-2">{{ t('aboutMe.secondSubTitle.part1') }}<NuxtLink class="text-secondary-color" to="https://www.polytech.umontpellier.fr/" target="_blank">{{ t('aboutMe.secondSubTitle.link1') }}</NuxtLink>{{ t('aboutMe.secondSubTitle.part2') }}<NuxtLink class="text-secondary-color" to="https://www.kaliop.com/fr/" target="_blank">{{ t('aboutMe.secondSubTitle.link2') }}</NuxtLink>{{ t('aboutMe.secondSubTitle.part3') }}</p>

      <Section :title="t('career.title')">
        <div class="flex flex-col sm:grid sm:grid-cols-[1fr_1px_2fr] gap-4">
          <div class="flex flex-col	gap-4">
            <School
              :name="t('career.components.schools[0].name')"
              :years="[
                {
                  id: 1,
                  name: t('career.components.schools[0].years[0].name'),
                  start: t('career.components.schools[0].years[0].start'),
                  end: t('career.components.schools[0].years[0].end')
                },
                {
                  id: 2,
                  name: t('career.components.schools[0].years[1].name'),
                  start: t('career.components.schools[0].years[1].start'),
                  end: t('career.components.schools[0].years[1].end')
                },
                {
                  id: 3,
                  name: t('career.components.schools[0].years[2].name'),
                  start: t('career.components.schools[0].years[2].start'),
                  end: t('career.components.schools[0].years[2].end')
                }
              ]"
            />
            <School
              :name="t('career.components.schools[1].name')"
              :years="[
                {
                  id: 1,
                  name: t('career.components.schools[1].years[0].name'),
                  start: t('career.components.schools[1].years[0].start'),
                  end: t('career.components.schools[1].years[0].end')
                },
                {
                  id: 2,
                  name: t('career.components.schools[1].years[1].name'),
                  start: t('career.components.schools[1].years[1].start'),
                  end: t('career.components.schools[1].years[1].end')
                }
              ]"
            />
          </div>
          <div class="flex justify-center">
            <div class="border-t w-[80%] sm:w-px sm:border-r border-custom-grey"></div>
          </div>
          <div class="flex flex-col	gap-4">
            <Company
              :name="t('career.components.companies[0].name')"
              :jobs="[
                {
                  id: 1,
                  title: t('career.components.companies[0].jobs[0].title'),
                  start: t('career.components.companies[0].jobs[0].start'),
                  end: t('career.components.companies[0].jobs[0].end'),
                  description: t('career.components.companies[0].jobs[0].description')
                }
              ]"
            />
            <Company
              :name="t('career.components.companies[1].name')"
              :jobs="[
                {
                  id: 1,
                  title: t('career.components.companies[1].jobs[0].title'),
                  start: t('career.components.companies[1].jobs[0].start'),
                  end: t('career.components.companies[1].jobs[0].end'),
                  description: t('career.components.companies[1].jobs[0].description')
                }
              ]"
            />
            <Company
              :name="t('career.components.companies[2].name')"
              :jobs="[
                {
                  id: 1,
                  title: t('career.components.companies[2].jobs[0].title'),
                  start: t('career.components.companies[2].jobs[0].start'),
                  end: t('career.components.companies[2].jobs[0].end'),
                  description: t('career.components.companies[2].jobs[0].description')
                }
              ]"
            />
            <Company
              :name="t('career.components.companies[3].name')"
              :jobs="[
                {
                  id: 1,
                  title: t('career.components.companies[3].jobs[0].title'),
                  start: t('career.components.companies[3].jobs[0].start'),
                  end: t('career.components.companies[3].jobs[0].end'),
                  description: t('career.components.companies[3].jobs[0].description')
                }
              ]"
            />
          </div>
        </div>
      </Section>
      <Section :title="t('project.title')">
        <div class="flex flex-col	gap-4">
          <Project
            :name="t('project.components[0].name')"
            :links="{
              gitlab: t('project.components[0].links.gitlab'),
              external: t('project.components[0].links.external'),
              figma: t('project.components[0].links.figma')
            }"
            :description="t('project.components[0].description')"
            :details="[
              {
                type: t('project.components[0].details[0].type'),
                technology: t('project.components[0].details[0].technology')
              },
              {
                type: t('project.components[0].details[1].type'),
                technology: t('project.components[0].details[1].technology')
              },
              {
                type: t('project.components[0].details[2].type'),
                technology: t('project.components[0].details[2].technology')
              },
              {
                type: t('project.components[0].details[3].type'),
                technology: t('project.components[0].details[3].technology')
              }
              ,
              {
                type: t('project.components[0].details[4].type'),
                technology: t('project.components[0].details[4].technology')
              }
            ]"
          />
          <div class="flex justify-center mt-4 sm:hidden">
            <div class="border-t w-[80%] sm:w-px sm:border-r border-custom-grey"></div>
          </div>
          <Project
            :name="t('project.components[1].name')"
            :links="{
              external: t('project.components[1].links.external')
            }"
            :description="t('project.components[1].description')"
            :details="[
              {
                type: t('project.components[1].details[0].type'),
                technology: t('project.components[1].details[0].technology')
              },
              {
                type: t('project.components[1].details[1].type'),
                technology: t('project.components[1].details[1].technology')
              },
              {
                type: t('project.components[1].details[2].type'),
                technology: t('project.components[1].details[2].technology')
              },
              {
                type: t('project.components[1].details[3].type'),
                technology: t('project.components[1].details[3].technology')
              },
              {
                type: t('project.components[1].details[4].type'),
                technology: t('project.components[1].details[4].technology')
              },
              {
                type: t('project.components[1].details[5].type'),
                technology: t('project.components[1].details[5].technology')
              }
            ]"
          />
          <div class="flex justify-center mt-4 sm:hidden">
            <div class="border-t w-[80%] sm:w-px sm:border-r border-custom-grey"></div>
          </div>
          <Project
            :name="t('project.components[2].name')"
            :links="{
              gitlab: t('project.components[2].links.gitlab'),
              external: t('project.components[2].links.external')
            }"
            :description="t('project.components[2].description')"
            :details="[
              {
                type: t('project.components[2].details[0].type'),
                technology: t('project.components[2].details[0].technology')
              },
              {
                type: t('project.components[2].details[1].type'),
                technology: t('project.components[2].details[1].technology')
              },
              {
                type: t('project.components[2].details[2].type'),
                technology: t('project.components[2].details[2].technology')
              },
              {
                type: t('project.components[2].details[3].type'),
                technology: t('project.components[2].details[3].technology')
              }
            ]"
          />
          <div class="flex justify-center mt-4 sm:hidden">
            <div class="border-t w-[80%] sm:w-px sm:border-r border-custom-grey"></div>
          </div>
          <Project
            :name="t('project.components[3].name')"
            :links="{
              github: t('project.components[3].links.github')
            }"
            :description="t('project.components[3].description')"
            :details="[
              {
                type: t('project.components[3].details[0].type'),
                technology: t('project.components[3].details[0].technology')
              }
            ]"
          />
          <div class="flex justify-center mt-4 sm:hidden">
            <div class="border-t w-[80%] sm:w-px sm:border-r border-custom-grey"></div>
          </div>
          <Project
            :name="t('project.components[4].name')"
            :links="{
              gitlab: t('project.components[4].links.gitlab'),
              external: t('project.components[4].links.external')
            }"
            :description="t('project.components[4].description')"
            :details="[
              {
                type: t('project.components[4].details[0].type'),
                technology: t('project.components[4].details[0].technology')
              },
              {
                type: t('project.components[4].details[1].type'),
                technology: t('project.components[4].details[1].technology')
              },
              {
                type: t('project.components[4].details[2].type'),
                technology: t('project.components[4].details[2].technology')
              }
            ]"
          />
          <div class="flex justify-center mt-2 sm:hidden">
            <div class="border-t w-[80%] sm:w-px sm:border-r border-custom-grey"></div>
          </div>
          <Project
            :name="t('project.components[5].name')"
            :links="{
              gitlab: t('project.components[5].links.gitlab'),
              external: t('project.components[5].links.external')
            }"
            :description="t('project.components[5].description')"
            :details="[
              {
                type: t('project.components[5].details[0].type'),
                technology: t('project.components[5].details[0].technology')
              },
              {
                type: t('project.components[5].details[1].type'),
                technology: t('project.components[5].details[1].technology')
              }
            ]"
          />
        </div>
      </Section>
      <Section :title="t('contact.title')">
        <p>{{ t("contact.descriptions[0]") }}<br/>
          {{ t("contact.descriptions[1]") }}<a class="text-secondary-color underline" href="mailto:contact@baptistebronsin.be">contact@baptistebronsin.be</a>.</p>
      </Section>
      <div class="mt-40 mb-6 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <NuxtLink to="https://gitlab.com/baptiste.bronsin" target="_blank" class="text-secondary-color"><LucideGitlab :size="20"/></NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/baptiste-bronsin" target="_blank" class="text-secondary-color"><LucideLinkedin :size="20"/></NuxtLink>
        </div>
        <p class="text-tertiary-color">2025 Baptiste BRONSIN</p>
      </div>
    </div>
  </div>
</template>
