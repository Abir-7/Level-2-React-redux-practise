import { Link } from "react-router-dom";
import { IAdminOption } from "../routes/admin.route";
import { ReactNode } from "react";

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export const sidebarItemGenerator = (items: IAdminOption[], role: string) => {
  const adminSideNav = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: <Link to={`/${role}/${item.path}`}>{item.name}</Link>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <Link to={`/${role}/${child.path}`}>{child.name}</Link>,
        })),
      });
    }
    console.log(acc);
    return acc;
  }, []);
  return adminSideNav;
};
