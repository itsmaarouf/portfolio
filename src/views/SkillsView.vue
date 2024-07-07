<template>
  <div class="container flex flex-col flex-1 p-0 mx-auto">
    <TheHeadline title="Skill" />
    <SkillsStatus skillsGroup="Markup &amp Style" :SkillsName="Skills" />
    <SkillsStatus skillsGroup="Libraries" :SkillsName="Libraries" />
    <SkillsStatus skillsGroup="Programming Languages " :SkillsName="Langs" />
  </div>
</template>

<script setup>
import TheHeadline from "../components/TheHeadline.vue";
import SkillsStatus from "../components/SkillsStatus.vue";

import { useSkillsStore } from "../stores/skills";
import { useLangsStore } from "../stores/Lang";
import { useLibrariesStore } from "../stores/Libraries";

const { Skills } = useSkillsStore();
const { Langs } = useLangsStore();
const { Libraries } = useLibrariesStore();
</script>

<style lang="scss" scoped></style>
