export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "<AdminDashboardPage />",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: "<CreateStudentPage />",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "<CreateFacultyPage />",
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: "<CreateAdminPage />",
      },
    ],
  },
];

export const adminRoutes = adminPath.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({ path: item.path, element: item.element });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({ path: child.path, element: child.element });
    });
  }

  return acc;
}, []);

console.log(adminRoutes);
