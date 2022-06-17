import { defineStore } from "pinia";

export const todoStore = defineStore("todo", {
  state: () => ({
    tasks: [
      {
        name: "Beber agua",
        active: true,
      },
			{
        name: "Beber Suco",
        active: false,
      },
    ],
  }),
  actions: {
    add() {
      this.tasks.push({ name: "Receber o notebook", active: true });
    },
  },
});
