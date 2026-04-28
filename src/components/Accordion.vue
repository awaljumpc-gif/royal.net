<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item border-b border-gray-200 last:border-b-0"
    >
      <button
        @click="toggleItem(index)"
        class="accordion-header w-full flex items-center justify-between py-4 px-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        :aria-expanded="accordionItems[index].isOpen"
        :aria-controls="`accordion-content-${index}`"
      >
        <span class="text-lg font-semibold text-gray-900">{{ item.title }}</span>
        <svg
          :class="[
            'w-5 h-5 text-gray-500 transform transition-transform duration-200',
            { 'rotate-180': accordionItems[index].isOpen }
          ]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <div
        :id="`accordion-content-${index}`"
        :class="[
          'accordion-content',
          accordionItems[index].isOpen ? 'expanded' : 'collapsed'
        ]"
      >
        <div class="px-6 pb-4">
          <slot :name="`content-${index}`" :item="item">
            <p class="text-gray-600">{{ item.content }}</p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      default: () => [],
      validator: (value) => {
        return value.every(item =>
          typeof item.title === 'string' &&
          (typeof item.content === 'string' || item.content === undefined)
        )
      }
    },
    allowMultiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      accordionItems: this.items.map(item => ({
        ...item,
        isOpen: false
      }))
    }
  },
  methods: {
    toggleItem(index) {
      if (this.allowMultiple) {
        this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen
      } else {
        this.accordionItems.forEach((item, i) => {
          item.isOpen = i === index ? !item.isOpen : false
        })
      }
      this.$emit('toggle', { index, isOpen: this.accordionItems[index].isOpen })
    }
  },
  watch: {
    items: {
      handler(newItems) {
        this.accordionItems = newItems.map(item => ({
          ...item,
          isOpen: false
        }))
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.accordion {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.accordion-item {
  border-bottom: 1px solid #e5e7eb;
}

.accordion-item:last-child {
  border-bottom: none;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.accordion-item:first-child {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.accordion-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  text-align: left;
  border-color: #e5e7eb;
  transition: background-color 0.2s;
}

.accordion-header:hover {
  background-color: #f9fafb;
}

.accordion-header:focus {
  outline: none;
  box-shadow: 0 0 0 2px #3b82f6, 0 0 0 4px rgba(59, 130, 246, 0.5);
}

.accordion-content {
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.accordion-content.collapsed {
  max-height: 0;
  opacity: 0;
}

.accordion-content.expanded {
  max-height: 100vh;
  opacity: 1;
}
</style>