function testAction(text: string) {
  return {
    type: "ADD_TODO",
    text
  }
}

export { testAction }