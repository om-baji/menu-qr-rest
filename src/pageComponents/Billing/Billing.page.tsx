import { BillingForm } from "./molecules/BillingForm";
import { DashboardHeader } from "../Dashboard/molecules/Header";
import { DashboardShell } from "../Dashboard/molecules/Shell";
// eslint-disable-next-line react-hooks/rules-of-hooks
import { useServerTranslation } from "~/i18n";

export const dynamic = "force-dynamic";

export const BillingPage = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useServerTranslation();

  return (
    <DashboardShell>
      <DashboardHeader
        heading={t("billing.heading")}
        text={t("billing.description")}
      />
      <BillingForm />
    </DashboardShell>
  );
};
