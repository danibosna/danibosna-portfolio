import { useModalStore } from "@/components/Modal/application/useModalStore";
import { ModalType } from "@/types/modal-type-enum";
import { navigate } from "astro:transitions/client";

export type ClickFnMappings = {
  [key: string]: (id?: string) => string | void;
};

export const useDynamicRoutes = (): ClickFnMappings => {
  const { toggleShowModal, setModalType } = useModalStore();

  const dynamicRoutesFnMappings: ClickFnMappings = {
    defaultKey: () => "",
    back: () => window.history.back(),
    goToGithub: () => {
      navigate("https://github.com/danibosna");
    },
    addInsurers: () => `/configuracion/aseguradoras/agregar/nueva-aseguradora`,
    addTeam: () => `/configuracion/el-team/agregar/nuevo-usuario`,
    editProfile: (id) => `/configuracion/mi-perfil/editar/${id ?? "test-ID"}`,
    addProspect: () => `/prospectos/agregar/nuevo-prospecto`,
    addCustomer: () => `/clientes/agregar/nuevo-cliente`,
    addNews: () => {
      toggleShowModal();
    },
    addTraining: () => {
      toggleShowModal();
    },
  };

  return dynamicRoutesFnMappings;
};
