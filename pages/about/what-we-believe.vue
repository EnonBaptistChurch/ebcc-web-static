<template>
  <div>
      <img fetchpriority="high" decoding="async" class="responsive-image" src="https://enonbaptistchatham.org.uk/wp-content/uploads/2017/01/what-we-believe.jpg" width="772" height="515" />
      <div class="text-content">
      <article class="edenPageContent">
      <h1 class="entry-title">What We Believe</h1>
      <div>
        <h3>Set out below is a summary of the essential doctrines which we at Enon Baptist Church believe:</h3>
          
          <div v-for="(section, index) in sections" :key="index">
            <h2>{{ section.title }}</h2>
            <p v-html="formatContent(section.content)"></p>
          </div>
      </div>
      </article>
      </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      sections: [
        { title: "The Being of God", content: "There is one true and living God, Father, Son and Holy Spirit, sovereign over all things." },
        { title: "The Scriptures", content: "The 66 books of the Holy Scriptures are verbally inspired by God, and are the only sufficient and infallible guide in all matters of faith and practice." },
        { title: "The Fall of Man", content: "Because the first man, Adam, sinned, sin entered into the world and brought about the guilt and condemnation of all mankind. All people, therefore, are alienated from God and unable to truly turn to Him of themselves." },
        { title: "The Plan of Salvation", content: "Before the world was made, God determined to save a vast multitude of helpless mankind by sending His only and eternal Son to die for them upon the cross. \nWhen God’s time had come, Jesus was born of the virgin Mary. He lived a perfect life, keeping in full obedience the whole law of God. He gave Himself a substitute for all His people by dying upon a cross at Calvary, bearing the full penalty for their sin. The third day He rose again in his body from the dead, and now lives and reigns in Heaven, interceding for His people, and governing the affairs of men." },
        { title: "The Way of Salvation", content: "The salvation secured by the work of Jesus Christ is made real to His people by the work of the Holy Spirit. By his powerful and mysterious work, dead souls are quickened into spiritual life and given both the desire and ability to repent of their sin and believe in Jesus Christ as their Saviour and Lord. All who truly repent and believe have their sins forgiven and the righteousness of Christ is made theirs, being justified by faith alone. Those who God justifies will most certainly enter into the joys of Heaven." },
        { title: "The Christian Life", content: "The true believer receives not only forgiveness of sins but an inward desire to glorify God by a life which conforms to his laws. Therefore good works and holiness of life are essential evidences of true conversion." },
        { title: "The Church", content: "The true church is the innumerable company of God’s people in every age, chosen by Him before the world began. The local church is made up of those who have covenanted together in a visible bond of love and fellowship. The ordinances of baptism and the Lord’s Supper belong in the context of the local church. By their meaning and teaching of Scripture it is clear that before partaking of the Lord’s Supper, converts should identify themselves with the Lord Jesus and His people in Baptism." },
        { title: "The Last Things", content: "At a time known only to God, the Lord Jesus Christ will return to this earth in glory to raise the dead, both righteous and unrighteous, and to judge all mankind. The wicked will go away into everlasting punishment, and the righteous into eternal life." }
      ]
    }                                                                                            
  },
  methods: {
    formatContent(content) {
      return content.replace(/\n/g, '<br/>'); // Replace line breaks with <br> tags
    }
  }
}
</script>

