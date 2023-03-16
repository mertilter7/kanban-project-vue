<template>
  <div
    class="border-2 p-5 flex flex-col items-center absolute top-2 right-0 w-96 h-full z-40 bg-white"
  >
  <!-- Status SelectBox -->
    <div class="flex flex-col">
      <label class="text-sm">Select Status</label>
      <select
        v-model="selectedStatus"
        class="w-52 py-0.5 px-2 rounded border border-sky-500 focus:outline-none"
      >
        >
        <option v-for="(option, id) in statusOptions" required :key="id">
          {{ option.name }}
        </option>
      </select>
    </div>
     <!-- Status SelectBox -->
     <!-- Task Valueları Aldığım Yer -->
    <div class="flex flex-col mt-5">
      <label class="text-sm">Task Name:</label>
      <input
        type="text"
        v-model="taskName"
        class="w-52 py-0.5 px-2 rounded border border-sky-500 focus:outline-none"
      />
      {{ taskName }}
    </div>
    <div class="flex flex-col mt-5">
      <label class="text-sm">Task Date:</label>
      <input
        type="date"
        v-model="taskDate"
        class="w-52 py-0.5 px-2 rounded border border-sky-500 focus:outline-none"
      />
      {{ taskDate }}
    </div>
    <!-- Task Valueları Aldığım Yer -->
    <button
      @click="postNewTask"
      class="bg-blue-600 text-white p-1.5 rounded mt-5 hover:bg-blue-800"
    >
      Add Task
    </button>
  </div>
</template>

<script>
export default {
  name: "addTask",
  props: ["statusOptions", "selectedStatus"],
  data() {
    return {
      taskName: "",
      taskDate: "",
      selectedStatus: "",
    };
  },
  methods: {
    postNewTask() {
      const status = this.statusOptions.find(
        (item) => item.name == this.selectedStatus
      );
      const id = Math.floor(Math.random() * 100000);
      this.$emit("addEmitTask", {
        tStatus: status,
        tName: this.taskName,
        tDate: this.taskDate,
        taskId: id,
      });
    },
  },
};
</script>
