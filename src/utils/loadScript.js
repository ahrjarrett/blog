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

// export const loadScript = (url, domId, node) => {
//   return new Promise((resolve, reject) => {
//     const script = window.document.createElement("script")
//     const { head } = window.document
//     const regex = /^https:\/\/maps\.googleapis\.com\/maps\/api\//
//     script.src = url
//     script.id = domId
//     script.async = true
//     script.defer = true

//     // trigger fulfilled state when script is ready
//     script.onload = resolve
//     // trigger rejected state when script is not found
//     script.onerror = reject

//     if (node && !node.children.length) {
//       console.log("appending node:", node)
//       node.appendChild(script)
//     } else if (regex.test(head.children[head.children.length - 1].src)) {
//       // } else if (document.querySelectorAll("script#googleMapsScript")) {
//       console.log("script already exists, noop")
//     } else {
//       console.log("appending to window.doc.head")
//       head.appendChild(script)
//     }
//     return script
//   })
// }
