const apiURL = "http://localhost:3000";

export const createUpload = async (
  title: string,
  description: string,
  category: string,
) => {
  const response = await fetch(`${apiURL}/Clothes/upload`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, category }),
  });

  if (!response.ok) {
    throw new Error("Failed to create upload");
  }

  return response.json();
};

export const uploadImageToCloud = async (uploadURL: string, image: File) => {
  const response = await fetch(uploadURL, {
    method: "PUT",
    headers: {
      "Content-Type": image.type,
    },
    body: image,
  });

  if (!response.ok) {
    throw new Error("Failed to upload to R2");
  }

  return response.ok;
};

export const completeUpload = async (uploadId: string) => {
  const response = await fetch(
    `${apiURL}/Clothes/upload/${uploadId}/complete`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to complete upload");
  }

  return response.ok;
};
