const baseUrl = "https://662f32c943b6a7dce30ea774.mockapi.io/api/v2/users";

export const retrieveUsers = async () => {
  const result = await fetch(`${baseUrl}`, {
    cache: "no-store",
  });
  //Purposely added timeout function to simulate loading effect
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await result.json();
};

export const retrieveUserById = async (userId: string) => {
  const result = await fetch(`${baseUrl}/${userId}`);
  return await result.json();
};
