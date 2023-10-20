import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useKanban = defineStore("kanban", () => {
  const form = ref({
    title: "",
    description: "",
  });

  const page = ref("/platform");

  const kanban = ref<
    Array<{
      id: Number;
      title: string;
      description: string;
      status: string;
      page: string;
    }>
  >([]);

  const add = (title: string, description: string, status: string) => {
    kanban.value.push({
      id: Math.floor(Math.random() * 100),
      title: title,
      description: description,
      status: status,
      page: page.value,
    });
    console.log(kanban.value);
  };

  const remove = (id: number) => {
    const filtered = kanban.value.filter((item) => item.id !== id);
    kanban.value = filtered;
  };

  return { form, kanban, add, page, remove };
});
