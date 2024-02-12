"use server";
export async function getComment(formData: FormData) {
  const postId = formData.get("postId");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
}

export async function getAccounts(
  page: string,
  sortBy: string,
  order: string,
  limit: string
) {
  const response = await fetch(
    `https://65c28dc9f7e6ea59682b84bc.mockapi.io/api/v1/account-search?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}
