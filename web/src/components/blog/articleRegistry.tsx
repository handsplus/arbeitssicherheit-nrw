import type { ReactNode } from "react";
import { GefaehrdungsbeurteilungUnterschrift } from "./articles/GefaehrdungsbeurteilungUnterschrift";
import { GetraenkeArbeitsplatz } from "./articles/GetraenkeArbeitsplatz";
import { AkteureArbeitsschutz } from "./articles/AkteureArbeitsschutz";
import { LadestationGarage } from "./articles/LadestationGarage";
import { UnterweisungArbeitssicherheit } from "./articles/UnterweisungArbeitssicherheit";
import { SigekoBetrieb } from "./articles/SigekoBetrieb";
import { ExterneFasiKoeln } from "./articles/ExterneFasiKoeln";
import { BsbInternExtern } from "./articles/BsbInternExtern";
import { SigekoNrwOrientierung } from "./articles/SigekoNrwOrientierung";
import {
  GefaehrdungsbeurteilungErstellenSchritt,
  BrandschutzhelferPflichtNrw,
  SigekoAbWannPflicht,
  FasiBestellungPflichtFristen,
  GefahrstoffeLagernBetrieb,
  ErsthelferImBetrieb,
  BetriebsbegehungWasGeprueft,
  HitzearbeitSchutzMassnahmen,
} from "./articles/april2026";
import {
  ElektropruefungDguvV3,
  HomeofficeGefaehrdungsbeurteilung,
  AsaSitzungPflichten,
  ExplosionsschutzGefaehrdungsbeurteilung,
  BrandschutzordnungTeileAbc,
  SigeplanInhaltPflichten,
  PsychischeBelastungBeurteilung,
  VerbandbuchPflichtBetrieb,
} from "./articles/mai2026";

export const BLOG_ARTICLE_COMPONENTS: Record<string, () => ReactNode> = {
  "gefaehrdungsbeurteilung-unterschrift": () => <GefaehrdungsbeurteilungUnterschrift />,
  "getraenke-arbeitsplatz-arbeitgeber": () => <GetraenkeArbeitsplatz />,
  "akteure-arbeitsschutz-ueberblick": () => <AkteureArbeitsschutz />,
  "ladestation-e-auto-garage-genehmigung": () => <LadestationGarage />,
  "unterweisung-arbeitssicherheit-pflichtinhalte": () => <UnterweisungArbeitssicherheit />,
  "sigeko-und-betrieb-schnittstelle": () => <SigekoBetrieb />,
  "externe-fachkraft-arbeitssicherheit-koeln": () => <ExterneFasiKoeln />,
  "brandschutzbeauftragter-nrw-intern-extern": () => <BsbInternExtern />,
  "sigeko-nrw-orientierung-bauherren": () => <SigekoNrwOrientierung />,
  // April 2026
  "gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt": () => (
    <GefaehrdungsbeurteilungErstellenSchritt />
  ),
  "brandschutzhelfer-ausbildung-pflicht-nrw": () => <BrandschutzhelferPflichtNrw />,
  "sigeko-ab-wann-pflicht-baustelle": () => <SigekoAbWannPflicht />,
  "fasi-bestellung-pflicht-fristen": () => <FasiBestellungPflichtFristen />,
  "gefahrstoffe-lagern-betrieb-pflichten": () => <GefahrstoffeLagernBetrieb />,
  "ersthelfer-im-betrieb-pflichten": () => <ErsthelferImBetrieb />,
  "betriebsbegehung-was-wird-geprueft": () => <BetriebsbegehungWasGeprueft />,
  "hitzearbeit-schutz-massnahmen-nrw": () => <HitzearbeitSchutzMassnahmen />,
  // Mai 2026
  "elektropruefung-dguv-vorschrift-3-fristen": () => <ElektropruefungDguvV3 />,
  "homeoffice-gefaehrdungsbeurteilung-pflicht": () => <HomeofficeGefaehrdungsbeurteilung />,
  "arbeitsschutzausschuss-asa-pflichten": () => <AsaSitzungPflichten />,
  "explosionsschutz-gefaehrdungsbeurteilung": () => <ExplosionsschutzGefaehrdungsbeurteilung />,
  "brandschutzordnung-teil-a-b-c": () => <BrandschutzordnungTeileAbc />,
  "sigeplan-inhalt-pflichten-baustelle": () => <SigeplanInhaltPflichten />,
  "psychische-belastung-gefaehrdungsbeurteilung": () => <PsychischeBelastungBeurteilung />,
  "verbandbuch-pflicht-betrieb-dokumentation": () => <VerbandbuchPflichtBetrieb />,
};
