import bycript from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bycript.hashSync('password', 10),
    isAdmin: true
  },

  {
    name: 'Innoc David',
    email: 'innoc@example.com',
    password: bycript.hashSync('password', 10),
    
  },

  {
    name: 'Banja Lotigo',
    email: 'lotigo@example.com',
    password: bycript.hashSync('password', 10),
  }
]

export default users;