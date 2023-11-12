import { DocsConfig } from "@/types";

import { ROUTES } from "@/utils/routes";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: ROUTES.home,
    },
    {
      title: "Catalog",
      href: ROUTES.catalog,
    },
    {
      title: "Purchase History",
      href: ROUTES.purchaseHistory,
    },
  ],
};
