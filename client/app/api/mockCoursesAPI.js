import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        name: 'JavaScript basic',
        description: 'JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.',
        image: 'http://itkids.dp.ua/images/2017/07/25/javscript-1.png',
        id: 0
    },
    {
        name: 'JavaScript advanced',
        description: 'JavaScript is huge. Like, really big. Like a bus. For elephants. Injected with growth hormones. In this guide well look at some of the numerous more advanced',
        image: 'http://itkids.dp.ua/images/2017/07/25/javscript-1.png',
        id: 1
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static getCourse(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, courses.filter(item => item.id == id)[0]));
            }, delay);
        });
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id == course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    course.id = generateId(course);
                    course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    courses.push(course);
                }

                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => {
                    course.id == courseId;
                });
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default CourseApi;