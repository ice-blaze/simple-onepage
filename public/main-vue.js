Vue.component('card', {
  props: ['service'],
  template: `
    <div class="card" v-bind:class="[ service.state=='success'? 'border-success' : '', service.state=='warning'? 'border-warning' : '', service.state=='danger'? 'border-danger' : '' ]">
      <div class="card-header" v-bind:class="[ service.state=='success'? 'bg-success' : '', service.state=='warning'? 'bg-warning' : '', service.state=='danger'? 'bg-danger' : '' ]">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ service.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  `
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    services: [
      { title: "test1", url: "Learn JavaScript", state: "success" },
      { title: "test2", url: "Learn Vue", state: "warning" },
      { title: "test3", url: "Build something awesome", state: "danger" },
      { title: "test3", url: "Build something awesome", state: "danger" },
      { title: "test3", url: "Build something awesome", state: "danger" },
      { title: "test3", url: "Build something awesome", state: "danger" },
      { title: "test3", url: "Build something awesome", state: "danger" },
    ]
  }
})

