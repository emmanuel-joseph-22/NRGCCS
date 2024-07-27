<!-- <script src="../../../scripts/modules/Module3/unit1.js"></script> -->
<template>
  <!-- table of contents -->
  <section id="contents" class="flex flex-col w-full px-4 items-center">
      <h1 class="text text-gray-400">UNIT 1</h1>
      <h1 class="text-xl text-gray-700">Job Hunt</h1>
      <h1 class="col-span-3 text-center">Contents</h1>
      <div class="my-8 grid grid-cols-3 gap-4 w-full">
          <div v-for="(lesson, index) in lessons" :key="index" class="link-box mt-2 px-8 py-8 rounded-lg">
              <div class="lesson px-4 py-4">
                  <router-link :to="lesson.link">
                      <div>{{ index + 1 }}. {{ lesson.title }}</div>
                  </router-link>
              </div>
              <div class="prev px-1 py-1 w-full items-center">
                  <div @click="openModal(lesson)" class="flex cursor-pointer font-medium items-center">
                      <span class="ml-8">Lesson Preview</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 448" class="ml-2">
                          <path style="fill:blue; fill-opacity:1" d="M 96 0 L 96 32 L 96 160 L 128 160 L 128 32 L 320 32 L 320 128 L 416 128 L 416 416 L 160 416 L 144 416 L 128 416 L 96 416 L 96 448 L 128 448 L 448 448 L 448 416 L 448 111.01953 L 336.98047 0 L 128 0 L 96 0 z"/>
                          <path style="fill:blue; fill-opacity:1" d="M 160 192 A 96 95.999992 0 0 0 64 288 A 96 95.999992 0 0 0 78.117188 337.88281 L 0 416 L 32 448 L 110.09375 369.90625 A 96 95.999992 0 0 0 160 384 A 96 95.999992 0 0 0 256 288 A 96 95.999992 0 0 0 160 192 z M 160 224 A 64 63.999996 0 0 1 224 288 A 64 63.999996 0 0 1 160 352 A 64 63.999996 0 0 1 96 288 A 64 63.999996 0 0 1 160 224 z"/>
                      </svg>
                  </div>
              </div>
          </div>
      </div>
      <LessonPreviewModal :isOpen="isModalOpen" :lesson="currentLesson" @close="closeModal" />
  </section>
</template>

<script>
import LessonPreviewModal from '../../LessonPreviewModal.vue';

export default {
  components: {
    LessonPreviewModal
  },
  data() {
    return {
      lessons: [
        {
          title: "A Quick Look",
          link: "/module3/unit1/lesson1",
          contents: [
            "Lorem ipsum dolor sit amet", 
            "Lorem ipsum dolor sit amet", 
            "Lorem ipsum dolor sit amet"
          ]
        },
        {
          title: "Qualifications",
          link: "/module3/unit1/lesson2",
          contents: [
            "Lorem ipsum dolor sit amet", 
            "Lorem ipsum dolor sit amet", 
            "Lorem ipsum dolor sit amet"
          ]
        },
        {
          title: "The Search Is On",
          link: "/module3/unit1/lesson3",
          contents: [
            "Lorem ipsum dolor sit amet", 
            "Lorem ipsum dolor sit amet", 
            "Lorem ipsum dolor sit amet"
          ]
        },
        {
          title: "Ace That Interview",
          link: "/module3/unit1/lesson4",
          contents: [
            "Lorem ipsum dolor sit amet", 
            "Lorem ipsum dolor sit amet", 
            "Lorem ipsum dolor sit amet"
          ]
        },
        {
          title: "Employment Contract",
          link: "/module3/unit1/lesson5",
          contents: [
            "Lorem ipsum dolor sit amet", 
            "Lorem ipsum dolor sit amet", 
            "Lorem ipsum dolor sit amet"
          ]
        }
      ],
      isModalOpen: false,
      currentLesson: null,
    };
  },
  methods: {
    openModal(lesson) {
      this.currentLesson = lesson;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.currentLesson = null;
    }
  }
};
</script>

<style scoped>
.link-box {
  border: 3px solid rgb(163, 21, 21);
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 100%;
}
.link-box:hover {
  background-color: #bd444428;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.lesson:hover {
  background-color: #72232328;
  border-radius: 10px;
}
.prev {
  color: blue;
}
.prev:hover {
  color: red;
}
</style>

