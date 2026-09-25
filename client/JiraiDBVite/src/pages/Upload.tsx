import { useState } from "react";
import { upload } from "../utils/uploadServices";

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

  //Form submission
  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("categorySelector") as string;
    const image = imageFile as File;

    const result = await upload(title, description, category, image);
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
