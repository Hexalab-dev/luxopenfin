---
id: volume3-chapter-31-section-31-4
title: "31.4 FAIA-Dateiformat (XML, OECD SAF-T basiert)"
sidebar_position: 5
slug: /volume3/chapter-31/section-31-4
---

# 31.4 FAIA-Dateiformat (XML, OECD SAF-T basiert)

## Überblick

Das **FAIA (Fichier d'Audit Informatisé AED)** Dateiformat ist Luxemburgs standardisiertes Format für Steuerprüfungsdaten. Basierend auf **OECD SAF-T (Standard Audit File for Tax)** bietet FAIA ein umfassendes, strukturiertes Format zum Exportieren von Buchhaltungsdaten an Steuerbehörden.

## FAIA und OECD SAF-T

### OECD SAF-T Standard

**SAF-T (Standard Audit File for Tax)** ist ein internationaler Standard, der von der OECD für Steuerprüfungszwecke entwickelt wurde. Er bietet ein standardisiertes Format zum Exportieren von Buchhaltungsdaten.

### Luxemburgische Umsetzung

**FAIA ist:**
- Basierend auf OECD SAF-T Standard
- Angepasst für luxemburgische Anforderungen
- XML-basiertes Format
- Umfassende Datenstruktur
- Erforderlich für Steuerprüfungen

## FAIA-Dateistruktur

### XML-Format

**FAIA-Dateien sind:**
- XML (eXtensible Markup Language) Format
- Strukturierte Daten mit Tags
- Gegen Schema validiert
- Menschenlesbar (mit ordentlichen Tools)
- Maschinenverarbeitbar

### Dateikomponenten

**FAIA-Datei enthält:**
- **Kopfzeile**: Unternehmensinformationen, abgedeckte Periode
- **Kontenplan**: Vollständiger PCN-Kontenplan
- **Hauptbuch**: Alle Buchhaltungseinträge
- **Journal-Einträge**: Detaillierte Transaktionsaufzeichnungen
- **Kontosalden**: Eröffnungs- und Schlusssalden
- **Unterstützende Daten**: Zusätzliche Informationen nach Bedarf

## Datenanforderungen

### Erforderliche Informationen

**Muss enthalten:**
- Alle Buchhaltungstransaktionen für Periode
- Vollständiger Kontenplan (PCN)
- Kontosalden (Eröffnung und Schluss)
- Transaktionsdaten und -beträge
- Kontoreferenzen (PCN-Kontonummern)
- Transaktionsbeschreibungen
- Unterstützende Dokumentreferenzen
- Umsatzsteuerinformationen (falls zutreffend)

### Periodenabdeckung

**Abdeckung:**
- Deckt typischerweise Geschäftsjahr ab
- Kann spezifische Prüfungsperiode abdecken
- Muss für Periode vollständig sein
- Muss alle Transaktionen enthalten

## FAIA-Dateien generieren

### Aus Buchhaltungssoftware

**Die meisten Buchhaltungssoftware** können nach FAIA exportieren:
- **Sage BOB**: FAIA-Export-Funktionalität
- **Odoo**: FAIA-Export-Modul
- **Andere Software**: Auf FAIA-Export-Fähigkeit prüfen

**Exportprozess:**
1. Zu exportierende Periode auswählen
2. FAIA-Export-Option wählen
3. Exporteinstellungen konfigurieren
4. FAIA-Datei generieren
5. Dateiformat validieren
6. Datei für Einreichung speichern

### Manuelle Generierung

**Wenn Software FAIA nicht unterstützt:**
- Kann Konvertierungstools benötigen
- FAIA-Konvertierungssoftware verwenden
- IT-Spezialisten konsultieren
- Software-Upgrade in Betracht ziehen

## FAIA-Validierung

### Schema-Validierung

**FAIA-Dateien müssen:**
- FAIA XML-Schema folgen
- Alle erforderlichen Elemente enthalten
- Ordentliche Struktur haben
- Schema-Validierung bestehen
- Ordentlich formatiert sein

### Datenvalidierung

**Daten müssen:**
- Für Periode vollständig sein
- Genau und korrekt sein
- Zwischen Abschnitten konsistent sein
- Ordentlich referenziert sein
- Vor Einreichung validiert werden

## Einreichungsanforderungen

### Wann erforderlich

**FAIA-Dateien können erforderlich sein:**
- Während Steuerprüfungen
- Für spezifische Steuerverfahren
- Auf Anforderung durch Steuerbehörden (AED)
- Für Compliance-Verifizierung
- Für Steuererklärungsunterstützung

### Einreichungsprozess

**Einreichung:**
1. FAIA-Datei für angeforderte Periode generieren
2. Dateiformat und -inhalt validieren
3. Daten auf Genauigkeit überprüfen
4. An Steuerbehörden (AED) einreichen
5. Kopie für Aufzeichnungen aufbewahren
6. Empfang bestätigen

## Luxemburg Compliance-Hinweis

**Kritische Anforderungen:**
- **FAIA-Fähigkeit**: Software muss FAIA-Export unterstützen
- **Datenvollständigkeit**: Dateien müssen alle erforderlichen Daten enthalten
- **Format-Compliance**: Dateien müssen FAIA-Schema folgen
- **Validierung**: Dateien müssen vor Einreichung validiert werden
- **Pünktlichkeit**: Muss Dateien schnell generieren können, wenn angefordert

**Häufige Probleme:**
- **Software-Limitierungen**: Software unterstützt FAIA-Export nicht
- **Formatehler**: Dateien folgen FAIA-Schema nicht
- **Unvollständige Daten**: Fehlende erforderliche Informationen
- **Validierungsfehler**: Dateien bestehen Validierung nicht
- **Timing-Probleme**: Unfähigkeit, Dateien schnell zu generieren, wenn angefordert

---

