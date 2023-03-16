<template>
  <div>
    <draggable
      :list="sectionDataTask"
      item-key="tName"
      class="list-group special-height overflow-y-auto"
      @start="dragging = true"
      @end="dragging = false"
      group="tasks"
    >
      <template #item="{ element, index }">
        <div class="list-group-item p-2" :class="{ 'not-draggable': !enabled }">
          <div class="border flex flex-col mt-2.5 p-5 rounded">
            <div class="flex justify-between items-center">
              <div class="flex flex-col">
                <span :class="element.tStatus.style">{{
                  element.tStatus.name
                }}</span>
                <span class="text-lg mt-2.5">{{ element.tName }}</span>
                <span class="text-sm text-gray-400 mt-2.5">{{
                  element.tDate
                }}</span>
              </div>
              <div class="relative self-start">
                <button @click="handleOptions(index)" class="flex items-center">
                  <img src="../assets/icons/dots.svg" alt="remove-icon" />
                </button>
                <button
                  @click="removeSingleTask(index)"
                  v-show="isOptions[index]"
                  class="absolute right-8 -top-1"
                >
                  <div class="flex items-center text-sm">
                    <img
                      src="../assets/icons/remove-icon.svg"
                      alt="remove-icon"
                      class="mr-1.5 w-4"
                    />
                    <span class="text-sm">Delete</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "showTasks",
  components: {
    draggable,
  },
  props: ["sectionDataTask", "selectedStatus", "statusOptions", "sectionData"],
  data() {
    return {
      isOptions: [],
    };
  },
  methods: {
    handleOptions(i) {
      this.isOptions[i]
        ? (this.isOptions[i] = false)
        : (this.isOptions[i] = true);
    },
    removeSingleTask(index) {
      this.$emit("removeTask", index);
      this.isOptions[index] = false;
    },
  },
  computed: {
    dynTask() {
      return this.sectionDataTask;
    },
  },
};
</script>

<style>
.list-group {
  min-height: 150px;
}
.special-height {
  height: 700px;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 15px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: goldenrod;
  border-radius: 5px;
}
</style>
