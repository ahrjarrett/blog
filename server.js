let app = require('express')()
let PORT = process.env.port || 3009
let root = __dirname

app.get('*', ((req, res) => res.sendFile(`${root}/public/index.html`)))

app.listen(PORT, () => `Server running on port ${PORT}`)
