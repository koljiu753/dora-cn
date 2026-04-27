<script setup lang="ts">
import TopBanner from './TopBanner.vue'
import SiteHeader from './SiteHeader.vue'
import HeroSection from './HeroSection.vue'
import DataflowDemo from './DataflowDemo.vue'
import ConceptCards from './ConceptCards.vue'
import QuickStartSteps from './QuickStartSteps.vue'
import ExampleGallery from './ExampleGallery.vue'
import LearningPath from './LearningPath.vue'
import CommunityFeed from './CommunityFeed.vue'
import FAQAccordion from './FAQAccordion.vue'
import FinalCTA from './FinalCTA.vue'
import SiteFooter from './SiteFooter.vue'
</script>

<template>
  <div class="dora-home">
    <TopBanner />
    <SiteHeader />
    <main>
      <HeroSection />
      <DataflowDemo />
      <ConceptCards />
      <QuickStartSteps />
      <ExampleGallery />
      <LearningPath />
      <CommunityFeed />
      <FAQAccordion />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
</template>

<style>
/* 隐藏 VitePress 默认导航(只在首页) */
.dora-home {
  --vp-layout-max-width: none;
}
</style>
