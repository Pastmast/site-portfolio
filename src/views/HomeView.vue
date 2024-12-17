<script lang="ts" setup>
import TheHeader from '@/components/global/TheHeader.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import PortfolioSection from '@/components/sections/PortfolioSection.vue';
import TheFooter from '@/components/global/TheFooter.vue';
</script>

<template class="home">
	<div class="shader-green"></div>
	<div class="shader-blue"></div>
	<TheHeader />
	<HeroSection />
	<SkillsSection />
	<PortfolioSection />
	<TheFooter />
</template>

<style lang="scss" scoped></style>
