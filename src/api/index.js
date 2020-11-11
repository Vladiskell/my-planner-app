import { firestore } from '../firebase/firebase.config';

const todosRef = (category) => firestore.collection('todos').doc(category).collection('items');
const reportsRef = (category) => firestore.collection('todos').doc(category).collection('report');

// get todo list from database
export const getTodos = async (category) => {
    const data = await todosRef(category).get();

    return data.docs.map((doc) => doc.data());
};

// post new todo item in database
export const postTodo = (category, title) => {
    return todosRef(category)
        .add({
            title,
            description: '',
            statuses: {
                completed: false,
                important: false,
                process: false,
            },
            timesheet: {
                time: 0,
            },
            subItems: [],
        })
        .then(async function (docRef) {
            await todosRef(category).doc(docRef.id).update({
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
        }
    };

    const todo = await todosRef(category).doc(id);
    todo.update(updatesValue());
};

// post todo item timesheet
export const postTimesheet = async (category, id, time) => {
    const todo = await todosRef(category).doc(id);
    todo.update({
        'timesheet.time': time,
    });
};

// delete todo item from database
export const deleteTodo = (category, id) => todosRef(category).doc(id).delete();

// get todo list from database
export const getReports = async (category) => {
    const data = await reportsRef(category).get();

    return data.docs.map((doc) => doc.data());
};

// post reports todo in database
export const postReport = (category, title, id, status) => {
    return reportsRef(category)
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

// delete reports todo in database
export const deleteReport = async (category, id) => {
    const data = await reportsRef(category).get();
    const item = async () => data.docs.find((doc) => id === doc.data().id);

    item().then((docRef) => {
        reportsRef(category).doc(docRef.id).delete();
    });
};
