import ResponseError from "@/interfaces/services/ResponseError"

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
}
const getOptions: RequestInit = {
  headers,
  method: "GET"
}
const deleteOptions = {
  headers,
  method: "DELETE"
}
const postOptions = (body: unknown) => ({
  headers,
  method: "POST",
  body: JSON.stringify(body)
})
const putOptions = (body: unknown) => ({
  headers,
  method: "PUT",
  body: JSON.stringify(body)
})
const patchOption = (body: unknown) => ({
  headers,
  method: "PATCH",
  body: JSON.stringify(body)
})

const onResponse = async <TResponse>(response: Response): Promise<TResponse> => {
  if (response.ok && [200, 204].includes(response.status)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Expected Response Type
    return await ((await response.json()) as Promise<TResponse>)
  } else throw new ResponseError("Bad fetch response", response)
}

export const get = async <TResponse>(url: string): Promise<TResponse> =>
  await fetch(url, getOptions).then<TResponse>(onResponse)
export const patch = async <TResponse>(url: string, body: unknown): Promise<TResponse> =>
  await fetch(url, patchOption(body)).then<TResponse>(onResponse)
export const post = async <TResponse>(url: string, body: unknown): Promise<TResponse> =>
  await fetch(url, postOptions(body)).then<TResponse>(onResponse)
export const put = async <TResponse>(url: string, body: unknown) =>
  await fetch(url, putOptions(body)).then<TResponse>(onResponse)
export const deleteRequest = async (url: string) => await fetch(url, deleteOptions).then(onResponse)
