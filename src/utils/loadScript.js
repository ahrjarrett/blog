export const loadScript = (url, domId) => {
  return new Promise((resolve, reject) => {
    const script = window.document.createElement("script")
    script.src = url
    script.id = domId
    script.async = true
    script.defer = true

    // trigger fulfilled state when script is ready
    script.onload = resolve
    // trigger rejected state when script is not found
    script.onerror = reject

    window.document.head.appendChild(script)
    return script
  })
}
