<template>
    <article class="text-content">
        <h1>
            What's On
        </h1>
        <div>
            <h3>
                Weekly Meetings
            </h3>
            <p>
                <strong>Sunday</strong><br />
                9.45am &#8211;  
                    <NuxtLink to="/whats-on/children/">Sunday Club</NuxtLink> (for children aged 4 to 15)<br />
                11.15am &#8211; 
                    <NuxtLink to="/whats-on/sunday-morning/"> Morning Worship</NuxtLink><br />
                6.00 pm &#8211; <NuxtLink to="/whats-on/sunday-prayer/">Prayer Time</NuxtLink><br />
                6.30pm &#8211; <NuxtLink to="/whats-on/sunday-evening/">Evening Worship</NuxtLink>
            </p>
            <p>
                <strong>Wednesday</strong><br />
                7.30pm &#8211;  <NuxtLink to="/whats-on/bible-study/">Bible Study and Prayer Meeting</NuxtLink>
            </p>
            <p>
                <strong>Thursday</strong><br />
                9.30am &#8211; <a href="https://enonbaptistchatham.org.uk/events/first-steps-toddler-group/">First Steps</a> – Toddler Group<br />
                (for parents, carers, and pre-school children)<br />
                Parents/Carers need to stay with their children.<br />
                1.45pm &#8211; <NuxtLink to="/whats-on/womens-meetings/">Ladies Meeting</NuxtLink> (1st and 3rd Thursday each month)
            </p>
            <p>
                <strong>Friday<br /></strong>
                10am to 11.30am &#8211; Coffee Morning (every fortnight &#8211; <CallWidget text="ring"/> for details)<br />
                7.30pm &#8211; <NuxtLink to="/whats-on/youth/">Discoverers</NuxtLink> (Youth meeting for 11-16 year olds)<br />
                (during term time &#8211; <CallWidget text="ring"/> for details)
            </p>
        </div>							
    </article>
</template>
<script>
import CallWidget from '~/components/widgets/CallWidget.vue';
export default {
    components: {
        CallWidget
    }
}
</script>