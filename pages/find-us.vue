<template>
    <div>
        <MapsWidget />
    <div class="directions-page">
    <h3>Getting to Enon</h3>

    <CollapsibleSection
      v-for="(section, i) in sections"
      :key="i"
      :title="section.heading"
      :content="section.body"
    />
  </div>

</div>							
</template>
<script setup lang="ts">
import MapsWidget from '../components/widgets/MapsWidget.vue'

import CollapsibleSection from '../components/CollapsibleComponent.vue'

const sections = [
  {
    heading: 'Directions Approaching From London A2',
    body: `
      <p>At approach to start of M2, take slip road on left and follow signs A2 Strood and Rochester.<br />
      Continue on A2 through Strood, over Rochester Bridge and keep in left hand lane, passing a number of sets of traffic lights.<br />
      Road bends to the right at a set of traffic lights. Continue to follow A2 Chatham and Gillingham. Keep in left hand lane as road bears left up a hill.<br />
      Keep left at the mini roundabout at top of hill. Pass pedestrian lights, speed camera (!) and 2 further sets of pedestrian lights.<br />
      A few metres further on, turn left at next set of lights signed Chatham Town Centre and immediately left again at more lights.<br />
      After 50 metres, take left filter lane signed to James Street, Rhodes Street and Jenkins Dale.<br />
      Proceed through underpass and on exit you will see Enon on the right.<br />
      For the church car park, go right round the roundabout and take the last exit.</p>
    `
  },
  {
    heading: 'Directions Approaching From Rainham/Gillingham A2',
    body: `
      <p>Follow signs for A2 Rochester and London, proceeding through numerous traffic lights.<br />
      Descend a long hill from which you will observe Chatham and Rochester sprawled out in front of you.<br />
      In your delight, beware of the speed camera half way down the hill, just before a footbridge over the road.<br />
      At the foot of the hill, after the traffic lights, take the second exit at roundabout(at about 10 o/c position, still A2 Rochester/London).<br />
      Immediately get in right hand lane and after 200 metres, take right filter lane signed Chatham Town Centre at lights.<br />
      Immediately left again at more lights.<br />
      After 50 metres, take left filter lane signed to James Street, Rhodes Street and Jenkins Dale.<br />
      Proceed through underpass and on exit you will see Enon on the right.<br />
      For the church car park, go right round the roundabout and take the last exit.</p>
    `
  },
  {
    heading: 'Directions Approaching From M2, Junction 3',
    body: `
      <p>Upon exit, follow signs for A229 Rochester and (A230) Chatham through roundabout complexes.<br />
      Emerge over a flyover, left hand bend and beware speed camera.<br />
      Straight over at next roundabout, passed airfield on left, then take right hand lane signed A230 Chatham.<br />
      In about ½ mile, straight over at next set of lights.<br />
      Pass 2 sets of pedestrian lights.<br />
      In ¼ mile, just before another set of pedestrian lights, turn right into Southill Road.<br />
      At T junction, turn left and in 200 metres, take 2nd exit at roundabout and the church car park is immediately on the left.</p>
    `
  },
  {
    heading: 'Directions Approaching From St Mary’s Island',
    body: `
      <p>Follow signs for Chatham Town Centre.<br />
      Proceed through numerous sets of traffic lights.<br />
      At approach to GO Outdoors store on the left, keep in the right lane at the lights.<br />
      Straight across next set of lights.<br />
      After 50 metres, take left filter lane signed to James Street, Rhodes Street and Jenkins Dale.<br />
      Proceed through underpass and on exit you will see Enon on the right.<br />
      For the church car park, go right round the roundabout and take the last exit.</p>
    `
  }
]
</script>

<style scoped>
.directions-page {
  margin: 3rem auto;
  padding: 0 1rem;
  font-family: Arial, sans-serif;
}

.directions-page h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}
</style>