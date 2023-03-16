<template>
  <div class="relative z-10">
    <div
      class="bg-white p-5 border-t-8 border-t-sky-600 rounded-md w-96 mt-12 ml-5"
    >
      <div class="flex justify-between items-center relative">
        <!-- Section Name Değiştirebildiğimiz Kısım -->
        <input
          type="text"
          v-model="sectionData.name"
          class="focus:outline-none focus:border focus:rounded"
        />
        <!-- Section Name Değiştirebildiğimiz Kısım // -->
        <!-- Yeni Task Eklemek İçin Yatay Menüyü Açan Kısım -->
        <button @click="sectionBar">
          <img src="../assets/icons/horizontal-dots.svg" alt="dots-icon" />
        </button>
        <!-- Yeni Task Eklemek İçin Yatay Menüyü Açan Kısım // -->
        <div v-show="sectionMenu" class="absolute right-7">
          <button @click="handleNewTask" class="mr-2">
            <img
              src="../assets/icons/add-icon.svg"
              alt="add-icon"
              class="w-3.5"
            />
          </button>
          <button @click="removeAllTasks">
            <img
              src="../assets/icons/remove-icon.svg"
              alt="remove-icon"
              class="w-3.5"
            />
          </button>
        </div>
      </div>
      <!-- Oluşan Taskları Getiren Component -->
      <showTasks
        :sectionDataTask="sectionData.list"
        @removeTask="removeOneTask($event)"
      />
      <!-- Oluşan Taskları Getiren Component -->
      <!-- Task Oluşturan Component -->
      <addTask
        :statusOptions="statusOptions"
        @addEmitTask="postTask($event)"
        v-if="isNewTask"
      />
      <!-- Task Oluşturan Component -->
    </div>
  </div>
</template>

<script>
import showTasks from "../components/showTasks.vue";
import addTask from "../components/addTask.vue";
export default {
  props: ["sectionData"],
  components: {
    showTasks,
    addTask,
  },
  data() {
    return {
      sectionMenu: false,
      sectionName: "New Section",
      isNewTask: false,
      statusOptions: [
        {
          id: 1,
          name: "CONFIRMED",
          style: "bg-blue-500 text-xs p-0.5 text-white rounded w-20",
        },
        {
          id: 2,
          name: "COMPLETED",
          style: "bg-green-500 text-xs p-0.5 text-white rounded w-20",
        },
        {
          id: 3,
          name: "CANCELLED",
          style: "bg-red-500 text-xs p-0.5 text-white rounded w-20",
        },
        {
          id: 4,
          name: "PENDING",
          style: "bg-purple-500 text-xs p-0.5 text-white rounded w-20",
        },
        {
          id: 5,
          name: "ACTIVE",
          style: "bg-yellow-500 text-xs p-0.5 text-white rounded w-20",
        },
        {
          id: 6,
          name: "ON HOLD",
          style: "bg-orange-500 text-xs p-0.5 text-white rounded w-20",
        },
      ],
    };
  },
  methods: {
    sectionBar() {
      this.sectionMenu ? (this.sectionMenu = false) : (this.sectionMenu = true);
    },
    handleNewTask() {
      this.isNewTask ? (this.isNewTask = false) : (this.isNewTask = true);
    },
    postTask(data) {
      this.sectionData.list.push(data);
      this.isNewTask = false;
      this.sectionMenu = false;
    },
    removeOneTask(data) {
      this.sectionData.list.splice(data, 1);
    },
    removeAllTasks() {
      this.sectionData.list = [];
    },
  },
};
</script>

<style></style>
