export default function Policy() {
  const collectedData = [
    "Remplissez un formulaire de contact",
    "Demandez un devis",
    "Naviguez sur le site",
  ];

  const collectedFields = [
    "Nom",
    "Prénom",
    "Adresse e-mail",
    "Téléphone",
    "Entreprise",
    "Message",
    "Adresse IP",
    "Données de navigation",
  ];

  const purposes = [
    "Répondre aux demandes de contact",
    "Fournir des devis et prestations",
    "Améliorer l’expérience utilisateur",
    "Analyser les performances du site",
    "Développer les services proposés",
  ];

  const legalBases = [
    "Le consentement de l’utilisateur",
    "L’exécution d’une relation précontractuelle",
    "L’intérêt légitime de l’entreprise",
  ];

  const rights = [
    "Droit d’accès",
    "Droit de rectification",
    "Droit de suppression",
    "Droit d’opposition",
    "Droit à la portabilité",
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 border-b border-slate-200 pb-10">
          <h1 className="mt-4 text-4xl font-bold text-visuance-gradient-blue md:text-5xl">
            Politique de confidentialité
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Découvrez quelles données nous collectons, pourquoi nous les
            utilisons et quels sont vos droits concernant leur traitement.
          </p>

          <p className="mt-6 text-sm text-slate-500">
            Dernière mise à jour : 24 juin 2026
          </p>
        </div>

        <div className="space-y-8">
          {/* Collecte */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Quelles données collectons-nous ?
              </h2>
            </div>

            <div className="space-y-6 px-8 py-6">
              <p className="text-slate-700">
                Visuance peut collecter des données lorsque vous :
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
                  Données susceptibles d’être collectées
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
                Pourquoi utilisons-nous vos données ?
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
                Sur quelle base légale reposent les traitements ?
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
                Combien de temps conservons-nous vos données ?
              </h2>
            </div>

            <div className="space-y-6 p-8">
              <div className="flex gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-visuance-gradient-blue" />
                <div>
                  <p className="font-semibold text-visuance-gradient-blue">
                    Prospects
                  </p>
                  <p className="text-slate-700">
                    Jusqu’à 3 ans après le dernier contact.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-visuance-gradient-blue" />
                <div>
                  <p className="font-semibold text-visuance-gradient-blue">
                    Clients / obligations légales
                  </p>
                  <p className="text-slate-700">
                    Jusqu’à 10 ans selon les obligations légales applicables.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Partage */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Avec qui partageons-nous vos données ?
              </h2>
            </div>

            <div className="space-y-4 p-8">
              <div className="rounded-2xl border border-slate-200 p-4 text-slate-700">
                Prestataires techniques (hébergement, CRM, analytics)
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 text-slate-700">
                Services nécessaires au fonctionnement du site
              </div>

              <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                <p className="font-semibold text-green-800">
                  Aucune donnée n’est vendue ou cédée à des tiers.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Comment utilisons-nous les cookies ?
              </h2>
            </div>

            <div className="p-8">
              <div className="rounded-2xl border border-visuance-gradient-blue/20 bg-visuance-gradient-blue/5 p-6">
                <ul className="space-y-3 text-slate-700">
                  <li>• Mesurer l’audience</li>
                  <li>• Améliorer la navigation</li>
                  <li>• Optimiser les performances marketing</li>
                </ul>
              </div>

              <p className="mt-5 text-slate-600">
                Un bandeau de consentement permet de gérer vos préférences.
              </p>
            </div>
          </section>

          {/* Droits */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Quels sont vos droits ?
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
                <p className="font-semibold">Exercer vos droits</p>

                <p className="mt-2 text-white/90">contact@visuanceagency.com</p>
              </div>
            </div>
          </section>

          {/* Sécurité */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Comment protégeons-nous vos données ?
              </h2>
            </div>

            <div className="p-8">
              <p className="leading-8 text-slate-700">
                Visuance met en œuvre des mesures techniques et
                organisationnelles afin de protéger vos données contre toute
                perte, accès non autorisé ou divulgation.
              </p>
            </div>
          </section>

          {/* Modification */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-visuance-gradient-blue/10 bg-linear-to-r from-visuance-gradient-blue/5 to-visuance-gradient-blue/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-visuance-gradient-blue">
                Cette politique peut-elle évoluer ?
              </h2>
            </div>

            <div className="p-8">
              <p className="leading-8 text-slate-700">
                Cette politique peut être mise à jour à tout moment afin de
                respecter les évolutions légales ou techniques.
              </p>
            </div>
          </section>

          {/* Footer */}
          <section className="rounded-3xl bg-visuance-gradient-blue p-8 text-white">
            <h2 className="text-xl font-semibold">Contact</h2>

            <p className="mt-3 text-white/90">contact@visuanceagency.com</p>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/70">
              Dernière mise à jour : 24 juin 2026
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
