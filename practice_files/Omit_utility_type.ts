
/*
type User = {
  id: number
  username: string
  role: "member" | "contributor" | "admin"
}

// partial type

type UpdatedUser = Partial<User>

let nextUserId = 1

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id:  nextUserId++, username: "jane_doe", role: "contributor" },
];

function updateUser(id: number, updates: UpdatedUser){
  const userFound = users.find(userObj => userObj.id === id)
  if(!userFound) {
    console.error("Not found")
    return
  }
  Object.assign(userFound, updates)
}

function addNewUser(newUser: Omit<User,"id">): User {
  const user: User = { 
    id: nextUserId++,
    ...newUser
  }
  users.push(user)
  return user

}

addNewUser({ username: "piotr_s", role: "member" })
console.log(users)
*/