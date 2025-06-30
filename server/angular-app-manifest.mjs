
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/boutique/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/boutique/home",
    "route": "/boutique"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KCZFWP22.js"
    ],
    "route": "/boutique/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GF2YAWTK.js"
    ],
    "route": "/boutique/products"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YBPNP2Y4.js"
    ],
    "route": "/boutique/about-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRQ46JJZ.js",
      "chunk-NRRUKRS3.js"
    ],
    "route": "/boutique/contact-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YTMYQI5A.js"
    ],
    "route": "/boutique/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JW37JKTI.js"
    ],
    "route": "/boutique/order-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3AVWILQE.js",
      "chunk-NRRUKRS3.js"
    ],
    "route": "/boutique/admin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FAIPMKAW.js",
      "chunk-NRRUKRS3.js"
    ],
    "route": "/boutique/payment"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1223, hash: '944572d848835d209e6410b30d6dfeff83908ed9164b74168d37b451a76a2d46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1554, hash: '4bf6622533747534686e10f39fe4a868ff38fe14629f284839eac55533f40383', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'order-now/index.html': {size: 8751, hash: '652db094395c96fcfe1a1926a02c9e5c9bd3771559a63179b3ee14ff44a49450', text: () => import('./assets-chunks/order-now_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 8806, hash: 'e3ae9951d2288814ae41283a3b768aab47d3cc3d167e4327d090e013b9bb00fa', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 9167, hash: '9acb55f346a901d5db2f019404db4b3668f22e893d941cd7d4a2222165a8325c', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 14186, hash: 'ccd3519dc265b467c3b1ed8f36456f5c35bb5f47dbbed5c036a6e311cffa7fb4', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 8127, hash: '8074a23876de22f2f69fbd62b1e47eb43c86cd6b33c840778092146b4dea3680', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 11914, hash: 'de59be61b7f55bed3316e399fd1c50ca979763a43e394474b2df37dfd64a06ec', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'payment/index.html': {size: 13952, hash: '57611289ff1fa1ff9ea8c231912e82636747f4d9d5676a98b875bd03de27fa83', text: () => import('./assets-chunks/payment_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 10404, hash: 'b3802f4f79e50312f64274a2eae79596b628b604c9770c6b469ae42b6442dea2', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'styles-MPIP4UWL.css': {size: 542, hash: 'EuuJmGDosUM', text: () => import('./assets-chunks/styles-MPIP4UWL_css.mjs').then(m => m.default)}
  },
};
