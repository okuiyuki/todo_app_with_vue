var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    count: 0
  }
});

setInterval(function(){
  app.count += 1;
},1000)

new Vue({
  el: "#app2",
  data: {
    url: "https://www.google.com"
  }
});

new Vue({
  el: "#app3",
  data:{
    list:[
      { label: "Vue.js" },
      { label: "angurar.js"}
    ]
  }
});

new Vue({
  el: "#app4",
  data: {
    message: "hello"
  }
});

var app5 = new Vue({
  el: "#app5",
  data: {
    seen: true
  }
});

new Vue({
  el: "#app6",
  data: {
    message: "Hello Vue.js!"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split("").reverse().join("")
    }
  }
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

new Vue({
  el: "#app7",
  data: {
    groceryList: [
      {id: 0, text: "a"},
      {id: 1, text: "b"},
      {id: 2, text: "c"}
    ]
  }
});

var watchExampleVM = new Vue({
  el: "#app8",
  data: {
    question: "",
    answer: 'I cannot give you an answer until you ask a question!',
    image: "nil"
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = "thinking..."
      var vm = this
      axios.get('https://yesno.wtf/api')
      .then(function (response) {
        vm.answer = _.capitalize(response.data.answer)
        vm.image = response.data.image
      })
      .catch(function (error) {
        vm.answer = "error" + error
      })
    }
  }
});

new Vue({
  el: "#app9",
  data: {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
});

new Vue({
  el: "#app10",
  data: {
    styleObject: {
      color: "red",
      fontSize: "30px"
    }
  }
})

Vue.component('click-button', {
  template: '<button v-on:click="count++">{{ count }}</button>',
  data: function() {
    return {
      count: 0
    }
  }
})

Vue.component('blog-post',{
  props:['post'],
  template: `
  <div class="blog-post">
    <h3>{{ post.title }}</h3>
    <button v-on:click="$emit('enlarge-text')">
      Enlarge text
    </button>
    <div v-html="post.content"></div>
  </div>
`
})

tmp = new Vue({
  el: '#app12',
  data: {
    posts: [{title: 'Vue', content: 'Vue content'}],
    postFontSize: 1
  }
})

new Vue({ el: "#app11"})