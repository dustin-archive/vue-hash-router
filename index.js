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
    var that = this

    that.route()

    window.addEventListener('hashchange', function () {
      that.route()
    })
  }
}

module.exports = hashRouter
