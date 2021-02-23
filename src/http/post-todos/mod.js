import * as data from 'https://registry.begin.com/begin-data@master/mod.ts'

export default async function create(req) {
  todo.created = todo.created || Date.now()
  todo.completed = !!todo.completed
  await data.set({
    table: 'todos',
    ...todo
  })
  return {
    statusCode: 302,
    headers: {
      'location': '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}