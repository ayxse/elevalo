export const serviceRouteIds = [
  "servicios-web",
  "servicios-identidad",
  "servicios-promocionales",
  "servicios-lanzamiento"
];

export function getPageFromRoute(route) {
  if (route === "#solicitud") return "request";
  if (route.startsWith("#servicios")) return "services";
  if (route === "#proyectos") return "projects";
  if (route === "#precios") return "pricing";
  if (route === "#proceso") return "process";
  return "home";
}
