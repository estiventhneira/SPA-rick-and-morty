const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route;
    if (validRoute === "/") {
      return route;
    } else {
      return "/:id";
    }
  }
  return `/${route}`;
};

export default resolveRoutes;

/* 
const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }
  return `/${route}`;
};

export default resolveRoutes; */
