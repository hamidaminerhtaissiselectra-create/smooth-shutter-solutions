export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  metaDescription: string;
  image?: string;
  content: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "entretien-volets",
    title: "Guide Complet : Entretien et Maintenance des Volets Roulants",
    excerpt: "Découvrez les meilleures pratiques pour maintenir vos volets roulants en parfait état. Un entretien régulier prolonge la durée de vie de vos volets.",
    date: "22 février 2026",
    author: "Répar'Action Volets",
    category: "Entretien",
    slug: "entretien-volets",
    metaDescription: "Guide complet d'entretien des volets roulants : nettoyage, lubrification, vérification des joints. Conseils professionnels par Répar'Action Volets.",
    image: "/images/blog/entretien-volets.jpg",
    content: `## Pourquoi l'entretien des volets roulants est crucial ?

Un volet roulant bien entretenu dure **plus de 20 ans** et fonctionne de manière optimale. L'entretien régulier prévient les pannes coûteuses et garantit votre sécurité. Chez **Répar'Action Volets**, nous constatons que 70% des pannes auraient pu être évitées par un entretien régulier.

### Nettoyage régulier des lames

Le nettoyage des lames est la première étape indispensable. Utilisez un chiffon humide avec un peu de savon doux pour enlever la poussière, les débris et les traces de pollution. Pour les volets en aluminium, un nettoyant spécifique non abrasif est recommandé. Évitez les produits chimiques agressifs qui pourraient endommager la finition.

**Fréquence recommandée** : une fois par mois, ou plus en milieu urbain pollué.

### Lubrification des pièces mobiles

Les coulisses latérales et les axes d'enroulement doivent être lubrifiés régulièrement avec un lubrifiant silicone adapté (jamais de WD-40 qui attire la poussière). Cela réduit les frottements, élimine les bruits désagréables et prolonge la durée de vie du mécanisme.

**Fréquence recommandée** : deux fois par an, au printemps et à l'automne.

### Vérification des joints et des sceaux

Les joints d'étanchéité entre le volet et la fenêtre doivent être inspectés régulièrement pour éviter les infiltrations d'eau et les déperditions de chaleur. Un joint usé peut augmenter votre facture de chauffage de 15%.

### Contrôle du moteur (volets motorisés)

Pour les volets motorisés, vérifiez que le moteur fonctionne sans bruit anormal (grincements, claquements). Testez les fins de course haute et basse. Un moteur qui force peut indiquer un problème d'alignement des lames.

### Inspection du coffre et du tablier

Le coffre d'enroulement doit être ouvert une fois par an pour vérifier l'état de l'axe, du tablier et des attaches. C'est l'occasion de nettoyer l'intérieur et de détecter d'éventuels signes d'usure.

## Fréquence d'entretien recommandée

| Action | Fréquence | Importance |
|--------|-----------|------------|
| Nettoyage des lames | 1 fois/mois | Essentielle |
| Lubrification coulisses | 2 fois/an | Importante |
| Vérification joints | 1 fois/an | Importante |
| Inspection complète | 1 fois/an | Recommandée |
| Contrôle moteur | 1 fois/an | Essentielle |

## Quand faire appel à un professionnel ?

Contactez **Répar'Action Volets** si vous constatez : des bruits anormaux persistants, un volet qui ne descend/monte plus complètement, des lames tordues ou cassées, ou un moteur qui chauffe anormalement. Notre diagnostic est gratuit et nous intervenons sous 48h dans toute la France.`
  },
  {
    id: "somfy-vs-bubendorff",
    title: "Somfy vs Bubendorff : Comparatif Complet des Motorisations 2026",
    excerpt: "Quelle marque choisir pour motoriser vos volets ? Découvrez les forces et faiblesses de Somfy et Bubendorff dans ce guide détaillé.",
    date: "20 février 2026",
    author: "Répar'Action Volets",
    category: "Motorisation",
    slug: "somfy-vs-bubendorff",
    metaDescription: "Comparatif Somfy vs Bubendorff 2026 : prix, fonctionnalités, domotique. Guide expert par Répar'Action Volets pour choisir votre motorisation.",
    image: "/images/blog/somfy-vs-bubendorff.jpg",
    content: `## Somfy vs Bubendorff : Le comparatif définitif 2026

Choisir entre **Somfy** et **Bubendorff** est l'une des décisions les plus importantes lors de la motorisation de vos volets roulants. Chez **Répar'Action Volets**, nous installons les deux marques depuis plus de 10 ans. Voici notre analyse experte.

## Somfy : Le leader mondial de la motorisation

**Somfy**, fondé en 1969 à Cluses (Haute-Savoie), est le leader incontesté avec plus de 50% de parts de marché mondial.

### Points forts de Somfy
- **Écosystème TaHoma** : la box domotique la plus complète du marché
- **Compatibilité universelle** : Google Home, Alexa, Apple HomeKit, IFTTT
- **Gamme io-homecontrol** : protocole radio crypté et sécurisé
- **Disponibilité des pièces** : réseau de distribution très étendu
- **Support technique** : réactif et compétent
- **Innovation** : investissement massif en R&D

### Points faibles de Somfy
- Prix généralement **15 à 25% plus élevé** que la concurrence
- Installation parfois complexe pour les non-professionnels
- Nombreuses gammes qui peuvent prêter à confusion

### Gammes principales Somfy
| Gamme | Type | Prix indicatif |
|-------|------|---------------|
| Somfy Altus RTS | Radio standard | 250-350€ |
| Somfy Oximo io | Radio connecté | 350-500€ |
| Somfy Sonesse | Ultra silencieux | 400-600€ |

## Bubendorff : L'expertise française premium

**Bubendorff**, fondé en 1955 en Alsace, est un fabricant français réputé pour ses solutions innovantes, notamment en motorisation solaire.

### Points forts de Bubendorff
- **Solutions solaires** de référence (technologie ID2)
- **Moteurs monoblocs** intégrés : installation simplifiée
- **Qualité premium** : fabrication 100% française
- **Rapport qualité/prix** excellent sur les solutions solaires
- **Garantie étendue** : jusqu'à 7 ans sur les moteurs

### Points faibles de Bubendorff
- Compatibilité domotique plus limitée (pas de HomeKit)
- Réseau de distribution moins dense que Somfy
- Gamme connectée moins développée

## Tableau comparatif détaillé

| Critère | Somfy | Bubendorff |
|---------|-------|------------|
| Prix moyen | 300-500€ | 250-450€ |
| Domotique | ★★★★★ | ★★★☆☆ |
| Fiabilité | ★★★★★ | ★★★★★ |
| Solaire | ★★★☆☆ | ★★★★★ |
| SAV | ★★★★★ | ★★★★☆ |
| Innovation | ★★★★★ | ★★★★☆ |

## Notre recommandation d'expert

**Choisissez Somfy si** : vous voulez une domotique avancée, des assistants vocaux, et un écosystème complet.

**Choisissez Bubendorff si** : vous privilégiez le solaire, la fabrication française, et un excellent rapport qualité/prix.

Chez **Répar'Action Volets**, nous vous accompagnons dans votre choix. Contactez-nous au **06 03 20 59 67** pour un conseil personnalisé et un devis gratuit.`
  },
  {
    id: "guide-motorisation",
    title: "Motoriser ses Volets Roulants en 2026 : Guide Complet",
    excerpt: "La motorisation de vos volets roulants offre confort, sécurité et économies d'énergie. Découvrez tout ce qu'il faut savoir avant de se lancer.",
    date: "18 février 2026",
    author: "Répar'Action Volets",
    category: "Motorisation",
    slug: "guide-motorisation",
    metaDescription: "Guide complet motorisation volets roulants 2026 : types de moteurs, prix, avantages, processus d'installation. Conseils experts Répar'Action Volets.",
    image: "/images/blog/guide-motorisation.jpg",
    content: `## Pourquoi motoriser vos volets roulants en 2026 ?

La motorisation des volets roulants n'est plus un luxe — c'est un investissement intelligent qui améliore votre quotidien. En 2026, les solutions sont plus accessibles et performantes que jamais.

### Confort quotidien incomparable

Fini les efforts physiques pour monter et descendre vos volets. Un simple clic sur une télécommande, une commande vocale ou une programmation horaire suffit. Imaginez : vos volets s'ouvrent automatiquement avec le lever du soleil et se ferment au coucher.

### Sécurité renforcée de votre domicile

Les volets motorisés intègrent un **système anti-relevage** automatique qui empêche toute tentative d'intrusion par l'extérieur. Vous pouvez également programmer une **simulation de présence** pendant vos vacances — vos volets s'ouvrent et se ferment à heures aléatoires pour dissuader les cambrioleurs.

### Économies d'énergie significatives

Une gestion intelligente de vos volets peut réduire votre facture énergétique de **15 à 25%**. En hiver, la fermeture automatique au coucher du soleil crée une couche d'isolation supplémentaire. En été, la fermeture aux heures les plus chaudes réduit la climatisation.

### Accessibilité pour tous

Pour les personnes à mobilité réduite ou les seniors, la motorisation rend les volets facilement manipulables sans effort physique.

## Types de motorisation disponibles

### 1. Motorisation filaire
Le moteur est commandé par un interrupteur mural fixe relié par fil.
- **Prix** : 200 à 350€ par volet (pose comprise)
- **Avantages** : très fiable, pas de pile, économique
- **Idéal pour** : construction neuve, rénovation lourde

### 2. Motorisation radio (sans fil)
Commande par télécommande radio, sans fil entre la commande et le moteur.
- **Prix** : 300 à 500€ par volet (pose comprise)
- **Avantages** : flexible, centralisation facile, pas de saignée murale
- **Idéal pour** : rénovation, ajout de motorisation sur l'existant

### 3. Motorisation solaire
Panneau photovoltaïque intégré au coffre, batterie rechargeable intégrée.
- **Prix** : 400 à 600€ par volet (pose comprise)
- **Avantages** : 100% autonome, écologique, aucun raccordement électrique
- **Idéal pour** : volets sans alimentation, maisons BBC, extensions

### 4. Motorisation connectée (domotique)
Contrôle via smartphone, assistants vocaux et scénarios automatisés.
- **Prix** : 450 à 700€ par volet (pose comprise)
- **Avantages** : contrôle à distance, programmation intelligente, intégration maison connectée
- **Idéal pour** : amateurs de technologie, maisons connectées

## Processus d'installation chez Répar'Action Volets

1. **Diagnostic gratuit** : évaluation de votre configuration actuelle
2. **Devis personnalisé** : proposition détaillée et transparente
3. **Installation rapide** : 1 à 2 heures par volet, sans travaux lourds
4. **Configuration** : programmation des fins de course et automatismes
5. **Formation** : explication complète du fonctionnement

Contactez-nous au **06 03 20 59 67** pour un devis gratuit.`
  },
  {
    id: "prix-reparation-volet-roulant",
    title: "Prix Réparation Volet Roulant en 2026 : Tarifs et Guide Complet",
    excerpt: "Combien coûte la réparation d'un volet roulant ? Découvrez tous les tarifs détaillés selon le type de panne et nos conseils pour éviter les arnaques.",
    date: "16 février 2026",
    author: "Répar'Action Volets",
    category: "Tarifs",
    slug: "prix-reparation-volet-roulant",
    metaDescription: "Prix réparation volet roulant 2026 : tarifs détaillés par type de panne. De 80€ à 300€. Devis gratuit Répar'Action Volets. Guide complet.",
    image: "/images/blog/prix-reparation.jpg",
    content: `## Combien coûte la réparation d'un volet roulant en 2026 ?

Le coût de réparation d'un volet roulant varie entre **80€ et 300€** en moyenne, selon la nature de la panne et le type de volet. Chez **Répar'Action Volets**, nous pratiquons des tarifs transparents avec devis gratuit systématique.

## Tarifs indicatifs par type de panne

### Remplacement de sangle ou manivelle : 80€ à 120€
La panne la plus courante et la moins coûteuse. La sangle s'use naturellement avec le temps et les frottements. Le remplacement prend environ 30 minutes.

### Remplacement de lames cassées : 100€ à 180€
Le prix dépend du nombre de lames à remplacer et du matériau (PVC, aluminium). Nous remplaçons les lames à l'identique, sans avoir à changer tout le tablier.

### Réparation ou remplacement de moteur : 180€ à 350€
Le moteur est la pièce la plus coûteuse. Le prix varie selon la marque (Somfy, Bubendorff, SIMU) et la puissance nécessaire.

### Réglage des fins de course : 80€ à 120€
Un volet qui ne s'arrête pas à la bonne position nécessite un réglage des butées. Intervention rapide de 20 à 30 minutes.

### Remplacement du condensateur : 90€ à 150€
Symptôme typique : le volet émet un bourdonnement mais ne bouge pas. Le condensateur est une pièce d'usure du moteur.

### Déblocage d'urgence : 100€ à 200€
Volet bloqué en position ouverte ou fermée. Nous intervenons le jour même pour les urgences de sécurité.

## Tableau récapitulatif des tarifs

| Type de panne | Prix moyen | Durée intervention |
|--------------|-----------|-------------------|
| Sangle/manivelle | 80-120€ | 30 min |
| Lames cassées | 100-180€ | 45 min |
| Moteur | 180-350€ | 1-2h |
| Fins de course | 80-120€ | 20-30 min |
| Condensateur | 90-150€ | 30-45 min |
| Déblocage urgence | 100-200€ | 30-60 min |

## Comment éviter les arnaques ?

1. **Exigez toujours un devis écrit** avant l'intervention
2. **Méfiez-vous des prix trop bas** qui cachent des surcoûts
3. **Vérifiez les certifications** (RGE, Qualibat) de l'entreprise
4. **Demandez la garantie** sur les pièces et la main d'œuvre

Chez **Répar'Action Volets**, le diagnostic est toujours gratuit et sans engagement. Nos tarifs sont transparents et garantis. Appelez-nous au **06 03 20 59 67**.`
  },
  {
    id: "comment-choisir-volet-roulant",
    title: "Comment Choisir son Volet Roulant : Le Guide Ultime 2026",
    excerpt: "Aluminium, PVC ou bois ? Manuel ou motorisé ? Découvrez tous les critères pour choisir le volet roulant idéal pour votre habitat.",
    date: "14 février 2026",
    author: "Répar'Action Volets",
    category: "Installation",
    slug: "comment-choisir-volet-roulant",
    metaDescription: "Guide complet pour choisir son volet roulant en 2026 : matériaux, motorisation, isolation. Comparatif aluminium vs PVC vs bois. Répar'Action Volets.",
    image: "/images/blog/choisir-volet.jpg",
    content: `## Comment choisir le volet roulant idéal pour votre maison ?

Le choix d'un volet roulant est un investissement important qui impacte le confort, la sécurité et la valeur de votre bien immobilier. Ce guide vous aide à faire le meilleur choix en 2026.

## Critère n°1 : Le matériau

### Aluminium — Le choix n°1 en France
L'aluminium représente **65% des ventes** de volets roulants en France, et pour cause :
- **Isolation thermique** : mousse polyuréthane injectée dans les lames
- **Légèreté** : facilite la motorisation
- **Durabilité** : résiste à la corrosion, aux UV et aux intempéries
- **Esthétique** : plus de 200 coloris RAL disponibles
- **Durée de vie** : 25 à 30 ans
- **Prix** : 250 à 600€ par volet (hors pose)

### PVC — Le plus économique
Le PVC est le choix idéal pour les budgets serrés :
- **Prix accessible** : 150 à 350€ par volet (hors pose)
- **Bon isolant** : performances correctes en isolation
- **Entretien minimal** : un simple nettoyage suffit
- **Limite** : moins résistant que l'aluminium pour les grandes dimensions
- **Durée de vie** : 15 à 20 ans

### Bois — Le charme authentique
Le bois est réservé aux amateurs de tradition et d'authenticité :
- **Esthétique noble** : chaleur et caractère uniques
- **Isolation naturelle** : excellentes performances
- **Éco-responsable** : matériau renouvelable
- **Entretien** : nécessite un traitement régulier (tous les 3-5 ans)
- **Prix** : 400 à 800€ par volet (hors pose)

## Critère n°2 : La motorisation

| Type | Avantages | Budget |
|------|-----------|--------|
| Manuel (sangle) | Économique, fiable | Inclus |
| Manuel (manivelle) | Plus confortable | +50€ |
| Motorisé filaire | Confort, anti-effraction | +200€ |
| Motorisé radio | Flexibilité, centralisation | +300€ |
| Motorisé solaire | Autonome, écologique | +400€ |
| Connecté | Domotique, smartphone | +450€ |

## Critère n°3 : Le type de pose

- **Pose sous linteau** : le coffre est visible à l'intérieur, sous le linteau
- **Pose en tableau** : le coffre est entre les tableaux de la fenêtre
- **Pose en façade** : le coffre est fixé sur la façade extérieure
- **Pose intégrée (monobloc)** : le coffre est intégré dans la maçonnerie

## Notre conseil d'expert

Pour une maison neuve ou une rénovation importante, nous recommandons **l'aluminium motorisé radio** : le meilleur compromis entre performance, confort et durabilité. Pour les petits budgets en rénovation, le **PVC motorisé filaire** offre un excellent rapport qualité/prix.

Contactez **Répar'Action Volets** au **06 03 20 59 67** pour un conseil personnalisé et un devis gratuit.`
  },
  {
    id: "volet-roulant-bloque-que-faire",
    title: "Volet Roulant Bloqué : Que Faire ? Solutions et Dépannage",
    excerpt: "Votre volet roulant est bloqué en position ouverte ou fermée ? Découvrez les causes possibles et les solutions pour le débloquer rapidement.",
    date: "12 février 2026",
    author: "Répar'Action Volets",
    category: "Dépannage",
    slug: "volet-roulant-bloque-que-faire",
    metaDescription: "Volet roulant bloqué ? Causes et solutions pour débloquer votre volet rapidement. Guide de dépannage express par Répar'Action Volets.",
    image: "/images/blog/volet-bloque.jpg",
    content: `## Volet roulant bloqué : ne paniquez pas !

Un volet roulant bloqué est l'une des pannes les plus fréquentes et les plus stressantes. Qu'il soit bloqué en position **ouverte** (problème de sécurité) ou **fermée** (manque de lumière), voici comment réagir.

## Les causes les plus fréquentes

### 1. Sangle cassée ou sortie de son enrouleur
**Symptôme** : la sangle pend mollement ou ne remonte plus.
**Solution immédiate** : ne forcez pas. Le tablier risque de tomber brusquement.
**Réparation** : remplacement de la sangle et du mécanisme d'enrouleur (80-120€).

### 2. Lames désalignées ou sorties des coulisses
**Symptôme** : le volet est bloqué à mi-course, on voit un décalage dans les lames.
**Solution immédiate** : essayez doucement de remonter le volet pour réaligner les lames.
**Réparation** : réalignement des lames et vérification des coulisses (100-150€).

### 3. Moteur défaillant (volet électrique)
**Symptôme** : aucun bruit quand vous actionnez l'interrupteur, ou un bourdonnement sans mouvement.
**Diagnostic** : vérifiez le disjoncteur dédié, la télécommande (piles) et les fils.
**Réparation** : remplacement du condensateur (90-150€) ou du moteur (180-350€).

### 4. Fin de course déréglée
**Symptôme** : le volet ne descend plus complètement ou ne remonte plus en haut.
**Solution** : un réglage des fins de course est nécessaire.
**Réparation** : intervention rapide de 20-30 minutes (80-120€).

### 5. Axe d'enroulement cassé
**Symptôme** : le volet est tombé dans le coffre et ne répond plus du tout.
**Solution** : nécessite l'ouverture du coffre et le remplacement de l'axe.
**Réparation** : intervention technique (150-250€).

## Ce que vous pouvez faire avant d'appeler un professionnel

1. **Vérifiez l'alimentation électrique** : disjoncteur, fusible dédié au volet
2. **Testez la télécommande** : changez les piles, essayez l'interrupteur mural
3. **Regardez les coulisses** : un objet coincé peut bloquer le tablier
4. **Ne forcez JAMAIS** : vous risquez d'aggraver la panne et d'augmenter le coût

## Quand appeler Répar'Action Volets ?

- Volet bloqué **en position ouverte** la nuit → urgence sécurité
- Volet **tombé** dans le coffre → réparation professionnelle requise
- **Bruit anormal** persistant → diagnostic nécessaire
- Volet bloqué depuis **plus de 24h** sans solution trouvée

Nous intervenons **sous 48h** (le jour même pour les urgences de sécurité). Diagnostic gratuit, devis transparent. Appelez le **06 03 20 59 67**.`
  },
  {
    id: "double-vitrage-avantages-prix",
    title: "Double Vitrage : Avantages, Prix et Aides Financières 2026",
    excerpt: "Le double vitrage est essentiel pour l'isolation de votre maison. Découvrez ses avantages, les prix pratiqués et les aides disponibles.",
    date: "10 février 2026",
    author: "Répar'Action Volets",
    category: "Vitrerie",
    slug: "double-vitrage-avantages-prix",
    metaDescription: "Double vitrage 2026 : avantages, prix détaillés et aides financières. Guide complet isolation thermique et phonique. Répar'Action Volets.",
    image: "/images/blog/vitrerie.jpg",
    content: `## Double vitrage : tout savoir en 2026

Le double vitrage est devenu le standard incontournable pour toute construction ou rénovation. Chez **Répar'Action Volets**, nous posons et remplaçons des vitrages dans toute la France.

## Comment fonctionne le double vitrage ?

Un double vitrage est composé de **deux plaques de verre** séparées par une **lame d'air** ou de **gaz argon** (meilleur isolant). Cette configuration crée une barrière thermique et acoustique efficace.

### Composition standard
- Verre extérieur : 4 mm
- Lame d'air ou argon : 16 mm
- Verre intérieur : 4 mm
- Notation : 4/16/4

## Les avantages du double vitrage

### Isolation thermique : jusqu'à 40% d'économies
Un double vitrage réduit les déperditions thermiques par les fenêtres de **40 à 50%** par rapport à un simple vitrage. En hiver, vous maintenez la chaleur ; en été, vous bloquez la chaleur extérieure.

### Isolation phonique : -30 dB
Le double vitrage standard réduit le bruit de **25 à 30 dB**. Pour les zones très bruyantes (proximité d'aéroport, route passante), un vitrage acoustique asymétrique peut atteindre **-40 dB**.

### Sécurité renforcée
Le double vitrage est plus résistant aux impacts et tentatives d'effraction qu'un simple vitrage. En version feuilletée, il résiste encore mieux et ne produit pas d'éclats dangereux.

### Réduction de la condensation
Le double vitrage élimine quasiment la condensation sur les vitres en hiver, ce qui améliore la qualité de l'air intérieur.

## Prix du double vitrage en 2026

| Type de vitrage | Prix au m² (fourni posé) |
|----------------|--------------------------|
| Double vitrage standard 4/16/4 | 150 à 250€ |
| Double vitrage argon | 200 à 300€ |
| Double vitrage acoustique | 250 à 400€ |
| Double vitrage anti-effraction | 300 à 500€ |
| Double vitrage à contrôle solaire | 280 à 450€ |
| Triple vitrage | 350 à 600€ |

## Aides financières disponibles

### MaPrimeRénov' 2026
Jusqu'à **100€ par fenêtre** pour le remplacement de simple vitrage par du double vitrage, sous conditions de revenus.

### TVA réduite à 5,5%
Pour les logements de plus de 2 ans, la TVA sur les travaux d'amélioration énergétique est réduite à 5,5% au lieu de 20%.

### Éco-prêt à taux zéro
Financez jusqu'à **50 000€** de travaux de rénovation énergétique sans payer d'intérêts.

### CEE (Certificats d'Économie d'Énergie)
Les fournisseurs d'énergie versent des primes pour les travaux d'isolation, y compris le remplacement de vitrage.

## Urgence vitrerie : bris de glace

En cas de vitre cassée, **Répar'Action Volets** intervient en urgence **7j/7** pour sécuriser votre habitation et remplacer le vitrage. Nous travaillons avec toutes les compagnies d'assurance. Appelez le **06 03 20 59 67**.`
  },
  {
    id: "domotique-volets-tout-savoir",
    title: "Domotique et Volets Roulants : Le Guide Complet de la Maison Connectée",
    excerpt: "Contrôlez vos volets depuis votre smartphone. Découvrez comment la domotique transforme votre habitat en maison intelligente.",
    date: "8 février 2026",
    author: "Répar'Action Volets",
    category: "Domotique",
    slug: "domotique-volets-tout-savoir",
    metaDescription: "Guide domotique volets roulants 2026 : Somfy TaHoma, Google Home, Alexa. Installation, prix et avantages. Répar'Action Volets expert connecté.",
    image: "/images/blog/domotique-volets.jpg",
    content: `## La domotique appliquée aux volets roulants : guide complet

La domotique permet de contrôler vos volets roulants depuis votre **smartphone**, votre **montre connectée** ou par la **voix**. En 2026, les solutions sont matures, accessibles et fiables.

## Que peut-on faire avec des volets connectés ?

### Contrôle à distance via smartphone
Où que vous soyez dans le monde, ouvrez ou fermez vos volets depuis l'application de votre box domotique. Idéal si vous avez oublié de fermer en partant ou pour aérer avant votre retour.

### Programmation horaire automatique
Programmez l'ouverture de vos volets à 7h30 le matin et la fermeture à 22h00 le soir. Vous pouvez créer des programmes différents pour la semaine et le week-end.

### Scénarios intelligents
- **Scénario "Je pars"** : tous les volets se ferment en un clic
- **Scénario "Cinéma"** : les volets du salon se ferment pour l'obscurité
- **Scénario "Vacances"** : simulation de présence avec ouvertures/fermetures aléatoires
- **Scénario "Réveil"** : les volets de la chambre s'ouvrent progressivement

### Contrôle vocal
"OK Google, ferme les volets du salon" — c'est aussi simple que ça. Compatible avec Google Home, Amazon Alexa et Apple HomeKit (selon la box choisie).

### Capteurs intelligents
- **Capteur de luminosité** : fermeture automatique quand le soleil tape fort
- **Capteur de vent** : remontée automatique en cas de tempête
- **Capteur de température** : gestion intelligente de l'isolation

## Les solutions domotiques disponibles

### Somfy TaHoma — La référence
- Compatible avec plus de 200 marques
- Application intuitive et complète
- Google Home, Alexa, Apple HomeKit
- Prix de la box : environ 350€

### Somfy Connexoon — L'entrée de gamme
- Fonctionnalités essentielles
- Compatible Google Home et Alexa
- Prix : environ 100€

### Solutions tierces
- **Fibaro** : très personnalisable mais technique
- **Jeedom** : open source, pour les passionnés
- **Home Assistant** : solution gratuite et puissante

## Budget domotique volets roulants

| Composant | Prix |
|-----------|------|
| Moteur connecté (par volet) | 350-500€ |
| Box domotique (Somfy TaHoma) | 300-400€ |
| Capteur soleil/vent | 80-150€ |
| Installation professionnelle | 100-200€/volet |
| **Budget total (5 volets)** | **2 500 - 4 000€** |

## L'installation par Répar'Action Volets

Nous prenons en charge l'intégralité de votre projet domotique : conseil, fourniture, installation, configuration et formation. Nos techniciens sont certifiés Somfy Expert. Contactez-nous au **06 03 20 59 67**.`
  },
  {
    id: "isolation-thermique-volets-roulants",
    title: "Isolation Thermique par les Volets Roulants : Économisez jusqu'à 25%",
    excerpt: "Les volets roulants sont un excellent moyen d'améliorer l'isolation de votre maison. Découvrez comment réduire vos factures d'énergie.",
    date: "6 février 2026",
    author: "Répar'Action Volets",
    category: "Économies",
    slug: "isolation-thermique-volets-roulants",
    metaDescription: "Isolation thermique volets roulants : réduisez vos factures de 25%. Guide complet performances énergétiques. Répar'Action Volets expert isolation.",
    image: "/images/blog/isolation-thermique.jpg",
    content: `## Volets roulants et isolation thermique : un duo gagnant

Les volets roulants sont bien plus qu'une protection contre le soleil et les regards. Correctement choisis et installés, ils peuvent réduire vos déperditions thermiques de **10 à 25%** et alléger significativement votre facture énergétique.

## Comment les volets roulants isolent-ils ?

### Le principe de la lame d'air
Lorsque votre volet est fermé, il crée une **lame d'air** entre le vitrage et le tablier du volet. Cette couche d'air agit comme un isolant supplémentaire, à l'image du double vitrage.

### Les lames à double paroi
Les volets roulants modernes en aluminium sont constitués de lames à **double paroi** remplies de **mousse polyuréthane** haute densité. Ce matériau offre d'excellentes performances isolantes.

### Le coffre isolé
Les coffres de volets récents intègrent une isolation intérieure qui évite les ponts thermiques au niveau du linteau.

## Performances d'isolation selon le matériau

| Matériau | Résistance thermique (R) | Isolation phonique |
|----------|--------------------------|-------------------|
| Aluminium double paroi | 0.25 m²K/W | -8 dB |
| PVC | 0.20 m²K/W | -6 dB |
| Bois | 0.30 m²K/W | -10 dB |
| Aluminium + mousse PU | 0.35 m²K/W | -12 dB |

## Économies concrètes sur votre facture

En combinant des volets roulants performants avec un double vitrage, vous pouvez atteindre les économies suivantes :

- **Hiver** : réduction de 20 à 25% des déperditions par les fenêtres
- **Été** : réduction de 50 à 70% des apports de chaleur solaire
- **Facture annuelle** : économies de 200 à 500€ selon la taille du logement

### Exemple concret
Pour un appartement de 80m² avec 6 fenêtres :
- Facture chauffage avant : ~1 500€/an
- Facture chauffage après installation de volets alu motorisés : ~1 150€/an
- **Économie annuelle** : 350€, soit un amortissement en 4-5 ans

## Comment maximiser l'isolation ?

1. **Choisissez l'aluminium à double paroi** avec mousse polyuréthane
2. **Motorisez vos volets** avec programmation horaire (fermeture automatique la nuit)
3. **Vérifiez les joints** entre le coffre et le mur (pas de pont thermique)
4. **Combinez** avec du double vitrage performant

## Les aides pour améliorer votre isolation

L'installation de volets roulants isolants par un artisan **RGE** (comme Répar'Action Volets) vous donne accès à :
- **MaPrimeRénov'** : jusqu'à 25€/m²
- **TVA à 5,5%** au lieu de 20%
- **Éco-PTZ** : prêt sans intérêts

Contactez **Répar'Action Volets** au **06 03 20 59 67** pour un bilan thermique gratuit.`
  },
  {
    id: "aides-financieres-renovation-volets-2026",
    title: "Aides Financières Rénovation Volets 2026 : MaPrimeRénov', TVA, Éco-PTZ",
    excerpt: "Découvrez toutes les aides financières pour la rénovation de vos volets en 2026. Jusqu'à 50% d'économies sur vos travaux.",
    date: "4 février 2026",
    author: "Répar'Action Volets",
    category: "Financement",
    slug: "aides-financieres-renovation-volets-2026",
    metaDescription: "Aides rénovation volets 2026 : MaPrimeRénov', TVA 5,5%, Éco-PTZ, CEE. Guide complet des subventions. Répar'Action Volets certifié RGE.",
    image: "/images/blog/aides-financieres.jpg",
    content: `## Les aides financières pour rénover vos volets en 2026

Bonne nouvelle : en 2026, de nombreuses aides financières sont disponibles pour vous aider à remplacer ou installer des volets roulants performants. Chez **Répar'Action Volets**, artisan certifié **RGE**, nous vous accompagnons dans toutes vos démarches.

## 1. MaPrimeRénov' 2026

### Conditions d'éligibilité
- Logement de plus de **15 ans** (résidence principale)
- Travaux réalisés par un artisan **RGE**
- Volets roulants contribuant à l'isolation thermique

### Montants des aides
| Profil revenus | Aide par volet | Plafond |
|----------------|---------------|---------|
| Très modestes (bleu) | 25€/m² | 100% pris en charge |
| Modestes (jaune) | 20€/m² | 80% pris en charge |
| Intermédiaires (violet) | 15€/m² | 60% pris en charge |
| Supérieurs (rose) | Non éligible | — |

### Comment en bénéficier ?
1. Créez votre compte sur maprimerenov.gouv.fr
2. Faites réaliser un devis par Répar'Action Volets (RGE)
3. Déposez votre dossier en ligne
4. Recevez l'accord avant de démarrer les travaux
5. La prime est versée après les travaux

## 2. TVA réduite à 5,5%

Pour tous les logements de **plus de 2 ans**, les travaux d'amélioration énergétique bénéficient d'une TVA à 5,5% au lieu de 20%. C'est automatique quand vous faites appel à un professionnel.

**Économie concrète** : sur un devis de 3 000€ HT, vous économisez **435€** de TVA.

## 3. Éco-prêt à taux zéro (Éco-PTZ)

### Principe
Empruntez jusqu'à **50 000€ sans intérêts** pour financer vos travaux de rénovation énergétique. Remboursement sur 20 ans maximum.

### Conditions
- Logement construit avant 2001
- Pas de conditions de revenus
- Au moins 2 types de travaux (ex : volets + vitrage)

## 4. CEE (Certificats d'Économie d'Énergie)

Les fournisseurs d'énergie (EDF, Engie, Total) versent des primes pour les travaux d'isolation. Le montant varie selon le fournisseur et votre zone géographique.

**Montant moyen** : 50 à 150€ par volet installé.

## 5. Aides locales

De nombreuses collectivités locales proposent des aides complémentaires. Renseignez-vous auprès de votre mairie ou de l'ADIL de votre département.

## Cumul des aides : jusqu'à 50% d'économies

La bonne nouvelle est que ces aides sont **cumulables** ! Voici un exemple concret :

### Exemple pour 6 volets roulants alu motorisés
- **Devis initial** : 4 200€ TTC (TVA 20%)
- **TVA 5,5%** : 3 675€ TTC (-525€)
- **MaPrimeRénov'** (revenus modestes) : -600€
- **CEE** : -450€
- **Reste à charge** : 2 625€ au lieu de 4 200€ = **37% d'économies**

## Répar'Action Volets vous accompagne

En tant qu'artisan certifié **RGE** et **Qualibat**, nous vous aidons à :
- Identifier les aides auxquelles vous avez droit
- Remplir les dossiers administratifs
- Fournir les attestations nécessaires

Appelez le **06 03 20 59 67** pour un conseil gratuit sur vos aides.`
  }
];
