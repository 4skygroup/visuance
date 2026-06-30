import { useTranslation } from "react-i18next";

export default function Policy() {
  const { t } = useTranslation();

  const collectedData = [
    t("privacy.collectedData.item1"),
    t("privacy.collectedData.item2"),
    t("privacy.collectedData.item3"),
  ];

  const collectedFields = [
    t("privacy.collectedData.field1"),
    t("privacy.collectedData.field2"),
    t("privacy.collectedData.field3"),
    t("privacy.collectedData.field4"),
    t("privacy.collectedData.field5"),
    t("privacy.collectedData.field6"),
    t("privacy.collectedData.field7"),
    t("privacy.collectedData.field8"),
  ];

  const purposes = [
    t("privacy.purposes.item1"),
    t("privacy.purposes.item2"),
    t("privacy.purposes.item3"),
    t("privacy.purposes.item4"),
    t("privacy.purposes.item5"),
  ];

  const legalBases = [
    t("privacy.legalBases.item1"),
    t("privacy.legalBases.item2"),
    t("privacy.legalBases.item3"),
  ];

  const rights = [
    t("privacy.rights.item1"),
    t("privacy.rights.item2"),
    t("privacy.rights.item3"),
    t("privacy.rights.item4"),
    t("privacy.rights.item5"),
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 border-b border-slate-200 pb-10">
          <h1 className="mt-4 text-4xl font-bold text-visuance-gradient-blue md:text-5xl">
            {t("privacy.title")}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            {t("privacy.description")}
          </p>

          <p className="mt-6 text-sm text-slate-500">
            {t("privacy.lastUpdate")}
          </p>
        </div>

        <div className="space-y-8">
          {/* Collecte */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                {t("privacy.collectedData.title")}
              </h2>
            </div>

            <div className="space-y-6 px-8 py-6">
              <p className="text-slate-700">
                {t("privacy.collectedData.description")}
              </p>

              <ul className="space-y-3">
                {collectedData.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-visuance-gradient-blue" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-visuance-gradient-blue">
                  {t("privacy.collectedData.fieldsTitle")}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {collectedFields.map((field) => (
                    <span
                      key={field}
                      className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Utilisation */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                {t("privacy.purposes.title")}
              </h2>
            </div>

            <div className="grid gap-4 p-8 md:grid-cols-2">
              {purposes.map((purpose) => (
                <div
                  key={purpose}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700"
                >
                  {purpose}
                </div>
              ))}
            </div>
          </section>

          {/* Base légale */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                {t("privacy.legalBases.title")}
              </h2>
            </div>

            <div className="space-y-4 p-8">
              {legalBases.map((base) => (
                <div
                  key={base}
                  className="rounded-xl border-l-4 border-visuance-gradient-blue bg-blue-50 p-4 text-slate-700"
                >
                  {base}
                </div>
              ))}
            </div>
          </section>

          {/* Conservation */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                {t("privacy.retention.title")}
              </h2>
            </div>

            <div className="space-y-6 p-8">
              <div className="flex gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-visuance-gradient-blue" />
                <div>
                  <p className="font-semibold text-visuance-gradient-blue">
                    {t("privacy.retention.prospectsTitle")}
                  </p>
                  <p className="text-slate-700">
                    {t("privacy.retention.prospectsDescription")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-visuance-gradient-blue" />
                <div>
                  <p className="font-semibold text-visuance-gradient-blue">
                    {t("privacy.retention.clientsTitle")}
                  </p>
                  <p className="text-slate-700">
                    {t("privacy.retention.clientsDescription")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Partage */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                {t("privacy.sharing.title")}
              </h2>
            </div>

            <div className="space-y-4 p-8">
              <div className="rounded-2xl border border-slate-200 p-4 text-slate-700">
                {t("privacy.sharing.item1")}
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 text-slate-700">
                {t("privacy.sharing.item2")}
              </div>

              <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                <p className="font-semibold text-green-800">
                  {t("privacy.sharing.notice")}
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                {t("privacy.cookies.title")}
              </h2>
            </div>

            <div className="p-8">
              <div className="rounded-2xl border border-visuance-gradient-blue/20 bg-visuance-gradient-blue/5 p-6">
                <ul className="space-y-3 text-slate-700">
                  <li>• {t("privacy.cookies.item1")}</li>
                  <li>• {t("privacy.cookies.item2")}</li>
                  <li>• {t("privacy.cookies.item3")}</li>
                </ul>
              </div>

              <p className="mt-5 text-slate-600">
                {t("privacy.cookies.description")}
              </p>
            </div>
          </section>

          {/* Droits */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                {t("privacy.rights.title")}
              </h2>
            </div>

            <div className="p-8">
              <div className="rounded-3xl border border-visuance-gradient-blue/20 bg-visuance-gradient-blue/5 p-6">
                <div className="grid gap-3 md:grid-cols-2">
                  {rights.map((right) => (
                    <div
                      key={right}
                      className="rounded-xl bg-white p-3 text-slate-700"
                    >
                      {right}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-visuance-gradient-blue p-6 text-white">
                <p className="font-semibold">
                  {t("privacy.rights.contactTitle")}
                </p>

                <p className="mt-2 text-white/90">
                  {t("privacy.company.email")}
                </p>
              </div>
            </div>
          </section>

          {/* Sécurité */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                {t("privacy.security.title")}
              </h2>
            </div>

            <div className="p-8">
              <p className="leading-8 text-slate-700">
                {t("privacy.security.description")}
              </p>
            </div>
          </section>

          {/* Modification */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                {t("privacy.updates.title")}
              </h2>
            </div>

            <div className="p-8">
              <p className="leading-8 text-slate-700">
                {t("privacy.updates.description")}
              </p>
            </div>
          </section>

          {/* Footer */}
          <section className="rounded-3xl bg-visuance-gradient-blue p-8 text-white">
            <h2 className="text-xl font-semibold">
              {t("privacy.footer.title")}
            </h2>

            <p className="mt-3 text-white/90">{t("privacy.company.email")}</p>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/70">
              {t("privacy.lastUpdate")}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
