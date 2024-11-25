const admin = {
  name: "Admin",
  email: "a@a.com",
  password: "123",
};

const employees = [
  {
    name: "John Doe",
    email: "e1@e.com",
    password: "e1",
  },
  {
    name: "Jane Smith",
    email: "e2@e.com",
    password: "e2",
  },
  {
    name: "Michael Brown",
    email: "e3@e.com",
    password: "e3",
  },
  {
    name: "Emily Johnson",
    email: "e4@e.com",
    password: "e4",
  },
  {
    name: "David Wilson",
    email: "e5@e.com",
    password: "e5",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem('admin',JSON.stringify(admin))
    localStorage.setItem('employees',JSON.stringify(employees))
}
export const getLocalStorage = () => {
    const admin = JSON.parse(localStorage.getItem('admin'))
    const employees = JSON.parse(localStorage.getItem('employees'))
    
    return {admin,employees}
}
