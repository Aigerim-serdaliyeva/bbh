<template>
  <div>

    <Gallery />
    <SectionMain />
    <SectionAbout />
    <SectionTownhouse />

  </div>
</template>

<script>

import SectionMain from './SectionMain'
import SectionAbout from './SectionAbout'
import SectionTownhouse from './SectionTownhouse'
import Gallery from '../views/Gallery'

export default {
  components: {
    SectionMain,
    SectionAbout,
    SectionTownhouse,
    Gallery
  }
}
</script>