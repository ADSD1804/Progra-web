const express = require('express');
const { createClient } = require("@libsql/client"); 
const bodyParser = require('body-parser'); 
const cors = require('cors')

const user = createClient({
  url: "libsql://database-andres-david.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTcwMzc0MDAsImlkIjoiMTEwMzBkNmQtZTM5OS00ZWVmLWIwZTItYTkxOTY1Y2RiZTQ0In0.mDuO_BgVwelW5dG0MNVxHQpoW6tPcQ889g2XKnOJ01wsfG9p6uFAjZD2FJWoBzzcfWUJHrO40go3vV82svIbCQ",
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;   

app.get('/categories', async (req, res) => {
  const categories = await user.execute("SELECT * FROM categories"); 
    res.json(categories.rows);
}); 

app.post('/categories', async (req, res) => {
  const { name, image } = req.body;

  const categories = await user.execute(`
    INSERT INTO categories (name, image) VALUES ("${name}", "${image}");`
  ); 
  res.json({ message: "Category created" + categories.name});
}); 

app.put('/categories/:id', async (req, res) => {
  const { id } = req.params;
  const { name, image } = req.body;
  await user.execute(`UPDATE categories SET name = "${name}", image = "${image}" WHERE id = ${id}`); 
  res.json({message: "Category updated"});
});

app.delete('/categories/:id', async (req, res) => {
  const { id } = req.params;
  await user.execute(`DELETE FROM categories WHERE id = ${id}`); 
  res.json({message: "Category deleted"});
}); 

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
}); 