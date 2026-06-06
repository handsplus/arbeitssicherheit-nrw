import Link from "next/link";

/** DSGVO-Hinweis unter Formular-Buttons */
export function FormPrivacyNotice() {
  return (
    <p className="text-xs leading-relaxed text-nrw-grau-500">
      Mit dem Absenden werden Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeitet. Details in
      unserer{" "}
      <Link href="/datenschutz" className="font-medium text-nrw-gruen hover:underline">
        Datenschutzerklärung
      </Link>
      .
    </p>
  );
}
