import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDV7hR6zU0zaCF3e5BL8pIYH2NObycGiNw',
  authDomain: 'todo-list-test-20fce.firebaseapp.com',
  databaseURL: 'https://todo-list-test-20fce.firebaseio.com',
  storageBucket: 'todo-list-test-20fce.appspot.com',
};

firebase.initializeApp(config);

export const todosRef = firebase.database().ref('todos/');

export const addTodo = (text) => {
  const todo = {
    text,
    completed: false,
  };
  return firebase.database().ref('todos/').push(todo);
};

