import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("blog.db");
db.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, user TEXT, time DATETIME DEFAULT CURRENT_TIMESTAMP)");

const posts = [
    {title:'Exam week has arrived', content:'Hopefully I will be successful, I should be able to do all the exams'},
    {title:'Does anyone have this?', content:'If you have an algebra book, I really need it. Meet me at the library today.'},
    {title:'Need to eat a lot!', content:'Yes, I need a lot of food intake before the exam'}
];

// Run a simple query
for (const posts of posts)
  db.query("INSERT INTO posts (title, content) VALUES (?,?)", [posts.title, posts.content]);

// Print out data in table
for (const [id, title, content, time] of db.query("SELECT id, title, content, time"))
  console.log(id, title, content, time);

// Close connection
db.close();