<script setup lang="ts">
import { LucideGitlab, LucideLinkedin } from '#components';

const { t } = useI18n();
</script>
<template>
  <div class="flex justify-center pt-6 px-4">
    <div class="max-w-6xl w-full text-primary-color text-base sm:text-lg">
      <h1 class="text-xl sm:text-2xl font-semibold">{{ $t('aboutMe.title') }}<span class="text-secondary-color">Baptiste BRONSIN</span></h1>
      <p class="mt-8">{{ $t('aboutMe.firstSubTitle') }}</p>
      <p class="mt-2">{{ $t('aboutMe.secondSubTitle.part1') }}<NuxtLink class="text-secondary-color" to="https://www.polytech.umontpellier.fr/" target="_blank">{{ $t('aboutMe.secondSubTitle.link1') }}</NuxtLink>{{ $t('aboutMe.secondSubTitle.part2') }}<NuxtLink class="text-secondary-color" to="https://www.kaliop.com/fr/" target="_blank">{{ $t('aboutMe.secondSubTitle.link2') }}</NuxtLink>{{ $t('aboutMe.secondSubTitle.part3') }}</p>

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
      <Section :title="'Projets'">
        <div class="flex flex-col	gap-4">
          <Project
            :name="'Plannify'"
            :links="{ gitlab: 'https://gitlab.com', external: 'https://app.plannify.be' }"
            :description="'Plannify est une application web qui permet aux chauffeurs routiers de saisir leurs journées et générer des rapports personnaliées.'"
            :details="[
              {
                type: 'Front-end',
                technology: 'ReactJS (TypeScript)'
              },
              {
                type: 'Back-end',
                technology: 'NestJS (TypeScript), PostgreSQL, Redis, MinIO'
              },
              {
                type: 'Serveur mail',
                technology: 'Docker Mailserver'
              },
              {
                type: 'Déploiement',
                technology: 'Docker, Kubernetes'
              }
            ]"
          />
          <div class="flex justify-center mt-4 sm:hidden">
            <div class="border-t w-[80%] sm:w-px sm:border-r border-custom-grey"></div>
          </div>
          <Project
            :name="'SealCI'"
            :links="{ github: 'https://github.com/dev-sys-do/sealci' }"
            :description="'SealCI est un projet étudiant visant à développer un moteur de CI/CD.'"
            :details="[
              {
                type: 'Langage utilisé',
                technology: 'Rust'
              }
            ]"
          />
          <div class="flex justify-center mt-4 sm:hidden">
            <div class="border-t w-[80%] sm:w-px sm:border-r border-custom-grey"></div>
          </div>
          <Project
            :name="'Beep'"
            :links="{ external: 'https://beep.ovh' }"
            :description="'Beep est une application web qui vise à implémenter les mêmes fonctionnalités que la plateforme Discord. Ce projet est développé par l’ensemble de la promotion 2023-2026 de DevOps à Polytech Montpellier.'"
            :details="[
              {
                type: 'Front-end',
                technology: 'ReactJS (TypeScript, Redux)'
              },
              {
                type: 'Back-end',
                technology: 'Adonis (TypeScript), PostgreSQL, Redis, MinIO'
              },
              {
                type: 'CI/CD',
                technology: 'ArgoCD'
              },
              {
                type: 'Serveur mail',
                technology: 'Docker Mailserver'
              },
              {
                type: 'Déploiement',
                technology: 'Docker, Kubernetes'
              },
              {
                type: 'Monitoring',
                technology: 'Prometheus, Grafana'
              }
            ]"
          />
          <div class="flex justify-center mt-4 sm:hidden">
            <div class="border-t w-[80%] sm:w-px sm:border-r border-custom-grey"></div>
          </div>
          <Project
            :name="'Polycount'"
            :links="{ gitlab: 'https://gitlab.com', external: 'https://polycount.baptistebronsin.be' }"
            :description="'Polycount est ma première application web en Javascript. Elle permet à des utilisateurs d’assigner des dépenses lors d’activités en groupe (comme Tricount).'"
            :details="[
              {
                type: 'Front-end',
                technology: 'ReactJS (TypeScript)'
              },
              {
                type: 'Back-end',
                technology: 'Express (TypeScript), PostgreSQL'
              },
              {
                type: 'Déploiement',
                technology: 'Docker, Kubernetes'
              }
            ]"
          />
          <div class="flex justify-center mt-2 sm:hidden">
            <div class="border-t w-[80%] sm:w-px sm:border-r border-custom-grey"></div>
          </div>
          <Project
            :name="'Prix opérateur'"
            :links="{ gitlab: 'https://gitlab.com', external: 'https://prix-operateur.baptistebronsin.be' }"
            :description="'Prix opérateur permet à un utilisateur s’il est préférable d’acheter un smartphone avec ou sans un opérateur téléphonique.'"
            :details="[
              {
                type: 'Front-end',
                technology: 'HTML, CSS et TypeScript'
              },
              {
                type: 'Déploiement',
                technology: 'Docker, Kubernetes'
              }
            ]"
          />
        </div>
      </Section>
      <Section :title="'Me contacter'">
        <p>Mon profil vous intéresse et vous êtes curieux d’en savoir un peu plus sur moi ?<br/>
          Contactez-moi à l’adresse <a class="text-secondary-color underline" href="mailto:contact@baptistebronsin.be">contact@baptistebronsin.be</a>.</p>
      </Section>
      <div class="mt-40 mb-6 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <NuxtLink to="https://gitlab.com/baptiste.bronsin" target="_blank" class="text-secondary-color"><LucideGitlab :size="20"/></NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/baptiste-bronsin" target="_blank" class="text-secondary-color"><LucideLinkedin :size="20"/></NuxtLink>
        </div>
        <p class="text-tertiary-color">© 2024 Baptiste BRONSIN</p>
      </div>
    </div>
  </div>
</template>
