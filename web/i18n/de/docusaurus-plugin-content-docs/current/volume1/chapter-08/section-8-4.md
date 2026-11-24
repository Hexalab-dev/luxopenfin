---
id: volume1-chapter-08-section-8-4
title: "8.4 Zweck und Verwendung eines Portokassenfonds definieren und Portokassen-Journalbuchungen vorbereiten"
sidebar_position: 5
slug: /volume1/chapter-08/section-8-4
---

# 8.4 Zweck und Verwendung eines Portokassenfonds definieren und Portokassen-Journalbuchungen vorbereiten

### Was ist Portokasse ?

**Portokasse** ist ein kleiner Bargeldbetrag, der für kleine, gelegentliche Ausgaben bereitgehalten wird, die unpraktisch per Scheck oder elektronischer Überweisung zu zahlen sind.

**Zweck :**
- Kleine Ausgaben schnell bezahlen
- Vermeiden, Schecks für kleine Beträge zu schreiben
- Bequemlichkeit für kleinere Einkäufe
- Notausgaben

**Typische Verwendungen :**
- Büromaterial
- Porto
- Kleine Reparaturen
- Kaffee/Erfrischungen
- Taxifahrten
- Notausgaben

### Portokassenfonds einrichten

**Schritte :**

1. **Betrag bestimmen**
   - Basierend auf typischen kleinen Ausgaben
   - Normalerweise €100-€500 für kleine Unternehmen
   - Sollte 2-4 Wochen reichen

2. **Verwalter ernennen**
   - Eine Person verantwortlich für Portokasse
   - Sollte vertrauenswürdig sein
   - Sollte keinen Zugriff auf andere Kasse haben

3. **Scheck schreiben**
   - Scheck an "Portokasse" oder Verwalter schreiben
   - Scheck einlösen
   - Bargeld an sicherem Ort aufbewahren (verschlossene Box, Schublade)

4. **Einrichtung erfassen**

**Journalbuchung :**
```
516    Portokasse (Klasse 5)        €200
5131   Kasse (Bankkonto)                     €200
Zur Einrichtung des Portokassenfonds
```

**PCN-Konto :**
- 516 : Portokasse (Klasse 5 - Finanzkonten)

### Portokassenfonds betreiben

**Prozess :**

1. **Verwalter zahlt Ausgaben**
   - Erhält Zahlungsanfrage
   - Überprüft, dass Ausgabe legitim ist
   - Zahlt aus Portokasse
   - Sammelt Beleg

2. **Belege führen**
   - Alle Belege aufbewahren
   - In Portokassenbuchung erfassen
   - Gesamtbelege sollten ausgezahlter Kasse entsprechen

3. **Fonds auffüllen**
   - Wenn Fonds niedrig ist (normalerweise bei 20-25% des Originals)
   - Belege und verbleibende Kasse summieren
   - Sollte ursprünglicher Fondsbetrag entsprechen
   - Auf ursprünglichen Betrag auffüllen

### Portokasse auffüllen

**Beispiel :** Portokassenfonds von €200

**Gezahlte Ausgaben :**
- Büromaterial : €25
- Porto : €15
- Kaffee : €10
- Taxi : €20
- **Gesamtausgaben : €70**

**Verbleibende Kasse : €130**

**Überprüfung :** €70 (Ausgaben) + €130 (verbleibend) = €200 ✓

**Auffüllungsbuchung :**
```
6185   Büromaterialausgaben    €25
6153   Portokosten                 15
6188   Verschiedene Ausgaben       10
6152   Reisekosten                 20
5131   Kasse (Bankkonto)                      €70
Zur Auffüllung des Portokassenfonds
```

**Hinweis :** Das Portokassenkonto wird beim Auffüllen NICHT belastet oder gutgeschrieben. Es bleibt bei €200. Nur die Ausgabenkonten und Kasse (Bank) sind betroffen.

### Portokassenbuchung

**Format :**
```
Portokassenbuchung
Fondsbetrag : €200
Verwalter : [Name]

Datum    Beschreibung          Betrag    Beleg #    Saldo
────────────────────────────────────────────────────────────
1. Nov   Anfangssaldo                -          €200
5. Nov   Büromaterial      €25        B001        €175
8. Nov   Porto              €15        B002        €160
10. Nov  Kaffee             €10        B003        €150
12. Nov  Taxi               €20        B004        €130
15. Nov  Aufgefüllt         €70        -           €200
```

### Portokassenmangel oder -überschuss

**Mangel :** Verbleibende Kasse + Belege < Fondsbetrag

**Beispiel :** Fonds €200, Ausgaben €70, Verbleibend €125
- Mangel : €5 (€200 - €70 - €125)

**Auffüllungsbuchung :**
```
6185   Büromaterial        €25
6153   Porto                 15
6188   Verschiedenes           10
6152   Reise                  20
6488   Kassenmangel             5
5131   Kasse (Bank)                          €75
Zur Auffüllung der Portokasse (mit €5 Mangel)
```

**Überschuss :** Verbleibende Kasse + Belege > Fondsbetrag

**Beispiel :** Fonds €200, Ausgaben €70, Verbleibend €135
- Überschuss : €5 (€200 - €70 - €135 = -€5, also +€5 Überschuss)

**Auffüllungsbuchung :**
```
6185   Büromaterial        €25
6153   Porto                 15
6188   Verschiedenes           10
6152   Reise                  20
5131   Kasse (Bank)                          €65
7488   Kassenüberschuss                          €5
Zur Auffüllung der Portokasse (mit €5 Überschuss)
```

**PCN-Konten :**
- 6488 : Kassenmangel (Klasse 6 - Ausgabe)
- 7488 : Kassenüberschuss (Klasse 7 - Einnahme, oder Ausgaben reduzieren)

### Portokassenkontrollen

**Kontrollen :**

1. **Einen Verwalter ernennen**
   - Klare Verantwortung
   - Rechenschaftspflicht

2. **Belege verlangen**
   - Alle Ausgaben müssen Belege haben
   - Kein Beleg, keine Erstattung

3. **Höchstbetrag festlegen**
   - Einzelausgaben begrenzen
   - Größere Ausgaben per Scheck zahlen

4. **Regelmäßige Auffüllung**
   - Nach Zeitplan auffüllen
   - Ausgaben regelmäßig überprüfen

5. **Überraschungszählungen**
   - Fonds unerwartet zählen
   - Überprüfen, dass Belege mit Kasse übereinstimmen

6. **Sichere Aufbewahrung**
   - Verschlossene Box oder Schublade
   - Begrenzter Zugriff
   - Schlüsselkontrolle

### Luxemburgische Compliance-Hinweis

Für Portokasse in Luxemburg :
- Muss ordnungsgemäß erfasst werden
- Muss Belege führen
- Muss in Kassenkonten (516) enthalten sein
- Muss regelmäßig abgestimmt werden
- Muss Kassenhandhabungsvorschriften einhalten
- MwSt auf Ausgaben muss ordnungsgemäß erfasst werden

### Nachdenken

Warum ist es wichtig, Belege für alle Portokassenausgaben zu verlangen ? Was könnte passieren, wenn keine Belege verlangt werden ?

---

