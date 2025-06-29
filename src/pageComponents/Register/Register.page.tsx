import React from "react";
import { UserAuthForm } from "./molecules/UserAuthForm";
// eslint-disable-next-line react-hooks/rules-of-hooks
import { useServerTranslation } from "~/i18n";

export const Register = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useServerTranslation();

  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {t("register.title")}
        </h1>
      </div>
      <UserAuthForm />
    </div>
  );
};
