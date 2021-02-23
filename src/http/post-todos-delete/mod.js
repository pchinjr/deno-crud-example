/* global Deno */
import * as data from 'https://registry.begin.com/begin-data@master/mod.ts'

export default async function destroy(req) {
  let searchParams = new URLSearchParams(req.body)
  let key = searchParams.get('key')
  await data.destroy({
    table: 'todos',
    key
  })
  return {
    statusCode: 302,
    headers: {
      'location': '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}