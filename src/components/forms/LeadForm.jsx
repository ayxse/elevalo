import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Send, UploadCloud } from "lucide-react";

export default function LeadForm({ onSubmit, submitStatus, t }) {
  const [step, setStep] = useState(0);
  const [logoName, setLogoName] = useState("");
  const [imageCount, setImageCount] = useState(0);
  const formRef = useRef(null);
  const isSubmitting = submitStatus === "submitting";
  const statusMessage = {
    config: t.contact.statusConfig,
    error: t.contact.statusError,
    success: t.contact.status,
    submitting: t.contact.statusSending
  }[submitStatus];

  function advanceStep() {
    const currentPanel = formRef.current?.querySelector(`[data-form-step="${step}"]`);
    const invalidField = [...(currentPanel?.querySelectorAll("input, select, textarea") || [])].find(
      (field) => !field.checkValidity()
    );

    if (invalidField) {
      invalidField.reportValidity();
      return;
    }

    setStep((value) => Math.min(value + 1, 2));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleFormSubmit(event) {
    if (step < 2) {
      event.preventDefault();
      advanceStep();
      return;
    }
    onSubmit(event);
  }

  return (
    <form ref={formRef} className="lead-form" encType="multipart/form-data" onSubmit={handleFormSubmit}>
      <div className="form-progress" aria-label={`${t.contact.stepLabel} ${step + 1} ${t.contact.stepOf} 3`}>
        <div className="progress-copy"><span>{t.contact.stepLabel} {step + 1} {t.contact.stepOf} 3</span><strong>{t.contact.steps[step]}</strong></div>
        <div className="progress-track" aria-hidden="true"><span style={{ width: `${((step + 1) / 3) * 100}%` }} /></div>
        <div className="progress-steps" aria-hidden="true">
          {t.contact.steps.map((item, index) => <span className={index <= step ? "active" : ""} key={item}>{index + 1}<small>{item}</small></span>)}
        </div>
      </div>

      <fieldset className="form-step-panel" data-form-step="0" hidden={step !== 0}>
        <legend>{t.contact.fields.contactSection}</legend>
        <label>{t.contact.fields.businessName}<input type="text" name="businessName" autoComplete="organization" placeholder={t.contact.fields.businessPlaceholder} required /></label>
        <label>{t.contact.fields.clientEmail}<input type="email" name="clientEmail" autoComplete="email" placeholder={t.contact.fields.clientEmailPlaceholder} required /></label>
        <label>{t.contact.fields.phone} <small>{t.contact.optional}</small><input type="tel" name="phone" autoComplete="tel" placeholder={t.contact.fields.phonePlaceholder} /></label>
        <label className="checkbox-field"><input type="checkbox" name="useWhatsapp" /><span>{t.contact.fields.useWhatsapp}</span></label>
        <label>{t.contact.fields.businessType}<input type="text" name="businessType" list="business-type-options" autoComplete="organization-title" placeholder={t.contact.fields.businessTypePlaceholder} required /><small className="field-hint">{t.contact.fields.businessTypeHint}</small></label>
        <datalist id="business-type-options">{t.contact.fields.businessOptions.map((option) => <option key={option} value={option} />)}</datalist>
        <label>{t.contact.fields.location} <small>{t.contact.optional}</small><input type="text" name="location" autoComplete="address-level2" placeholder={t.contact.fields.locationPlaceholder} /></label>
      </fieldset>

      <fieldset className="form-step-panel" data-form-step="1" hidden={step !== 1}>
        <legend>{t.contact.fields.contentSection}</legend>
        <label>{t.contact.fields.projectType}<select name="projectType" defaultValue="" required><option value="" disabled>{t.contact.fields.select}</option>{t.contact.fields.projectTypeOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>{t.contact.fields.goal}<select name="goal" defaultValue="" required><option value="" disabled>{t.contact.fields.select}</option>{t.contact.fields.goalOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label className="full-field">{t.contact.fields.services}<textarea name="services" rows="5" placeholder={t.contact.fields.servicesPlaceholder} required /></label>
        <label>{t.contact.fields.referenceSite} <small>{t.contact.optional}</small><input type="url" name="referenceSite" placeholder={t.contact.fields.referenceSitePlaceholder} /></label>
        <label>{t.contact.fields.styleNotes} <small>{t.contact.optional}</small><textarea name="styleNotes" rows="4" placeholder={t.contact.fields.styleNotesPlaceholder} /></label>
      </fieldset>

      <fieldset className="form-step-panel" data-form-step="2" hidden={step !== 2}>
        <legend>{t.contact.fields.uploadSection}</legend>
        <p className="upload-note">{t.contact.fields.uploadHint}</p>
        <label className="upload-field">
          <span>{t.contact.fields.logo} <small>{t.contact.optional}</small></span>
          <span className="upload-dropzone"><UploadCloud /><strong>{t.contact.uploadAction}</strong><small>{logoName ? `${t.contact.selectedFile}: ${logoName}` : t.contact.uploadLogoHelp}</small></span>
          <input type="file" name="logo" accept="image/*,.pdf,.svg" onChange={(event) => setLogoName(event.target.files?.[0]?.name || "")} />
        </label>
        <label className="upload-field">
          <span>{t.contact.fields.images} <small>{t.contact.optional}</small></span>
          <span className="upload-dropzone"><UploadCloud /><strong>{t.contact.uploadAction}</strong><small>{imageCount ? `${imageCount} ${t.contact.selectedFiles}` : t.contact.uploadImagesHelp}</small></span>
          <input type="file" name="businessImages" accept="image/*" multiple onChange={(event) => setImageCount(event.target.files?.length || 0)} />
        </label>
        <label>{t.contact.fields.vision} <small>{t.contact.optional}</small><textarea name="vision" rows="3" placeholder={t.contact.fields.visionPlaceholder} /></label>
        <label>{t.contact.fields.mission} <small>{t.contact.optional}</small><textarea name="mission" rows="3" placeholder={t.contact.fields.missionPlaceholder} /></label>
        <label className="full-field">{t.contact.fields.details} <small>{t.contact.optional}</small><textarea name="details" rows="4" placeholder={t.contact.fields.detailsPlaceholder} /></label>
      </fieldset>

      <div className="form-actions">
        {step > 0 && <button className="form-back-button" type="button" onClick={() => setStep((value) => value - 1)}><ArrowLeft />{t.contact.back}</button>}
        {step < 2 ? (
          <button className="form-next-button" type="button" onClick={advanceStep}>{t.contact.next}<ArrowRight /></button>
        ) : (
          <button className="form-submit-button" type="submit" disabled={isSubmitting}>{isSubmitting ? t.contact.statusSending : t.contact.submit}<Send /></button>
        )}
      </div>
      {statusMessage && <p className={`form-status ${submitStatus}`} aria-live="polite">{statusMessage}</p>}
    </form>
  );
}
