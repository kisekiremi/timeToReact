type IReqMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

/**
 *
 * @param url 略
 * @param method get / post ，get直接把参数拼接到 url 上，post 传入 options.body
 * @param options options.headers + options.body（if method 是 post）,
 * @returns
 */
export const fetchAPI = async (url: string, method: IReqMethod, options: RequestInit = {}): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options,
      body: JSON.stringify(options.body)
    })

    if (!response.ok) {
      console.error('HTTP error:', response.status, response.statusText)
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}
