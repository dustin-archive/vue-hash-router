var hashRouter = {
  data: {
    hash: '#home'
  },
  methods: {
    route(hash) {
      this.hash = hash || window.location.hash || this.hash
    }
  },
  ready() {
    var $vue = this

    $vue.route()

    window.addEventListener('hashchange', function () {
      $vue.route()
    })
  }
}

module.exports = hashRouter
