export default function LegalNotices() {
  const activities = [
    "Création de sites web",
    "Branding & identité visuelle",
    "UX/UI design",
    "Stratégie digitale",
    "Marketing et acquisition",
  ];

  const responsibilityLimits = [
    "Des erreurs ou omissions",
    "D’une indisponibilité temporaire du site",
    "De l’utilisation faite des informations présentes",
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 border-b border-slate-200 pb-10">
          <h1 className="mt-4 text-4xl font-bold text-visuance-gradient-blue md:text-5xl">
            Mentions légales
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Informations relatives à l’éditeur du site, à son hébergement, à son
            activité et aux conditions d’utilisation de Visuance.
          </p>
        </div>

        <div className="space-y-8">
          {/* Éditeur du site */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Qui édite ce site ?
              </h2>
            </div>

            <div className="p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Société</p>

                  <p className="mt-1 font-semibold text-visuance-gradient-blue">
                    Visuance Agency
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Contact</p>

                  <p className="mt-1 font-semibold text-visuance-gradient-blue">
                    contact@visuanceagency.com
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hébergement */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Où le site est-il hébergé ?
              </h2>
            </div>

            <div className="p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm text-slate-500">Hébergeur</p>

                  <p className="mt-1 font-semibold text-visuance-gradient-blue">
                    OVH Cloud
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm text-slate-500">Site web</p>

                  <a
                    href="https://www.ovhcloud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-medium text-visuance-gradient-blue hover:underline"
                  >
                    www.ovhcloud.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Activité */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Quelle est l’activité de Visuance ?
              </h2>
            </div>

            <div className="p-8">
              <p className="mb-6 text-slate-700">
                Visuance est une agence spécialisée dans la création et
                l’optimisation de solutions digitales.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {activities.map((activity) => (
                  <div
                    key={activity}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700"
                  >
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Comment sont protégés les contenus ?
              </h2>
            </div>

            <div className="space-y-6 p-8">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="font-semibold text-amber-900">
                  Protection des contenus
                </p>

                <p className="mt-3 leading-8 text-amber-800">
                  L’ensemble du contenu présent sur le site Visuance (textes,
                  images, graphismes, logos, vidéos, structure, etc.) est
                  protégé par le droit de la propriété intellectuelle.
                </p>
              </div>

              <p className="leading-8 text-slate-700">
                Toute reproduction, représentation, modification ou
                exploitation, totale ou partielle, sans autorisation écrite
                préalable est strictement interdite.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Quelle est notre responsabilité ?
              </h2>
            </div>

            <div className="p-8">
              <p className="mb-6 text-slate-700">
                Visuance s’efforce de fournir des informations fiables et à
                jour. Cependant, l’éditeur ne peut être tenu responsable :
              </p>

              <div className="space-y-4">
                {responsibilityLimits.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border-l-4 border-visuance-gradient-blue bg-blue-50 p-4 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Liens externes */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Qu’en est-il des sites tiers ?
              </h2>
            </div>

            <div className="p-8">
              <div className="rounded-2xl border border-visuance-gradient-blue/20 bg-visuance-gradient-blue/5 p-6">
                <p className="leading-8 text-slate-700">
                  Le site peut contenir des liens vers d’autres sites web.
                  Visuance décline toute responsabilité concernant le contenu de
                  ces sites tiers.
                </p>
              </div>
            </div>
          </section>

          {/* Données personnelles */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Comment sont traitées les données personnelles ?
              </h2>
            </div>

            <div className="p-8">
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-slate-700">
                  Les données personnelles collectées via le site sont traitées
                  conformément à la réglementation en vigueur et à notre
                  politique de confidentialité.
                </p>

                <a
                  href="/privacy-policy"
                  className="mt-4 inline-flex font-medium text-visuance-gradient-blue hover:underline"
                >
                  Consulter la politique de confidentialité →
                </a>
              </div>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="rounded-3xl bg-visuance-gradient-blue p-8 text-white">
            <h2 className="text-xl font-semibold">Droit applicable</h2>

            <p className="mt-4 leading-8 text-white/90">
              Le présent site est soumis au droit français. Tout litige sera
              soumis à la compétence des tribunaux du ressort du siège social de
              Visuance.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
