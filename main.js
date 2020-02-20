import Vue from './Vue.js';
console.log(Vue);


var app = new Vue({
	el: '#app',
	data: {
		message: '我是 Vue ，叫爷爷'
	}
})

var app2 = new Vue({
	el: '#app2',
	data: {
		message: '进入或刷新页面的时间为：' + new Date().toLocaleString()
	}	
})

var app3 = new Vue({
	el: '#app3',
	data: {
		xixi: '进入时间为：' + new Date().toLocaleString()
	}
})

var app4 = new Vue({
	el: '#app4',
	data: {
		lala: new Date().toLocaleString()
	}
})

var app5 = new Vue({
	el: '#app5',
	data: {
		janson: true 
	}
})

var app6 = new Vue({
	el: '.janson',
	data: {
		todos: [
			{content: '444'},
			{content: '555'},
			{content: '666'}
		]
	}
})

var app7 = new Vue({
	el: '#app7',
	data: {
		message: 'Hello janson!'
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app8 = new Vue({
	el: '#app8',
	data: {
		message: 'hi, you'
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app9 = new Vue({
	el: '#app9',
	data: {
		message: 'hello'
	}
})

// Todo 列表是这么写的
Vue.component('todo-item',{
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var app10 = new Vue({
	el: '#app10',
	data: {
		groceryList: [
			{id: 0, text: 'hhh'},
			{id: 1, text: 'kkk'},
			{id: 2, text: 'lll'}
		]
	}
})
