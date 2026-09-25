import { useEffect, useState } from "react";

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

  return (
    <>
      <h1>UPLOAD</h1>
      <form method="post">
        <p>
          <label>Title: </label>
          <input type="text" name="username" id="title" />
        </p>
        <p>
          <label>Description: </label>
          <input type="text" name="username" id="description" />
        </p>
        <div>
          <label>Category: </label>
          <select>
            <option value={"category1"}>category 1</option>
            <option value={"category2"}>category 2</option>
            <option value={"category3"}>category 3</option>
          </select>
        </div>
        <div>
          <label>Upload File: </label>
          <input type="file" accept="image/*" onChange={handleUpload} />
          <br />
          {preview && <img src={preview} style={{ width: "300px" }} />}
        </div>
      </form>
    </>
  );
}

export default Upload;
