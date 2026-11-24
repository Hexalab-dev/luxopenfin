---
id: volume1-chapter-07-section-7-7
title: "7.7 Luxemburgische eCDF- und FAIA-Anforderungen"
sidebar_position: 8
slug: /volume1/chapter-07/section-7-7
---

# 7.7 Luxemburgische eCDF- und FAIA-Anforderungen

### eCDF (Elektronische Sammlung von Finanzdaten)

**Was ist eCDF?**

**eCDF** (Elektronische Sammlung von Finanzdaten) ist Luxemburgs Plattform für die elektronische Einreichung von:
- MwSt-Erklärungen
- Jahresabschlüssen
- Anderen Steuer- und Finanzdokumenten

**Zweck:**
- Einreichungsprozess rationalisieren
- Fehler reduzieren
- Effizienz verbessern
- Compliance sicherstellen

### eCDF-Anforderungen

**Wer muss eCDF verwenden:**
- Alle Unternehmen, die MwSt-Erklärungen einreichen
- Alle Unternehmen, die Jahresabschlüsse einreichen
- Obligatorisch für elektronische Einreichung

**Einreichungsanforderungen:**
- **MwSt-Erklärungen**: Monatlich, vierteljährlich oder jährlich (je nach Unternehmen)
- **Jahresabschlüsse**: Innerhalb von 7 Monaten nach Geschäftsjahresende
- **Nur elektronisch**: Papiererklärungen werden nicht mehr akzeptiert

**Zugriff:**
- Online-Portal: https://ecdf.public.lu
- Erfordert Authentifizierung (LuxTrust, eID, etc.)
- Sicherer Zugriff erforderlich

### eCDF-Einreichungsprozess

**Schritte:**
1. **Daten vorbereiten**: Sicherstellen, dass Rechnungslegungsunterlagen vollständig sind
2. **Portal zugreifen**: Bei eCDF-Plattform anmelden
3. **Formular auswählen**: Angemessenes Formular wählen (MwSt, Jahresabschlüsse, etc.)
4. **Daten eingeben**: Erforderliche Informationen eingeben
5. **Validieren**: System validiert Daten
6. **Einreichen**: Elektronisch einreichen
7. **Bestätigung**: Bestätigung der Einreichung erhalten

**MwSt-Erklärungseinreichung:**
- MwSt-Daten aus Rechnungswesenssystem extrahieren
- In eCDF-MwSt-Erklärungsformular eingeben
- System berechnet Netto-MwSt
- Einreichen und Bestätigung erhalten

**Jahresabschluss-Einreichung:**
- Jahresabschlüsse vorbereiten
- In erforderliches Format konvertieren (PDF, XML)
- Auf eCDF hochladen
- Beim RCS einreichen

### Rechnungswesenssystem-Integration

**Software-Integration:**
- Viele Rechnungswesenssysteme integrieren sich mit eCDF
- Sage BOB: Integrierte eCDF-Integration
- Odoo: eCDF-Modul verfügbar
- Andere Systeme: Können manuelle Dateneingabe erfordern

**Datenexport:**
- Systeme sollten Daten im eCDF-kompatiblen Format exportieren
- Möglicherweise müssen Daten für eCDF formatiert werden
- XML-Format oft erforderlich

### FAIA (Fichier d'Audit Informatisé AED)

**Was ist FAIA?**

**FAIA** (Fichier d'Audit Informatisé AED) ist eine computergestützte Prüfdatei, die Steuerbehörden für Prüfungszwecke anfordern können.

**Zweck:**
- Steuerbehörden standardisierte Prüfdaten bereitstellen
- Basierend auf OECD SAF-T (Standard Audit File for Tax)-Standard
- XML-Format
- Enthält vollständige Rechnungslegungsdaten

### FAIA-Anforderungen

**Wer muss FAIA bereitstellen:**
- Körperschaften (SA, SARL, etc.)
- Einzelunternehmen mit Umsatz über €100,000 (ohne MwSt)
- Niederlassungen ausländischer Unternehmen
- Wenn von Steuerbehörden angefordert

**Wenn angefordert:**
- Während Steuerprüfungen
- Zur Compliance-Verifizierung
- Zufällige Prüfungen
- Risikobasierte Auswahl

**Format:**
- XML-Format
- Basierend auf OECD SAF-T-Standard
- Muss alle Rechnungslegungsdaten enthalten
- Muss vollständig und genau sein

### FAIA-Inhalt

**Was enthalten ist:**
- Hauptbuch
- Kontenplan
- Journalbuchungen
- Kunden- und Lieferantenkonten
- Lagerbestandsaufzeichnungen
- Anlagevermögen
- Alle Transaktionen für den Zeitraum

**Struktur:**
- Header-Informationen
- Stammdaten (Konten, Kunden, Lieferanten)
- Transaktionsdaten
- Abschlusssalden

### Rechnungswesenssystem-Anforderungen

**FAIA-Exportfähigkeit:**
- Systeme müssen FAIA-Format exportieren können
- Sage BOB: Integrierter FAIA-Export
- Odoo: FAIA-Modul verfügbar
- Andere Systeme: Können Add-ons oder manuelle Konvertierung benötigen

**Datenanforderungen:**
- Vollständige Rechnungslegungsunterlagen
- Ordentliche PCN-Klassifikationen
- Alle Transaktionen enthalten
- Genau und überprüfbar

### Luxemburgische Compliance-Hinweis

**eCDF-Anforderungen:**
- Obligatorisch für MwSt-Erklärungen und Jahresabschlüsse
- Muss elektronisch einreichen
- Muss eCDF-Plattform verwenden
- Muss Einreichungsfristen einhalten
- Strafen bei Nichteinhaltung

**FAIA-Anforderungen:**
- Muss bei Anforderung bereitstellen können
- Muss im korrekten Format sein (XML, OECD SAF-T)
- Muss vollständig und genau sein
- Muss innerhalb des erforderlichen Zeitrahmens bereitgestellt werden
- Versäumnis kann zu Strafen führen

### Best Practices

**Für eCDF:**
- Rechnungslegungsunterlagen aktuell halten
- eCDF-Integration vor Einreichung testen
- Vor Fristen einreichen
- Bestätigungsbelege aufbewahren
- Datengenauigkeit verifizieren

**Für FAIA:**
- Sicherstellen, dass System FAIA exportieren kann
- FAIA-Export regelmäßig testen
- Daten vollständig und genau halten
- FAIA-Exportprozess dokumentieren
- Auf Prüfungsanfragen vorbereitet sein

### Nachdenken

Warum sind eCDF- und FAIA-Anforderungen für luxemburgische Unternehmen wichtig? Was passiert, wenn ein Unternehmen FAIA nicht bereitstellen kann, wenn es von Steuerbehörden angefordert wird?

---

