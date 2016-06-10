var hashRouter = {
  data: {
    hash: '#home'
  },
  methods: {
    route: function (hash) {
      this.hash = hash || window.location.hash || this.hash
    }
  },
  ready: function () {
    var $vue = this

    $vue.route()

    window.addEventListener('hashchange', function () {
      $vue.route()
    })
  }
}

module.exports = hashRouter
