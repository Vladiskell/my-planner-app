import { firestore } from '../firebase/firebase.config'
import { uuid } from 'uuidv4'

// post new todoList item in database
export const postTodo = (collectionName, todoText) => {
    return firestore
        .collection(collectionName)
        .add({
            id: uuid(),
            text: todoText,
            completed: false,
            important: false,
            process: false,
        })
        .then(function (docRef) {
            console.log('New todoList is added')
        })
        .catch(function (error) {
            console.error('Error! new todoList not added', error)
        })
}

// get todoList list from data base
export const getTodoList = async (collectionName) => {
    const data = await firestore.collection(collectionName).get()

    return data.docs.map((doc) => doc.data())
}

// delete todoList item from data base
export const deleteTodo = (collectionName, id) => {
    firestore
        .collection(collectionName)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().id === id) {
                    firestore
                        .collection(collectionName)
                        .doc(doc.id)
                        .delete()
                        .then(function () {
                            console.log('Todo was deleted')
                        })
                        .catch(function (error) {
                            console.error('Error deleting todoList: ', error)
                        })
                }
            })
        })
}

// set todoList item completed in data base
export const setTodoIsCompleted = (collectionName, id) => {
    firestore
        .collection(collectionName)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().id === id) {
                    firestore.collection(collectionName).doc(doc.id).update({
                        completed: !doc.data().completed,
                        important: false,
                        process: false,
                    })
                }
            })
        })
}

// set todoList item important in data base
export const setTodoIsImportant = (collectionName, id) => {
    firestore
        .collection(collectionName)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().id === id) {
                    firestore.collection(collectionName).doc(doc.id).update({
                        important: !doc.data().important,
                        completed: false,
                    })
                }
            })
        })
}

// set todoList item in process in data base
export const setTodoIsProcess = (collectionName, id) => {
    firestore
        .collection(collectionName)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().id === id) {
                    firestore.collection(collectionName).doc(doc.id).update({
                        process: !doc.data().process,
                        completed: false,
                    })
                }
            })
        })
}

// edit todoList item in data base
export const editTodo = (collectionName, id, todoText) => {
    firestore
        .collection(collectionName)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().id === id) {
                    firestore.collection(collectionName).doc(doc.id).update({
                        text: todoText,
                    })
                }
            })
        })
}

// set and edit todo item description
export const setTodoDescription = (collectionName, id, todoDescription) => {
    firestore
        .collection(collectionName)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().id === id) {
                    firestore.collection(collectionName).doc(doc.id).update({
                        description: todoDescription,
                    })
                }
            })
        })
}
