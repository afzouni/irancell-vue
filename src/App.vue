<template>
  <Irancell />
</template>

<script>
import Irancell from "./components/Irancell.vue";

export default {
  name: "App",
  components: {
    Irancell,
  },
  metaInfo() {
    return {
      title: "بسته های اینترنتی ایرانسل",
      meta: [
        {
          name: "description",
          content:
            "در این صفحه لیست بسته‌های ایرانسل را مشاهده می‌کنید و به شما کمک می‌کند انتخاب بهینه‌ای برای خرید بسته اینترنتی خود داشته باشید.",
        },
        {
          property: "og:title",
          content: "در این صفحه لیست بسته‌های ایرانسل را مشاهده می‌کنید و به شما کمک می‌کند انتخاب بهینه‌ای برای خرید بسته اینترنتی خود داشته باشید.",
        },
        { property: "og:site_name", content: "بسته های اینترنتی ایرانسل" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
};
</script>

