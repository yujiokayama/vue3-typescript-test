<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

// Propsの型
type Props = {
  id: number;
  title: string;
};

const props = withDefaults(
  defineProps<{
    id?: number;
    title?: string;
    text?: string;
  }>(),
  {
    id: 0,
    title: "defaultTitle",
    text: "defaultText",
  }
);

// emitの型
type Emits = {
  (e: "update:text", value: string): void;
};

const emit = defineEmits<Emits>();

// ref
const pText = ref<HTMLParagraphElement>();
const inputText = ref<string>("");

// computed
const textComputed = computed({
  get: () => props.title,
  set: (value) => {
    emit("update:text", value);
  },
});

// ライフサイクルイベント
onMounted(() => {
  console.log(pText.value);
});
</script>

<template>
  <div>
    <!-- props -->
    <p>{{ id }}</p>
    <p>{{ title }}</p>
    <p>{{ text }}</p>
    <!-- ref -->
    <p ref="pText">xxx</p>
    <!-- 双方向バインディング -->
    <input v-model="inputText" type="text" />
    <p>{{ inputText }}</p>
    <!-- computed -->
    <input type="text" v-model="textComputed" />
  </div>
</template>
