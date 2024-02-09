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
