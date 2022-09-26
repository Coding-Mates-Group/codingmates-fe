import Head from "next/head";
import React, { FC } from "react";
import layoutTypes from "../types/layout";
import metaData from "../types/metaData";

import defaultData from "../public/defaultData.json";
import Navigation from "./Navigation";

interface Props {
  children: React.ReactNode;
  navigation?: boolean;
  layoutType?: layoutTypes;
  metaData?: metaData;
}

const Layout: FC<Props> = ({
  layoutType = "maxWidthSet",
  navigation = true,
  metaData,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{metaData?.title ?? defaultData.title}</title>
        <meta
          name="description"
          content={metaData?.description ?? defaultData.description}
        />
        <meta name="author" content={metaData?.author ?? defaultData.author} />
      </Head>
      {navigation && <Navigation />}
      <main
        className={
          layoutType === "maxWidthSet"
            ? "max-width-layout"
            : "full-width-layout"
        }
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
