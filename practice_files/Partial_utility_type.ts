
/*
type User = {
  id: number
  username: string
  role: "member" | "contributor" | "admin"
}

// partial type

type UpdatedUser = Partial<User>

const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_doe", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" }
];

function updateUser(id: number, updates: UpdatedUser){
  const user = users.find(userObj => userObj.id === id)
  if(!user) {
    console.error("Not found")
    return
  }
  Object.assign(user, updates)
}

updateUser(1, { username: "new_jhon_doe"});
updateUser(3, { role: "member"});
*/