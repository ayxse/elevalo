import { useEffect, useState } from "react";
import { createProjectRequest, isProjectRequestConfigured } from "./api/projectRequests";
import SiteFrame from "./components/layout/SiteFrame";
import { translations } from "./data/translations";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ProcessPage from "./pages/ProcessPage";
import ProjectsPage from "./pages/ProjectsPage";
import RequestPage from "./pages/RequestPage";
import ServicesPage from "./pages/ServicesPage";
import { getPageFromRoute, serviceRouteIds } from "./routing";

export default function App() {
  const [language, setLanguage] = useState("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submittedRequestId, setSubmittedRequestId] = useState("");
  const [activeStep, setActiveStep] = useState(null);
  const [route, setRoute] = useState(() => (typeof window === "undefined" ? "" : window.location.hash));
  const t = translations[language];
  const page = getPageFromRoute(route);

  useEffect(() => {
    function handleHashChange() {
      setRoute(window.location.hash);
      setMenuOpen(false);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const serviceTarget = serviceRouteIds.includes(route.slice(1)) ? route.slice(1) : null;
    window.requestAnimationFrame(() => {
      if (serviceTarget) {
        document.getElementById(serviceTarget)?.scrollIntoView({ block: "start" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }, [route]);

  async function handleSubmit(event, submission) {
    event.preventDefault();

    if (!isProjectRequestConfigured()) {
      setSubmitStatus("config");
      return;
    }

    const form = event.currentTarget;
    setSubmitStatus("submitting");

    try {
      await createProjectRequest(form, submission);
      form.reset();
      setSubmittedRequestId(submission.requestId);
      setSubmitStatus("success");
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }
  }

  let content;
  switch (page) {
    case "request":
      content = <RequestPage
        onReset={() => {
          setSubmitStatus("idle");
          setSubmittedRequestId("");
        }}
        onSubmit={handleSubmit}
        requestId={submittedRequestId}
        submitStatus={submitStatus}
        t={t}
      />;
      break;
    case "services":
      content = <ServicesPage t={t} />;
      break;
    case "projects":
      content = <ProjectsPage t={t} />;
      break;
    case "pricing":
      content = <PricingPage t={t} />;
      break;
    case "process":
      content = <ProcessPage activeStep={activeStep} setActiveStep={setActiveStep} t={t} />;
      break;
    default:
      content = <HomePage activeStep={activeStep} setActiveStep={setActiveStep} t={t} />;
  }

  return (
    <SiteFrame
      language={language}
      menuOpen={menuOpen}
      onLanguageSelect={setLanguage}
      page={page}
      setMenuOpen={setMenuOpen}
      t={t}
    >
      {content}
    </SiteFrame>
  );
}
