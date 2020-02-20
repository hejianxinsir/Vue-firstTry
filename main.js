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

// Object.freeze(obj) 的用法

var obj = {
	foo: 'hello'
}

Object.freeze(obj)	// 加了这一句，点击按钮就不能更新了，因为 freeze 了

var app11 = new Vue({
	el: '#app11',
	data: obj
})

// In addition to data properties, Vue instances expose a number of useful instance properties and methods. These are prefixed with $ to differentiate them from user-defined properties. For example:

//var data1 = {a: 1}
//var vm = new Vue({
//	el: '#example',
//	data: data
//})
//
//vm.$data === data	// true
//vm.$el === document.getElementById('example')	// true
//
//// $watch is an instance method
//vm.$watch('a', function(newValue, oldValue){
//	// This callback will be called when `vm.a` changes
//})

// 自己写一个demo
!(function(){
	var obj2 = {
		message: 'djdjddj'
	}
	
	var vm2 = new Vue({
		el: '#app12',
		data: obj2
	})
	
	vm2.$data === data
	vm2.$el === document.querySelector('#app12')
	
	vm2.$watch('message', function(newValue, oldValue){
		console.log('watched')
	})

})()

// created lifeCircle hook:the created hook can be used to run code after an instance is created:

new Vue({
	data: {
		a: 1
	},
	created: function(){
		// `this` points to the vm instance
		console.log('a is: ' + this.a)
	}
})











