const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export async function fetchAPI(
  path: string,
  options: FetchOptions = {}
): Promise<any> {
  const defaultOptions: FetchOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_API_TOKEN && {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      }),
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const url = `${STRAPI_URL}/api${path}`;

  try {
    const response = await fetch(url, mergedOptions);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Strapi API Error:', error);
    throw error;
  }
}

// Example usage functions
export async function getProjects() {
  return fetchAPI('/projects?populate=*');
}

export async function getProject(slug: string) {
  return fetchAPI(`/projects?filters[slug][$eq]=${slug}&populate=*`);
}

export async function getAbout() {
  return fetchAPI('/about?populate=*');
}

export async function getSkills() {
  return fetchAPI('/skills?populate=*');
}
