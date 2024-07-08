import { ReactNode } from "react";
import { IAdminOption } from "../routes/admin.route";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export const routeGenerator = (routes: IAdminOption[]) => {
  const adminRoutes = routes.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({ path: item.path, element: item.element });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({ path: child.path, element: child.element });
      });
    }
    console.log(acc);
    return acc;
  }, []);

  return adminRoutes;
};
