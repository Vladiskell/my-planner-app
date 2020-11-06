import { firestore } from '../firebase/firebase.config';

const todoListRef = (category) => firestore.collection('todos').doc(category).collection('items');
const reportListRef = (category) => firestore.collection('todos').doc(category).collection('report');

// get todo list from database
export const getTodoList = async (category) => {
    const data = await todoListRef(category).get();

    return data.docs.map((doc) => doc.data());
};

// post new todo item in database
export const postTodo = (category, title) => {
    return todoListRef(category)
        .add({
            title,
            description: '',
            statuses: {
                completed: false,
                important: false,
                process: false,
            },
            timesheet: {
                status: false,
                timeStart: new Date(),
            },
            subItems: [],
        })
        .then(async function (docRef) {
            await todoListRef(category).doc(docRef.id).update({
                id: docRef.id,
            });
            const data = await docRef.get();
            return data.data();
        });
};

// update todo item from database
export const updateTodo = async (category, id, updateType, value) => {
    const updatesValue = () => {
        switch (updateType) {
            case 'title':
                return {
                    title: value,
                };
            case 'description':
                return {
                    description: value,
                };
            case 'completed':
                return {
                    'statuses.completed': value,
                    'statuses.important': false,
                    'statuses.process': false,
                };
            case 'important':
                return {
                    'statuses.completed': false,
                    'statuses.important': value,
                };
            case 'process':
                return {
                    'statuses.completed': false,
                    'statuses.process': value,
                };
            case 'timer': {
                return {
                    'timesheet.status': value,
                };
            }
        }
    };

    const todo = await todoListRef(category).doc(id);
    todo.update(updatesValue());
};

// delete todo item from database
export const deleteTodo = (category, id) => todoListRef(category).doc(id).delete();

// get todo list from database
export const getReportList = async (category) => {
    const data = await reportListRef(category).get();

    return data.docs.map((doc) => doc.data());
};

// post report todo in database
export const postReport = (category, title, id, status) => {
    return reportListRef(category)
        .add({
            id,
            title,
            status,
            date: Date.now(),
        })
        .then(async (docRef) => {
            const data = await docRef.get();
            return data.data();
        });
};
