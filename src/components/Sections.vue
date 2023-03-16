<template>
  <div class="h-screen">
    <!-- Sectionları Kendi Arasında Yer Değiştirebilen Component -->
    <draggable
      :list="sectionData"
      @start="dragging = true"
      @end="dragging = false"
      group="people"
      class="flex"
      itemKey=""
    >
      <template #item="{ element }">
        <div class="p-2">
          <item-section :sectionData="element" />
        </div>
      </template>
    </draggable>
        <!-- Sectionları Kendi Arasında Yer Değiştirebilen Component -->
    <button @click="addNewSection" class="fixed right-12 bottom-12 z-40">
      <img src="../assets/icons/big-icon.svg" alt="add-big-icon" />
    </button>
  </div>
</template>

<script>
import showTasks from "./showTasks.vue";
import addTask from "./addTask.vue";
import ItemSection from "./itemSection.vue";
import draggable from "vuedraggable";

export default {
  name: "sections",
  components: {
    showTasks,
    addTask,
    ItemSection,
    draggable,
  },
  data() {
    return {
      sectionMenu: false,
      sectionName: "New Section",
      isNewTask: false,
      sectionData: [],
      cName: "",
      statusOptions: [
        {
          id: 1,
          name: "CONFIRMED",
          color: "bg-blue-500 text-xs p-1 text-white rounded w-20",
        },
        {
          id: 2,
          name: "COMPLETED",
          color: "bg-green-500 text-xs p-1 text-white rounded w-20",
        },
        {
          id: 3,
          name: "CANCELLED",
          color: "bg-red-500 text-xs p-1 text-white rounded w-20",
        },
        {
          id: 4,
          name: "PENDING",
          color: "bg-purple-500 text-xs p-1 text-white rounded w-20",
        },
        {
          id: 5,
          name: "ACTIVE",
          color: "bg-yellow-500 text-xs p-1 text-white rounded w-20",
        },
        {
          id: 6,
          name: "ON HOLD",
          color: "bg-orange-500 text-xs p-1 text-white rounded w-20",
        },
      ],
    };
  },
  methods: {
    addNewSection() {
      const newId =
        this.sectionData.length == 0
          ? 1
          : Math.max.apply(
              null,
              this.sectionData.map((s) => +s.id)
            ) + 1;

      this.sectionData.push({
        id: newId,
        name: this.cName ? this.cName : "new section",
        list: [],
      });
    },
  },
};
</script>

<style></style>
