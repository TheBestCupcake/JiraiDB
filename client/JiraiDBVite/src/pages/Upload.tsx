import { useEffect, useState } from "react";
import {
  completeUpload,
  createUpload,
  uploadImageToCloud,
} from "../utils/uploadServices";

function Upload() {
  //Upload image
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUpload = (uploadEvent: React.ChangeEvent<HTMLInputElement>) => {
    const file = uploadEvent.target.files?.[0];

    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  //Deletes the url when it unmounts.
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const [isUploading, setIsUploading] = useState(false);

  //Form submission
  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    if (!imageFile) {
      throw new Error("Image Not Found");
    }

    setIsUploading(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const title = formData.get("title") as string;
      const description = formData.get("description") as string;
      const category = formData.get("categorySelector") as string;

      //Get presigned R2 url.
      const uploadURL = await createUpload(title, description, category);

      //Upload image to R2
      await uploadImageToCloud(uploadURL, imageFile);

      //Update the database to complete upload.
      await completeUpload(uploadURL);

      e.currentTarget.reset();
      setImageFile(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <>
      <h1>UPLOAD</h1>
      <form method="post" onSubmit={handleFormSubmit}>
        <p>
          <label>Title: </label>
          <input type="text" name="title" id="title" />
        </p>
        <p>
          <label>Description: </label>
          <input type="text" name="description" id="description" />
        </p>
        <div>
          <label>Category: </label>
          <select name="categorySelector" id="categorySelector">
            <option value={"category1"}>category 1</option>
            <option value={"category2"}>category 2</option>
            <option value={"category3"}>category 3</option>
          </select>
        </div>
        <div>
          <label>Upload File: </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            id="image"
            name="image"
          />
          <br />
          {preview && <img src={preview} style={{ width: "300px" }} />}
        </div>
        <p>
          <input type="submit" value="Upload" />
        </p>
      </form>
    </>
  );
}

export default Upload;
