import {
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
} from "@refinedev/antd";
import { Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/nextjs-router";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import { Header } from "@components/header";
import { ColorModeContextProvider } from "@contexts";
import "@refinedev/antd/dist/reset.css";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp, ConfigProvider } from "antd";
import { appWithTranslation, useTranslation } from "next-i18next";
import { authProvider } from "src/authProvider";
import { TbCategoryFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { FaMicrophoneLines } from "react-icons/fa6";
import { IoMusicalNotesSharp } from "react-icons/io5";
import axios from "axios";
import nookies from "nookies";

const API_URL = "http://localhost:3000/api/v1";
const axiosInstance = axios.create({
  baseURL: API_URL,
});
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${nookies.get()["auth"]}`;
  return config;
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const renderComponent = () => {
    if (Component.noLayout) {
      return <Component {...pageProps} />;
    }

    return (
      <ThemedLayoutV2
        Header={() => <Header sticky />}
        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
      >
        <Component {...pageProps} />
      </ThemedLayoutV2>
    );
  };

  return (
    <>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider(API_URL, axiosInstance)}
                notificationProvider={useNotificationProvider}
                authProvider={authProvider}
                // i18nProvider={i18nProvider}
                resources={[
                  {
                    name: "users",
                    list: "/users",
                    create: "/users/create",
                    edit: "/users/edit/:id",
                    show: "/users/show/:id",
                    meta: { label: "Người dùng ", icon: <FaUser /> },
                  },
                  {
                    name: "categories",
                    list: "/categories",
                    create: "/categories/create",
                    edit: "/categories/edit/:id",
                    show: "/categories/show/:id",
                    meta: { label: "Danh mục ", icon: <TbCategoryFilled /> },
                  },
                  {
                    name: "singers",
                    list: "/singers",
                    create: "/singers/create",
                    edit: "/singers/edit/:id",
                    show: "/singers/show/:id",
                    meta: { label: "Ca sĩ ", icon: <FaMicrophoneLines /> },
                  },
                  {
                    name: "songs",
                    list: "/songs",
                    create: "/songs/create",
                    edit: "/songs/edit/:id",
                    show: "/songs/show/:id",
                    meta: { label: "Bài hát ", icon: <IoMusicalNotesSharp /> },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "s7Ojt5-NuQvpU-atjuUa",
                }}
              >
              
                {renderComponent()}
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
