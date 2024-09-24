// const arr = [1, 2, 3, 4];

// const result = arr.reduce((acc, item) => {
//     console.log(acc, item);
//     acc.push(acc + item)

//     return acc;
// }, []);

// const result = arr + 5;

// export const adminPaths = [
//     {
//         name: "Dashboard",
//         path: "dashboard",
//         element: "AdminDashboard"
//     },
//     {
//         name: "User Management",
//         children: [
//             {
//                 name: "Create Admin",
//                 path: "create-admin",
//                 element: "CreateAdmin"
//             },
//             {
//                 name: "Create Faculty",
//                 path: "create-faculty",
//                 element: "CreateFaculty"
//             },
//             {
//                 name: "Create Student",
//                 path: "create-student",
//                 element: "CreateStudent"
//             },
//         ]
//     }
// ]

// export const adminRoutes = adminPaths.reduce((acc, item) => {
//     if (item?.path && item?.name) {
//         acc.push({
//             key: item.name,
//             label: "NAVLINK"
//         });
//     }

//     if (item?.children) {
//         acc.push({
//             key: item.name,
//             label: item.name,
//             children: item.children.map((child) => ({
//                 key: child.name,
//                 label: "NAVLINK"
//             }))
//         })
//     }

//     return acc;

// }, []);

// export const adminRoutes = adminPaths.reduce((acc, item) => {
//     if (item?.path && item?.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         });

//     }

//     if (item?.children) {
//         item.children.forEach(child => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }

//     return acc;

// }, []);

// console.log(adminRoutes);


const obj = {
    name: "Mezba",
    age: 34,
    greet: () => {
        return "Hello world"
    }
}

console.log(JSON.stringify(obj));