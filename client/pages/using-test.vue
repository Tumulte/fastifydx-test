<template>
  <h2>Okay</h2>
</template>

<script>
import { ref } from 'vue'
import { useRouteContext } from '/dx:core.js'

export function getMeta () {
  return { title: 'Todo List — Using Store' }
}

export default {
  setup () {
    const inputValue = ref(null)
    const { state, actions } = useRouteContext()
    const addItem = async () => {
      await actions.addTodoItem(state, inputValue.value)
      inputValue.value = ''
    }
    return { state, inputValue, addItem }
  },
}
</script>
