---
id: volume1-chapter-12-section-12-3
title: "12.3 Kurzfristige Schulden buchen"
sidebar_position: 4
slug: /volume1/chapter-12/section-12-3
---

# 12.3 Kurzfristige Schulden buchen

### Kurzfristige Wechselverbindlichkeiten

**Kurzfristige Wechselverbindlichkeiten** sind schriftliche Versprechen, innerhalb eines Jahres zu zahlen.

**Beispiel :**
- €10,000 für 6 Monate zu 6% Zinsen leihen

**Kreditaufnahme :**
```
5131   Kasse                       €10,000
4421   Wechselverbindlichkeiten                          €10,000
Zur Erfassung des kurzfristigen Wechsels
```

**Zinspassivierung (monatlich) :**
- Zinsen : €10,000 × 0,06 × (1/12) = €50

```
6552   Zinsaufwand           €50
4718   Zinsverbindlichkeiten                        €50
Zur Passivierung der Zinsen
```

**Zahlung bei Fälligkeit :**
- Kapital : €10,000
- Zinsen : €300 (6 Monate)

```
4421   Wechselverbindlichkeiten             €10,000
4718   Zinsverbindlichkeiten                        €300
5131   Kasse                                   €10,300
Zur Erfassung der Wechselzahlung
```

**PCN-Konten :**
- **4421** : Wechselverbindlichkeiten (Emprunts)
- **4718** : Zinsverbindlichkeiten (Intérêts à Payer)

### Kurzfristiger Teil langfristiger Schulden

**Kurzfristiger Teil :**
- Teil langfristiger Schulden, der innerhalb eines Jahres fällig ist
- Von langfristig zu kurzfristig umklassifiziert

**Beispiel :**
- Langfristiges Darlehen : €100,000
- Zahlung fällig nächstes Jahr : €20,000

**Umklassifizierung :**
```
1942   Langfristige Schulden             €20,000
1941   Kurzfristiger Teil langfristiger Schulden      €20,000
Zur Umklassifizierung des kurzfristigen Teils
```

### Luxemburgische Compliance-Hinweis

Kurzfristige Schulden in Luxemburg :
- Müssen ordentlich klassifiziert sein
- Muss Zinsen passivieren
- Muss offengelegt werden
- Muss PCN einhalten
- Muss Aufzeichnungen führen

### Nachdenken

Was ist der Unterschied zwischen einer kurzfristigen Wechselverbindlichkeit und Verbindlichkeiten aus Lieferungen und Leistungen ? Wann könnte jede verwendet werden ?

---

