import * as data from 'https://registry.begin.com/begin-data@master/mod.ts'

export default async function todos(req) {
  let todos = await data.get({
    table: 'todos'
  })
  // Return oldest todo first
  todos.sort((a, b) => a.created > b.created)

  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      todos
    })
  }
}