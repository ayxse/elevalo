import { useState } from "react";
import { FileImage, Images, Plus, UploadCloud, X } from "lucide-react";

function fileKey(file) {
  return `${file.name}-${file.size}-${file.lastModified}`;
}

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MultiFileUpload({
  actionLabel,
  addMoreLabel,
  galleryLabel,
  helpText,
  label,
  files,
  onFilesChange,
  optionalLabel,
  removeLabel,
  selectedLabel
}) {
  const [isDragging, setIsDragging] = useState(false);
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  function addFiles(fileList) {
    const existingFiles = new Set(files.map(fileKey));
    const newFiles = [...fileList].filter(
      (file) => file.type.startsWith("image/") && !existingFiles.has(fileKey(file))
    );

    onFilesChange([...files, ...newFiles]);
  }

  function removeFile(fileToRemove) {
    onFilesChange(files.filter((file) => fileKey(file) !== fileKey(fileToRemove)));
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    addFiles(event.dataTransfer.files);
  }

  return (
    <div className={`multi-file-upload full-field${isDragging ? " is-dragging" : ""}`}>
      <span className="multi-file-label">{label} <small>{optionalLabel}</small></span>
      <div
        className="upload-dropzone multi-file-dropzone"
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        {files.length ? <Plus /> : <UploadCloud />}
        <strong>{files.length ? addMoreLabel : actionLabel}</strong>
        <div className="upload-choice-row">
          <label className="upload-choice">
            <Images />
            <span>{galleryLabel}</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(event) => {
                addFiles(event.target.files);
                event.target.value = "";
              }}
            />
          </label>
        </div>
        <small>{helpText}</small>
      </div>

      {files.length > 0 && (
        <div className="selected-files" aria-live="polite">
          <div className="selected-files-header">
            <strong>{selectedLabel}</strong>
            <span>{files.length} · {formatFileSize(totalSize)}</span>
          </div>
          <ul>
            {files.map((file) => (
              <li key={fileKey(file)}>
                <FileImage aria-hidden="true" />
                <span>
                  <strong title={file.name}>{file.name}</strong>
                  <small>{formatFileSize(file.size)}</small>
                </span>
                <button
                  type="button"
                  title={`${removeLabel}: ${file.name}`}
                  aria-label={`${removeLabel}: ${file.name}`}
                  onClick={() => removeFile(file)}
                >
                  <X />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
