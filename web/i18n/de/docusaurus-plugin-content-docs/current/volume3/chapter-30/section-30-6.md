---
id: volume3-chapter-30-section-30-6
title: "30.6 FAIA-Anforderungen (Fichier d'Audit Informatisé AED)"
sidebar_position: 7
slug: /volume3/chapter-30/section-30-6
---

# 30.6 FAIA-Anforderungen (Fichier d'Audit Informatisé AED)

## Überblick

**FAIA (Fichier d'Audit Informatisé AED)** ist ein standardisiertes elektronisches Dateiformat, das für Steuerprüfungszwecke in Luxemburg erforderlich ist. Unternehmen müssen ihre Buchhaltungsdaten im FAIA-Format bereitstellen können, wenn sie von den Steuerbehörden (Administration de l'Enregistrement et des Domaines - AED) angefordert werden.

## FAIA-Zweck und Rechtsgrundlage

### Zweck

**FAIA** dient als:
- Standardisiertes Format für Steuerprüfungsdaten
- Elektronische Einreichung von Buchhaltungsaufzeichnungen
- Effizienter Prüfungsprozess für Steuerbehörden
- Compliance-Verifizierungstool

### Rechtsgrundlage

**Rechtliche Anforderung:**
- Unternehmen müssen Buchhaltungsaufzeichnungen in einem Format führen, das nach FAIA exportiert werden kann
- Steuerbehörden können FAIA-Dateien während Prüfungen anfordern
- FAIA-Format ist für bestimmte Steuerverfahren obligatorisch

## FAIA-Dateiformat

### Technische Spezifikationen

**FAIA-Format:**
- **Basiert auf OECD SAF-T (Standard Audit File for Tax)**: Internationaler Standard für Steuerprüfungsdateien
- **XML-Format**: Strukturierte Daten in XML
- **Standardisiertes Schema**: Folgt luxemburgischem FAIA-Schema
- **Umfassende Daten**: Enthält alle Buchhaltungstransaktionen

### Dateistruktur

**FAIA-Datei enthält:**
- **Kopfzeileninformationen**: Unternehmensidentifikation, abgedeckte Periode
- **Kontenplan**: Vollständiger Kontenplan (PCN)
- **Buchungszeilen**: Alle Buchhaltungszeilen für die Periode
- **Kontosalden**: Eröffnungs- und Schlusssalden
- **Unterstützende Informationen**: Zusätzliche Daten nach Bedarf

## FAIA-Datenanforderungen

### Erforderliche Informationen

**Muss enthalten:**
- Alle Buchhaltungstransaktionen
- Vollständiger Kontenplan
- Kontosalden
- Transaktionsdaten
- Transaktionsbeträge
- Kontoreferenzen (PCN-Konten)
- Transaktionsbeschreibungen
- Referenzen zu unterstützenden Dokumenten

### Periodenabdeckung

**Abdeckung:**
- Deckt typischerweise Geschäftsjahr ab
- Kann spezifische Prüfungsperiode abdecken
- Muss alle Transaktionen für die Periode enthalten
- Muss vollständig und genau sein

## FAIA-Dateien generieren

### Aus Buchhaltungssoftware

**Die meisten Buchhaltungssoftware** können nach FAIA-Format exportieren:
- **Sage BOB**: FAIA-Export-Funktionalität
- **Odoo**: FAIA-Export-Modul
- **Andere Software**: Auf FAIA-Export-Fähigkeit prüfen

**Exportprozess:**
1. Zu exportierende Periode auswählen
2. FAIA-Export-Option wählen
3. FAIA-Datei generieren
4. Dateiformat validieren
5. Datei für Einreichung speichern

### Manuelle Generierung

**Wenn Software FAIA nicht unterstützt:**
- Möglicherweise manuelle Datenkonvertierung erforderlich
- FAIA-Konvertierungstools verwenden
- IT-Spezialisten konsultieren
- Software-Upgrade in Betracht ziehen

## FAIA-Einreichung

### Wann erforderlich

**FAIA-Dateien können erforderlich sein:**
- Während Steuerprüfungen
- Für spezifische Steuerverfahren
- Auf Anforderung der Steuerbehörden
- Für Compliance-Verifizierung

### Einreichungsprozess

**Einreichung:**
1. FAIA-Datei für angeforderte Periode generieren
2. Dateiformat und Inhalt validieren
3. An Steuerbehörden (AED) einreichen
4. Kopie für Aufzeichnungen aufbewahren
5. Empfang bestätigen

## FAIA-Compliance

### Software-Anforderungen

**Buchhaltungssoftware muss:**
- Daten in exportierbarem Format führen
- FAIA-Export-Funktionalität unterstützen
- Gültige FAIA-Dateien generieren
- Alle erforderlichen Daten enthalten

### Datenqualität

**FAIA-Dateien müssen:**
- Vollständig und genau sein
- Alle erforderlichen Informationen enthalten
- FAIA-Schema folgen
- Ordnungsgemäß formatiert sein
- Vor Einreichung validiert werden

## Luxemburg Compliance-Hinweis

**Wichtige Anforderungen:**
- **FAIA-Fähigkeit**: Software muss FAIA-Export unterstützen
- **Datenwartung**: Daten in exportierbarem Format führen
- **Dateigenerierung**: FAIA-Dateien auf Anforderung generieren können
- **Format-Compliance**: Dateien müssen FAIA-Schema folgen
- **Vollständigkeit**: Dateien müssen alle erforderlichen Daten enthalten

**Häufige Probleme:**
- **Software-Limitierungen**: Software unterstützt FAIA-Export nicht
- **Formatfehler**: Dateien folgen FAIA-Schema nicht
- **Unvollständige Daten**: Fehlende erforderliche Informationen
- **Validierungsfehler**: Dateien bestehen Validierung nicht
- **Timing-Probleme**: Unfähigkeit, Dateien schnell zu generieren, wenn angefordert

---

