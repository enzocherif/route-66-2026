/* =========================================================
   ROUTE 66 TRIP DATA — Enzo & Noé — 5 → 22 septembre 2026
   Source: Planning "Voiture Commun" + recherches (Août 2026)
   ========================================================= */

const WIKI = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;
const gmaps = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const gmapsDir = (from, to) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}&travelmode=driving`;

const DAYS = [
// ---------------------------------------------------------------- JOUR 1
{
  id: 1, date: "5 sept.", weekday: "Samedi", region: "Oklahoma",
  title: "Envol vers Oklahoma City",
  wake: "Selon vol", wakeType:"flight",
  wakeReason: "Pas de grasse matinée possible ici : tout dépend de l'horaire du vol PIT → OKC. Réglez le réveil pour être à l'aéroport environ 2h avant le décollage.",
  breakfast: { included:false, note:"Jour d'arrivée : pas de petit-déjeuner d'hôtel possible. Prévoyez de manger à l'aéroport (Pittsburgh ou à l'arrivée à OKC) ou dès les premières courses en ville." },
  photo: WIKI("Downtown Oklahoma City skyline at twilight.jpg"),
  photoCap: "Downtown Oklahoma City — Wikimedia Commons",
  hotel: { name: "Hôtel OKC", link: "https://www.booking.com/Share-ckQuly", price: "35,50 $ / pers." },
  alert: null,
  timeline: [
    { type:"drive", label:"Vol Pittsburgh → Oklahoma City", dur:"4 h 48", desc:"Départ PIT, atterrissage OKC. Vérifiez l'enregistrement en ligne et le poids des bagages 24h avant." },
    { type:"activity", label:"Récupération du véhicule de location", dur:"~2 h", desc:"Comptez large : contrôle du contrat, assurance, état des lieux. Prenez des photos de la voiture avant de partir.", link: null },
    { type:"activity", label:"Courses de départ — provisions pour la route", dur:"—", desc:"Premier arrêt supermarché (Walmart / Target) avant de quitter OKC : eau, snacks, glacière. Voir la liste de courses détaillée plus bas sur cette page.", linkText:"Aller à la liste de courses", anchor:"#courses" },
    { type:"activity", label:"Balade dans Oklahoma City", dur:"Fin d'après-midi / soirée", desc:"Bricktown (canal, restos, ambiance), le mémorial national d'Oklahoma City si vous avez le temps et l'envie (lieu recueilli, à faire en journée plutôt)." },
    { type:"sleep", label:"Dodo — Oklahoma City", dur:"", desc:"Réservé.", link:"https://www.booking.com/Share-ckQuly", linkText:"Voir la réservation" }
  ],
  highlight: null
},
// ---------------------------------------------------------------- JOUR 2
{
  id: 2, date: "6 sept.", weekday: "Dimanche", region: "Oklahoma → Texas → Nouveau-Mexique",
  title: "Panhandle du Texas : la vraie Route 66 kitsch",
  wake: "6h45", wakeType:"calc",
  wakeReason: "Calculé à rebours depuis l'arrivée visée à Buc-ee's pour le déjeuner (12h-13h). Trajet + arrêts photo avant Buc-ee's : Conoco Tower/U-Drop Inn (2h30 de route + ~25 min sur place), Cross (47 min + ~10 min), Slug Bug Ranch (16 min + ~15 min), puis 20 min jusqu'à Buc-ee's — soit environ 4h45 au total depuis l'hôtel. Avec le petit-déjeuner inclus à l'hôtel OKC, départ visé vers 7h45.",
  breakfast: { included:true, note:"Petit-déjeuner à l'Hôtel Oklahoma City (nuit précédente) — prévoyez-le entre 7h00 et 7h30 pour pouvoir partir vers 7h45 (voir le calcul du réveil ci-dessus)." },
  photo: WIKI("Cadillac Ranch.jpg"),
  photoCap: "Cadillac Ranch, Amarillo (Texas) — Wikimedia Commons",
  hotel: { name: "Hôtel Tucumcari", link: "https://www.booking.com/Share-W7rA1m", price: "27,78 $ / pers." },
  alert: { tone:"mustard", title:"Journée à étapes multiples", text:"Beaucoup de petits arrêts photo aujourd'hui, tous calés autour du déjeuner à Buc-ee's (12h-13h) — voir le détail horaire ci-dessus. Faites le plein d'essence à chaque grande ville, les stations se raréfient entre les bourgades." },
  timeline: [
    { type:"activity", label:"Petit-déjeuner + départ de l'hôtel OKC", dur:"7h00 → 7h45", desc:"Petit-déjeuner inclus, chargement de la voiture, départ visé 7h45 pour tenir l'horaire du déjeuner à Buc-ee's." },
    { type:"drive", label:"OKC → Conoco Tower Station & U-Drop Inn Café", dur:"2 h 30 de route · arrivée ≈10h15", desc:"Station-service Art déco emblématique de la Route 66, à Shamrock (TX). Comptez environ 25 min sur place (photos, éventuellement un café).", link: gmaps("35°22'50.6\"N 99°32'42.3\"W"), linkText:"Itinéraire Google Maps" },
    { type:"drive", label:"→ Cross of our Lord Jesus Christ Ministries", dur:"47 min de route · arrivée ≈11h30", desc:"Immense croix visible depuis l'autoroute, arrêt photo rapide (~10 min).", link: gmaps("35°12'18.1\"N 101°0'59.3\"W"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"→ VW Slug Bug Ranch", dur:"16 min de route · arrivée ≈11h55", desc:"Le petit frère de Cadillac Ranch : des Coccinelles plantées dans le sol, couvertes de graffitis. Comptez ~15 min sur place.", link: gmaps("35°12'48.7\"N 101°21'25.5\"W"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"→ Buc-ee's (déjeuner)", dur:"20 min de route · arrivée ≈12h30", desc:"La méga station-service texane culte — parfait pour manger, refaire le plein et le stock de snacks. Comptez 45-60 min sur place avec le repas.", link: gmaps("35°12'21.6\"N 101°38'10.0\"W"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"→ Amarillo", dur:"11 min", desc:"Traversée rapide de la ville, pas d'arrêt prévu.", link: gmaps("35°12'0.9\"N 101°49'15.3\"W"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"→ 2nd Amendment Cowboy", dur:"13 min", desc:"Statue kitsch d'un cowboy géant armé — arrêt photo 5-10 min.", link: gmaps("35°11'48.5\"N 101°56'40.1\"W"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"→ Cadillac Ranch", dur:"2 min de route · ≈30-45 min sur place", desc:"L'incontournable : 10 Cadillacs plantées à la verticale, entièrement recouvertes de graffitis. Apportez une bombe de peinture si vous voulez laisser votre trace (vendues sur place par des vendeurs informels). Accès libre à pied depuis le chemin de terre le long de l'I-40.", link: gmaps("Cadillac Ranch Amarillo Texas"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"→ Tucumcari (Nouveau-Mexique)", dur:"1 h 29 · arrivée en fin d'après-midi", desc:"Étape nuit — ville-néon historique de la Route 66, jolie à l'heure bleue.", link: gmaps("35°13'37.9\"N 103°30'46.8\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Tucumcari", dur:"", desc:"Réservé.", link:"https://www.booking.com/Share-W7rA1m", linkText:"Voir la réservation" }
  ],
  highlight: null
},
// ---------------------------------------------------------------- JOUR 3
{
  id: 3, date: "7 sept.", weekday: "Lundi", region: "Nouveau-Mexique",
  title: "Journée à Santa Fe",
  wake: "7h30", wakeType:"calc",
  wakeReason: "Programme assez dense aujourd'hui (brunch, Plaza, Fiesta, Canyon Road, chocolaterie...) avec un départ pour Bloomfield à ne pas repousser après 16h30 (3h de route ensuite). Départ de Tucumcari visé à 8h00 pour une arrivée à Santa Fe vers 10h35.",
  breakfast: { included:true, note:"Petit-déjeuner léger à l'Hôtel Tucumcari (nuit précédente) — gardez de la place, un vrai brunch New Mexican vous attend à Café Pasqual's vers 10h45." },
  photo: WIKI("Santa Fe Plaza.jpg"),
  photoCap: "Santa Fe Plaza, Nouveau-Mexique — Wikimedia Commons",
  hotel: { name: "Hôtel Bloomfield", link: "https://www.booking.com/Share-BGfTBSx", price: "35 $ / pers." },
  alert: { tone:"mustard", title:"Coup de chance de calendrier", text:"Le Fiesta Fine Arts & Crafts Market se tient officiellement sur la Plaza du 5 au 7 septembre 2026, 9h-17h — vous tombez pile le dernier jour. Pas de réservation nécessaire pour Café Pasqual's (premier arrivé, premier servi), mais arriver proche de 10h45 évite le coup de bourre du brunch dominical/lundi." },
  timeline: [
    { type:"drive", label:"Tucumcari → Santa Fe", dur:"8h00 → 10h35 (≈2h35 de route)", desc:"Route agréable, altitude qui monte progressivement (Santa Fe est à ~2100 m).", link: gmaps("35°40'54.8\"N 105°57'1.8\"W"), linkText:"Itinéraire Google Maps" },
    { type:"activity", label:"Parking — Sandoval Municipal Garage", dur:"≈10h35", desc:"216 W San Francisco Street. Grand parking municipal (382 places) à quelques minutes à pied de la Plaza, max 12 $/jour. Une fois garés, vous n'avez quasiment plus besoin de la voiture jusqu'au soir.", link: gmaps("Sandoval Municipal Garage Santa Fe"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Café Pasqual's — brunch New Mexican", dur:"10h45 → 11h45", desc:"121 Don Gaspar Ave. Ouvert tous les jours 8h-15h pour le breakfast/lunch, premier arrivé premier servi. À tester : huevos rancheros, breakfast enchilada, quesadilla — et le fameux choix green chile / red chile / \"Christmas\" (les deux) pour goûter. Si vous ne mangez pas de porc, précisez-le au serveur : certaines préparations New Mexican (chorizo) n'affichent pas toujours clairement sa présence.", link: gmaps("Cafe Pasqual's Santa Fe"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Santa Fe Plaza + Fiesta Fine Arts & Crafts Market + Palace of the Governors", dur:"11h50 → 12h50", desc:"Bâtiments historiques en adobe, marché d'artisanat de la Fiesta (dernier jour !), boutiques, artistes sous les arcades du Palace of the Governors. L'intérêt est surtout l'ambiance extérieure — pas besoin de rentrer dans un musée ici. Bon moment pour un souvenir du roadtrip.", link: gmaps("Santa Fe Plaza"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Loretto Chapel", dur:"13h00 → 13h25", desc:"Le fameux escalier hélicoïdal en bois, sans support central apparent. Rapide mais vraiment associé à Santa Fe.", link: gmaps("Loretto Chapel Santa Fe"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Cathedral Basilica of St. Francis of Assisi", dur:"13h30 → 13h45", desc:"Juste la façade, Cathedral Park et quelques photos — pas la peine d'en faire une visite d'église complète.", link: gmaps("Cathedral Basilica of St. Francis of Assisi Santa Fe"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Canyon Road", dur:"13h55 → 15h00", desc:"Le quartier incontournable de Santa Fe : maisons en adobe, petites rues, patios, sculptures, galeries d'art, montagnes en arrière-plan. Flânez sans faire toutes les galeries — 2 ou 3 maximum suffisent, l'important est l'ambiance du quartier.", link: gmaps("Canyon Road Santa Fe"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Kakawa Chocolate House", dur:"15h05 → 15h35", desc:"1050 Paseo de Peralta. Ouvert lun-sam 11h-18h. Spécialiste des chocolate elixirs, des chocolats à boire bien plus concentrés qu'un chocolat chaud classique, aux inspirations chile/épices/mésoaméricaines. Prenez chacun un elixir différent pour goûter les deux. Truffes Santa Fe (prickly pear, horchata, cherry-chili) pour ramener un souvenir gourmand.", link: gmaps("Kakawa Chocolate House Santa Fe"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"Cross of the Martyrs", dur:"15h45 → 16h20", desc:"Petite montée (10-15 min) au-dessus du centre-ville pour une vue panoramique sur Santa Fe et les montagnes environnantes — 10-15 min en haut, 10 min pour redescendre. Belle façon de finir après une journée dans les petites rues adobe.", link: gmaps("Cross of the Martyrs Santa Fe"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Santa Fe → Bloomfield", dur:"16h30 → ≈19h30-19h45", desc:"Départ à ne pas trop repousser : environ 3h de route jusqu'à Bloomfield.", link: gmaps("36°7'12.0\"N 108°17'37.6\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Bloomfield", dur:"", desc:"Réservé.", link:"https://www.booking.com/Share-BGfTBSx", linkText:"Voir la réservation" }
  ],
  highlight: null
},
// ---------------------------------------------------------------- JOUR 4
{
  id: 4, date: "8 sept.", weekday: "Mardi", region: "Arizona / Utah",
  title: "Monument Valley, Forrest Gump Point & Navajo National Monument",
  wake: "7h00", wakeType:"calc",
  wakeReason: "Calculé pour tenir le programme complet de la journée : petit-déj à 7h15, courses de pique-nique au Farmers Market de Bloomfield jusqu'à 7h55, départ 8h00. Journée dense (Forrest Gump Point, Scenic Drive complète, Navajo National Monument) avant une arrivée raisonnable à Tusayan — vous avez Bright Angel Trail dès le lendemain matin, très tôt.",
  breakfast: { included:true, note:"Petit-déjeuner à l'Hôtel Bloomfield (nuit précédente) à 7h15, puis un saut au Farmers Market local pour les courses de pique-nique du midi (sandwichs/wraps, chips, fruits, boissons, eau) — objectif : ne prévoir aucun restaurant à Monument Valley et pique-niquer face aux Mittens." },
  photo: WIKI("Monument Valley Landscape.jpg"),
  photoCap: "Monument Valley Navajo Tribal Park — Wikimedia Commons",
  hotel: { name: "Hôtel Tusayan", link: "https://www.booking.com/Share-mp0o9Ru", price: "85 $ / pers." },
  alert: { tone:"mustard", title:"Horaires + fuseau horaire", text:"Le parc est géré par la Nation Navajo (pas par le National Park Service — le pass America the Beautiful n'est PAS accepté). En horaires d'été, le parc ouvre 8h-19h avec dernière entrée sur la Scenic Drive vers 16h30 (à revérifier sur place le jour même, ces horaires bougent selon la saison). Autre piège : la Navajo Nation reste à l'heure d'été (MDT) alors que Grand Canyon/Tusayan repasse à l'heure standard (MST) — en quittant la réserve en fin de journée, vous gagnez une heure sur l'horloge." },
  timeline: [
    { type:"activity", label:"Petit-déjeuner à l'hôtel", dur:"7h15", desc:"Hôtel Bloomfield." },
    { type:"activity", label:"Farmers Market — courses de pique-nique", dur:"7h30 → 7h55", desc:"Sandwichs/wraps, chips ou crackers, fruits, boissons fraîches, eau en quantité, snacks pour la route. Tout dans la glacière — c'est votre déjeuner du jour, directement face aux Mittens." },
    { type:"drive", label:"Départ Bloomfield → Forrest Gump Point", dur:"8h00 → ≈11h10", desc:"Vous passez près de Monument Valley puis continuez sur US-163 vers le nord jusqu'au mile marker 13." },
    { type:"activity", label:"Forrest Gump Point", dur:"≈11h10 → 11h35 (20-25 min)", desc:"LE cliché de la route droite avec Monument Valley au bout. ⚠️ Photographiez uniquement depuis l'accotement, jamais au milieu de la route — plusieurs accidents graves y ont eu lieu. Après ça, demi-tour vers le sud sur US-163 en direction du Visitor Center : vous ne reviendrez plus vers le nord ensuite.", link: gmaps("Forrest Gump Point Utah"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Monument Valley Visitor Center", dur:"≈11h55 → 12h20 (20-25 min)", desc:"Ne commencez pas tout de suite la Scenic Drive : allez d'abord au grand overlook derrière le Visitor Center. C'est LA vue carte postale — West Mitten Butte, East Mitten Butte, Merrick Butte. Toilettes, photos, vérification de l'état de la piste avant de partir.", link: gmaps("Monument Valley Visitor Center"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Pique-nique face aux Mittens", dur:"12h20 → 12h50", desc:"Sortez les courses du Farmers Market : sandwich, chips, boisson, avec West Mitten, East Mitten et Merrick Butte juste devant vous. Un des meilleurs \"restaurants\" du voyage, gratuit." },
    { type:"hike", label:"Monument Valley Scenic Drive — boucle complète", dur:"≈13h00 → 15h30-15h45 (2h30-2h45)", desc:"Boucle non goudronnée de 17 miles / 27 km. Voir le détail des arrêts recommandés dans la fiche ci-contre — ne coupez jamais John Ford's Point, Artist's Point, Totem Pole ou North Window si vous manquez de temps ; c'est plutôt sur Elephant Butte et Camel Butte qu'on peut rogner.", link: "https://www.monument-valley.com/scenic-drive-guide/", linkText:"Guide complet de la Scenic Drive" },
    { type:"activity", label:"Boutique / artisans Navajo", dur:"15h45 → 16h00 (15 min max)", desc:"De retour au Visitor Center : bijoux, artisanat et souvenirs vendus directement par des artisans locaux. Si vous voulez ramener un souvenir de Monument Valley, c'est le meilleur endroit pour ça." },
    { type:"drive", label:"→ Navajo National Monument", dur:"16h00 → ≈17h00", desc:"Quitter US-160 et faire 9 miles sur AZ-564 jusqu'au monument.", link: gmaps("Navajo National Monument Visitor Center"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"Navajo National Monument — Sandal Trail", dur:"≈17h00 → 17h45 (40-45 min)", desc:"1,3 mile / 2,1 km A/R, sentier pavé, ~30 min de marche. Mène au viewpoint sur Betatakin, un village ancestral construit dans une immense alcôve de falaise — le seul endroit du parc accessible librement pour voir une cliff dwelling, sans randonnée guidée. Le Visitor Center ferme à 17h mais le sentier reste généralement accessible jusqu'au coucher du soleil.", link: gmaps("Sandal Trail Navajo National Monument"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"→ Tusayan", dur:"17h45 → ≈19h-19h30 (heure de Tusayan)", desc:"AZ-564 → US-160 → Tuba City → Cameron → AZ-64 → Tusayan. Vous gagnez une heure en quittant la Navajo Nation (MDT → MST), donc l'arrivée réelle sur l'horloge de Tusayan est plus tôt qu'il n'y paraît — parfait avant le lever à 3h10 du lendemain pour Bright Angel Trail.", link: gmaps("36°4'28.2\"N 112°29'50.6\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Tusayan", dur:"", desc:"Réservé.", link:"https://www.booking.com/Share-mp0o9Ru", linkText:"Voir la réservation" }
  ],
  highlight: {
    name: "Monument Valley Scenic Drive",
    difficulty: "moderate", diffLabel: "Facile (en voiture)",
    distance: "27 km / 17 miles (boucle)",
    duration: "2h30 à 3 h avec les arrêts",
    water: "Emportez de l'eau — aucun point de ravitaillement sur la boucle hormis le Visitor Center.",
    gear: "En conditions sèches, la plupart des 2WD passent, mais les berlines basses peuvent toucher sur les portions les plus abîmées ; après une grosse pluie, boue et sections dégradées possibles (surveillez la météo de mousson). La Navajo Nation ne couvre pas les dommages aux véhicules sur la Loop Drive. Chaussures fermées si vous descendez marcher, crème solaire, casquette.",
    reservation: "Pas de réservation nécessaire pour la scenic drive. Guide Navajo optionnel (~60-120 $/pers) pour accéder aux zones réservées (Mystery Valley, Hunts Mesa), réservable sur place ou en ligne avant le départ.",
    tips: [
      "🥇 John Ford's Point (10/10, 20-25 min) et Mittens & Merrick Butte (10/10, 10 min) : les deux arrêts à ne surtout pas bâcler.",
      "🥈 Artist's Point (9,5/10, 15-20 min) : l'un des panoramas les plus larges de la vallée, marchez quelques mètres autour du viewpoint.",
      "🥉 Totem Pole & Yei Bi Chei (9/10, 15 min) et North Window Overlook (9/10, 10-15 min) : deux autres arrêts majeurs, formations très différentes du reste.",
      "Three Sisters (8,5/10, 10 min) mérite un arrêt court ; Elephant Butte (7,5/10) et Camel Butte (7/10) sont sympas mais dispensables si vous manquez de temps (5-10 min chacun suffit).",
      "Guide complet avec plan et détail de chaque arrêt : monument-valley.com/scenic-drive-guide.",
      "Le sunset autour du 13 septembre est particulier : les ombres des deux Mittens s'alignent parfaitement (Mitten Shadow) — vous n'y êtes pas tout à fait, mais pas très loin non plus.",
      "Pas de pass America the Beautiful accepté ici : c'est une réserve tribale Navajo, pas un parc national fédéral."
    ]
  }
},
// ---------------------------------------------------------------- JOUR 5
{
  id: 5, date: "9 sept.", weekday: "Mercredi", region: "Arizona",
  title: "Grand Canyon — Bright Angel Trail → Plateau Point",
  wake: "3h10", wakeType:"calc",
  wakeReason: "Calculé à rebours depuis le lever du soleil (~6h06 le 9 septembre au Grand Canyon) et la recommandation du NPS de partir avant l'aube en été/début d'automne pour éviter la chaleur ET la foule. Départ hôtel 3h10 → parking 3h35 → premiers pas sur le sentier 3h45-4h00, frontale obligatoire.",
  breakfast: { included:false, note:"Pas de petit-déjeuner à l'Hôtel Tusayan (nuit précédente) — et de toute façon vous partez à 3h10, bien avant l'ouverture d'une éventuelle salle de petit-déj. Achetez la veille (jour 4, en arrivant à Tusayan) de quoi manger avant de partir : fruits, barres, sandwich pour le petit-déj et pour le sac à dos de la rando." },
  photo: WIKI("Grand Canyon South Rim at Sunset.jpg"),
  photoCap: "Grand Canyon, South Rim — Wikimedia Commons",
  hotel: { name: "Hôtel Page", link: "https://www.booking.com/Share-GNo6a7", map: "https://maps.app.goo.gl/SHyVVBQX6tLhR1gK7", price: "24,04 $ / pers." },
  alert: { tone:"rust", title:"Pass parc national — à acheter avant le trajet", text:"Achetez le pass America the Beautiful (80 $, valable 1 an, tous les parcs nationaux dont Grand Canyon, Zion, Death Valley, Sequoia, Yosemite) en ligne sur recreation.gov avant de partir, ou payez l'entrée à la barrière du Grand Canyon (environ 35-40 $/véhicule sinon). Sur 5-6 parcs du voyage, le pass est largement rentabilisé." },
  timeline: [
    { type:"activity", label:"Départ de l'hôtel (Tusayan)", dur:"3h10", desc:"Direction le South Rim. Pas de navette Tusayan à cette heure — on y va en voiture. Le South Rim est ouvert 24h/24, aucun souci pour entrer de nuit." },
    { type:"activity", label:"Parking Lot D (Backcountry Information Center)", dur:"~3h35", desc:"Si le petit parking du trailhead est plein (probable même à cette heure en haute saison), le NPS recommande Lot D : il ne reste que 0,65 km à pied (5-10 min) jusqu'au départ du sentier.", link: gmaps("Backcountry Information Center Grand Canyon Lot D"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"Départ Bright Angel Trailhead", dur:"3h45-4h00", desc:"Remplissage complet des gourdes + toilettes avant de descendre (eau potable et toilettes directement au départ). Frontale allumée, nuit noire pour les premiers switchbacks.", link: "https://maps.app.goo.gl/T2NA2rYChUVnRfvcA", linkText:"Ouvrir le point de départ" },
    { type:"hike", label:"Mile-and-a-Half Resthouse (2,4 km, alt. ~1 748 m)", dur:"~4h40", desc:"Eau potable saisonnière, toilettes, abri, téléphone d'urgence. Probablement encore nuit noire à cette heure — pause courte." },
    { type:"hike", label:"Three-Mile Resthouse (4,8 km, alt. ~1 449 m)", dur:"~5h30", desc:"Le ciel commence à s'éclaircir. Vous avez déjà perdu environ 645 m depuis le départ." },
    { type:"hike", label:"Havasupai Gardens (7,2 km, alt. ~1 160 m)", dur:"~6h30-6h45", desc:"Oasis au milieu du canyon : ranger station, téléphone d'urgence, toilettes, eau potable toute l'année. Vraie pause de 10-15 min ici : manger, remplir les gourdes à fond, électrolytes, crème solaire. Attention à bien prendre la branche Plateau Point Trail (pas Bright Angel vers le Colorado)." },
    { type:"hike", label:"Plateau Point (≈9,8 km, aller)", dur:"~7h20-7h45", desc:"Vue spectaculaire et directe sur le Colorado River en contrebas, dans la Granite Gorge. Section plate mais très exposée au soleil, sans aucun point d'eau — d'où l'intérêt de la passer avant que le soleil ne tape. Restez 20-30 min : photos, snack, on ne traîne pas plus en septembre.", link: gmaps("Plateau Point Grand Canyon"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"Retour — Havasupai Gardens", dur:"~8h15 → 9h00", desc:"Remplissage d'eau à fond ici : c'est le dernier point d'eau fiable avant la longue remontée." },
    { type:"hike", label:"Retour — Three-Mile puis Mile-and-a-Half Resthouse", dur:"~10h30 → 11h45", desc:"La remontée est la partie la plus dure : environ 925 m de dénivelé cumulé depuis Havasupai Gardens, avec les derniers kilomètres les plus raides. Comptez large, hydratez-vous régulièrement." },
    { type:"hike", label:"Retour au South Rim", dur:"~13h-14h", desc:"Objectif : être redescendus avant le pic de chaleur de l'après-midi. Douche, repas et repos mérités à Tusayan ensuite." },
    { type:"drive", label:"Grand Canyon → Page", dur:"2 h 37", desc:"", link: gmaps("36°3'19.9\"N 113°5'6.0\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Page", dur:"", desc:"Réservé.", link:"https://www.booking.com/Share-GNo6a7", linkText:"Voir la réservation" }
  ],
  highlight: {
    name: "Bright Angel Trail → Plateau Point",
    difficulty: "hard", diffLabel: "Difficile (la remontée surtout)",
    distance: "19,6 km A/R jusqu'à Plateau Point (dénivelé cumulé ≈ 940-975 m) · Repli possible à Havasupai Gardens : 14,4 km A/R (≈925 m de dénivelé)",
    duration: "9 à 12 h selon le NPS (comptez au moins 2× plus de temps pour remonter que pour descendre)",
    water: "Le NPS affiche en temps réel l'état des points d'eau (Bright Angel Trailhead, Mile-and-a-Half, Three-Mile, Havasupai Gardens) sur sa page \"key messages\" — vérifiez-la la veille, une rupture de canalisation peut couper l'eau sans préavis. Prévoyez malgré tout une capacité de 3 L/pers + électrolytes + un moyen de traitement de secours. Aucun point d'eau entre Havasupai Gardens et Plateau Point.",
    gear: "Frontale + piles/batterie de secours (départ avant l'aube), gourdes 3 L, électrolytes, petit-déj + sandwich/wrap + barres + fruits secs + snacks salés, chaussures de rando déjà faites au pied (pas de paire neuve), chaussettes de rechange, casquette/chapeau, lunettes de soleil, SPF 50, t-shirt respirant + petite couche pour le départ nocturne, mini imperméable (fin de saison mousson possible), kit ampoules/Compeed, téléphone avec carte hors-ligne + batterie externe, bâtons de rando pour la remontée.",
    reservation: "Aucune réservation ni permis nécessaire pour une randonnée à la journée — seul le camping en profondeur de canyon (Havasupai Gardens ou Bright Angel Campground) demanderait un permis backcountry payant, non concerné ici.",
    tips: [
      "Différence de température : environ +3°C par 300 m de descente — le fond du canyon (Havasupai Gardens, Plateau Point) peut être 15-17°C plus chaud que le South Rim. Ne vous fiez pas à la météo du matin au parking.",
      "Convois de mules possibles sur le sentier : arrêtez-vous et suivez les instructions du meneur (wrangler) plutôt que d'essayer de vous faufiler.",
      "Repères de repli si besoin : Mile-and-a-Half Resthouse (2,4 km), Three-Mile Resthouse (4,8 km), Havasupai Gardens (7,2 km) — chacun est un point de demi-tour valable, pas d'obligation d'aller jusqu'à Plateau Point.",
      "Le NPS déconseille explicitement de continuer au-delà de Havasupai Gardens pour la plupart des randonneurs en pleine chaleur — évaluez la forme du groupe à ce point avant de continuer.",
      "Si vous avez encore de l'énergie le soir, remonter sur le Rim pour le coucher du soleil est un joli bonus (dans ce cas, décalez légèrement le départ vers Page)."
    ]
  }
},
// ---------------------------------------------------------------- JOUR 6
{
  id: 6, date: "10 sept.", weekday: "Jeudi", region: "Arizona",
  title: "Page → Horseshoe Bend → Upper Antelope Canyon → Kayak → Kanab",
  wake: "6h30", wakeType:"calc",
  wakeReason: "Calculé pour tenir tout le programme de la journée avant le créneau réservé d'Upper Antelope Canyon à 10h40 : réveil 6h30, petit-déj 7h00-7h25, checkout complet (vous ne revenez plus à l'hôtel), Walmart pour les courses, puis Horseshoe Bend avant l'after-noon. Objectif présentation à Antelope Hogan Canyon Tours vers 10h20-10h25, avec marge de sécurité.",
  breakfast: { included:true, note:"Petit-déjeuner à l'Hôtel Page (nuit précédente), servi à partir de 7h00 — mangez léger (7h00-7h25), vous prendrez des snacks au Walmart pour la suite." },
  photo: WIKI("USA Antelope-Canyon.jpg"),
  photoCap: "Antelope Canyon, Page (Arizona) — Wikimedia Commons",
  hotel: { name: "Hôtel Kanab", link: "https://www.booking.com/Share-bdMry3i", price: "32,38 $ / pers." },
  alert: [
    { tone:"ok", title:"Upper Antelope Canyon — RÉSERVÉ", text:"Randonnée complète HG, 2 adultes, 10 septembre à 10h40, durée 170 min, 169,60 € au total. Confirmation reçue par mail (GetYourGuide). Point de rendez-vous : cherchez \"Antelope Hogan Canyon Tours\" sur Google Maps. ⚠️ Réglez votre téléphone manuellement sur l'heure de Phoenix/Arizona (il peut basculer tout seul sur l'heure Utah/Navajo Nation). Prévoyez au moins 10 $ cash à deux (5 $/pers de frais d'enregistrement) et sachez qu'aucun sac n'est autorisé dans le canyon. Vérifiez dans l'app si le permis Navajo est inclus ou à payer séparément." },
    { tone:"ok", title:"Kayak — RÉSERVÉ", text:"WazSUP Kayaks (Antelope Point Launch Ramp WazSUP Kayaks Rentals) : 1× \"Sit On Top Kayak | Tandem\" pour vous deux. Récupération vers 14h-14h15, gilets et pagaies inclus. Retour impératif avant 18h00 — visez 17h15-17h30 pour avoir une bonne marge." },
    { tone:"mustard", title:"Piège du fuseau horaire", text:"Page/Antelope Canyon est en Arizona (pas d'heure d'été, jamais). Kanab (Utah) est à +1h en septembre. Donc 17h40 côté Arizona = 18h40 côté Utah au même instant. Page → Kanab prend 1h15-1h20 de route : en partant vers 17h40 (heure Arizona), comptez une arrivée à Kanab vers 19h55-20h10 (heure Utah)." }
  ],
  timeline: [
    { type:"activity", label:"Réveil + préparation complète", dur:"6h30 → 6h55", desc:"Douche, affaires prêtes. Toutes les valises partent dans la voiture — vous ne revenez plus à l'hôtel de la journée. Préparez : tenue Upper Antelope, tenue/maillot pour le kayak, serviette, lunettes de soleil, casquette, crème solaire, chaussures pouvant être mouillées, plusieurs litres d'eau." },
    { type:"activity", label:"Petit-déjeuner à l'hôtel", dur:"7h00 → 7h25", desc:"Inclus, servi à partir de 7h. Mangez léger, il y aura des snacks au Walmart pour la suite." },
    { type:"activity", label:"Checkout + voiture chargée", dur:"7h25 → 7h35", desc:"7h25 retour rapide chambre → 7h30 derniers sacs dans la voiture → 7h35 départ définitif de l'hôtel." },
    { type:"activity", label:"Walmart Supercenter — courses pique-nique", dur:"7h45 → 8h05", desc:"1017 Haul Rd, Page (ouvert dès 6h). À prendre : 2 wraps/sandwichs pour le déjeuner, chips, bananes/fruits, barres énergétiques, boissons fraîches, électrolytes, beaucoup d'eau, glace pour la glacière si besoin. Objectif : le déjeuner prêt à manger immédiatement après Upper Antelope, sans avoir le temps d'aller au restaurant.", link: gmaps("Walmart Supercenter 1017 Haul Rd Page AZ"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"Horseshoe Bend", dur:"8h15 → 9h15", desc:"Sentier ~2,4 km A/R. 8h15 parking → 8h20 début de marche → ~8h40 point de vue → 8h40-8h55 photos/panorama → retour à 9h15. ⚠️ Le parking est géré par la ville de Page : le pass America the Beautiful ne le couvre PAS.", link: gmaps("Horseshoe Bend Page AZ"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Route vers Antelope Hogan Canyon Tours", dur:"9h15 → 9h45", desc:"Direction l'est de Page. Large marge de sécurité plutôt que de risquer la réservation.", link: gmaps("Antelope Hogan Canyon Tours"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Marge de sécurité sur place", dur:"9h45 → 10h20", desc:"Vous êtes largement en avance : buvez, allez aux toilettes si possible, mangez une petite barre (pas de gros repas avant ~3h d'activité), crème solaire, préparez bouteille + téléphone." },
    { type:"hike", label:"🏜️ UPPER ANTELOPE CANYON — Randonnée complète HG", dur:"10h40 → ≈13h30 (170 min, RÉSERVÉ)", desc:"Présentation visée 10h20-10h25 (l'email indique 10h40 sans besoin d'arriver 45 min avant, mais on garde de la marge). Randonnée complète avec le guide Navajo : marche jusqu'au canyon, traversée, retour à pied — pas de transfert en camion contrairement aux tours classiques. Votre passage devrait tomber près de midi, période où la lumière est la plus belle. Fin théorique 13h30, gardez en tête que ça peut glisser jusqu'à 13h40 selon le groupe.", link: gmaps("Antelope Hogan Canyon Tours"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Déjeuner express", dur:"13h30 → 13h50", desc:"Sandwich/wrap + chips + fruit + eau achetés le matin au Walmart, mangés près du véhicule ou en route vers Antelope Point. Pas de restaurant, pas le temps." },
    { type:"drive", label:"→ Antelope Point Public Launch Ramp", dur:"≈13h50 → 14h05", desc:"⚠️ PAS Antelope Point Marina — le point de récupération kayak est en bas du Public Launch Ramp. Entrée Glen Canyon : 30 $/véhicule sans pass, couverte par le pass America the Beautiful.", link: gmaps("Antelope Point Public Launch Ramp"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"🛶 LOWER ANTELOPE CANYON EN KAYAK", dur:"≈14h15 → 17h15 (RÉSERVÉ)", desc:"Récupération kayak tandem + 2 pagaies + 2 gilets sur place (pas besoin de le transporter). Mise à l'eau ~14h15. Comptez 1h-1h30 à l'aller, un temps sur place pour profiter/photos, puis 1h-1h30 au retour — le vent peut forcir l'après-midi, gardez de la marge. Vous entrez par l'eau dans la partie basse de Lower Antelope Canyon : une expérience différente de la visite pédestre classique." },
    { type:"activity", label:"Restitution du kayak", dur:"17h15 → 17h30", desc:"Retour au même Antelope Point Public Launch Ramp : sortez le kayak de l'eau, remontez/portez-le jusqu'à la zone de restitution (\"drop off area\"), rendez kayak + pagaies + gilets à WazSUP. Vous ne retournez ni à leur bureau de Page, ni à Antelope Point Marina. Limite absolue : 18h00 — vous visez d'avoir terminé bien avant." },
    { type:"drive", label:"→ Kanab (Utah)", dur:"≈17h40 (AZ) → 19h55-20h10 (UT)", desc:"Séchage rapide, changement de vêtements, rangement, départ. Page → Kanab : 1h15-1h20 de route. N'oubliez pas le décalage horaire (+1h en arrivant en Utah) — voir l'alerte ci-dessus.", link: gmaps("37°4'47.2\"N 112°33'57.2\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Kanab", dur:"", desc:"Réservé.", link:"https://www.booking.com/Share-bdMry3i", linkText:"Voir la réservation" }
  ],
  highlight: {
    name: "Upper Antelope Canyon (marche) + Lower Antelope Canyon (kayak)",
    difficulty: "easy", diffLabel: "Facile / modéré",
    distance: "Upper Antelope : marche jusqu'au canyon + traversée (formule HG, à pied, pas de transfert camion) · Kayak : Lower Antelope, ~1h-1h30 de pagaie par trajet",
    duration: "Upper Antelope : 170 min (10h40-13h30) · Kayak : ~3h (14h15-17h15)",
    water: "Emportez plusieurs litres d'eau pour la journée entière — rien à l'intérieur du canyon lui-même, et vous serez en plein soleil sur le lac une bonne partie du kayak.",
    gear: "Upper Antelope : chaussures adaptées, eau, téléphone/appareil photo, au moins 10 $ cash à deux (frais d'enregistrement 5 $/pers) — aucun sac autorisé dans le canyon. Kayak : sandales/chaussures d'eau, tenue légère + rechange, serviette, crème solaire, casquette bien attachée, housse étanche pour le téléphone si fournie par le loueur.",
    reservation: "Upper Antelope Canyon : RÉSERVÉ (GetYourGuide, 10h40). Kayak WazSUP : RÉSERVÉ (tandem, récupération ~14h-14h15, retour avant 18h00).",
    tips: [
      "Réglez votre téléphone manuellement sur l'heure de Phoenix avant le rendez-vous Upper Antelope : il peut basculer tout seul sur l'heure Utah/Navajo Nation et vous mettre en retard sans vous en rendre compte.",
      "Le parking de Horseshoe Bend n'est PAS couvert par le pass America the Beautiful (géré par la ville de Page, pas par le NPS).",
      "Pour le kayak, sélectionnez bien 1× tandem et non 2× kayak — le tandem contient déjà deux places.",
      "Le vent forcit souvent l'après-midi sur Lake Powell : gardez de la marge sur le trajet retour en kayak plutôt que de viser pile la limite de 18h.",
      "Journée sans retour à l'hôtel : chargez toute la voiture dès le matin (7h30), vous ne repasserez plus par la chambre."
    ]
  }
},
// ---------------------------------------------------------------- JOUR 7
{
  id: 7, date: "11 sept.", weekday: "Vendredi", region: "Utah → Nevada",
  title: "Zion : Canyon Overlook, tunnel, The Narrows & Emerald Pools → Las Vegas",
  wake: "5h20", wakeType:"calc",
  wakeReason: "Deux raisons de partir très tôt : avoir une place à Canyon Overlook (parking \"extrêmement limité\" selon le NPS) et faire The Narrows le matin, avant la chaleur et surtout avant le risque d'orages de l'après-midi. Réveil 5h20, préparation + checkout 5h20-5h45, départ de Kanab 5h45.",
  breakfast: { included:false, note:"Pas de petit-déjeuner à table ce matin — départ à 5h45, bien avant l'ouverture d'une éventuelle salle de petit-déj à l'Hôtel Kanab. Prenez directement le pique-nique du matin avec vous (acheté la veille), pas de supermarché sur la route." },
  photo: WIKI("Angels Landing and the Great White Throne.jpg"),
  photoCap: "Zion National Park, Utah — Wikimedia Commons",
  hotel: { name: "Las Vegas — Luxor Hotel & Casino", link: null, price: "245,50 $ / pers. (3 nuits)" },
  alert: [
    { tone:"mustard", title:"Programme \"sans Angels Landing\"", text:"Ce déroulé suppose que vous n'avez pas eu le permis Angels Landing (loterie \"day-before\" tentée la veille sur recreation.gov). Si vous l'avez eu, le programme change en profondeur — dites-le moi pour que je le refasse en conséquence. Sans permis, la randonnée s'arrête à Scout Lookout, qui reste une belle vue mais n'est pas intégrée à ce programme-ci." },
    { tone:"rust", title:"Condition absolue : The Narrows doit être ouvert", text:"Le NPS ferme The Narrows si le débit de la Virgin River dépasse 150 CFS, ou en cas de Flash Flood Warning en cours. En dessous de 70 CFS la marche est raisonnable ; au-dessus, remonter le courant devient nettement plus dur. Vérifiez le matin même : débit de la rivière, météo, Flash Flood Potential et statut officiel de The Narrows sur la page \"current conditions\" du NPS." }
  ],
  timeline: [
    { type:"activity", label:"Réveil, préparation, checkout", dur:"5h20 → 5h45", desc:"Départ de Kanab avec le pique-nique du matin déjà en main : 2-3 L d'eau/pers, sandwichs/snacks, crème solaire, casquette, serviette, vêtements qui sèchent vite, chaussures fermées pouvant aller dans l'eau, et idéalement un bâton solide pour The Narrows (le NPS compare le fond à des \"wet bowling balls\" tant les pierres sont glissantes)." },
    { type:"drive", label:"Kanab → East Entrance de Zion", dur:"5h45 → ≈6h35", desc:"Vous entrez par l'Est, parfait en venant de Kanab, puis roulez sur la Zion–Mount Carmel Highway jusqu'à Canyon Overlook.", link: gmaps("Zion National Park East Entrance"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"Canyon Overlook Trail", dur:"6h40 → 7h40", desc:"1,6 km A/R, ~50 m de dénivelé, ~1h au total. Vue superbe sur Pine Creek Canyon et le bas de Zion Canyon. ⚠️ Parking \"extrêmement limité\" selon le NPS — d'où l'arrivée dès 6h35. Si le petit parking est plein, cherchez immédiatement les emplacements autorisés alentour, ne vous garez pas sur l'accotement.", link: gmaps("Canyon Overlook Trailhead Zion"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Zion–Mount Carmel Tunnel + descente vers le canyon", dur:"≈7h40 → 8h15", desc:"Tunnel de 1930, environ 1,8 km, avec de grandes ouvertures taillées dans la falaise qui donnent brièvement sur Zion Canyon. ⚠️ Interdiction formelle de s'arrêter ou de marcher dedans — on le traverse en voiture et on profite des ouvertures en roulant. Juste après : les grands lacets qui descendent vers le fond du canyon, une portion magnifique, prenez votre temps." },
    { type:"activity", label:"Parking — Zion Canyon Visitor Center", dur:"≈8h15", desc:"1 Zion Park Blvd, Springdale. Vous laissez la voiture ici pour le reste de la journée : la Zion Canyon Scenic Drive est fermée aux véhicules privés en horaire d'été, navette obligatoire (aucune réservation nécessaire). Le 11 septembre : premier bus 7h, dernier bus montant 19h, dernier bus descendant de Temple of Sinawava 20h15, passages toutes les 5-10 min.", link: gmaps("Zion Canyon Visitor Center"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Navette jusqu'à Temple of Sinawava (arrêt #9)", dur:"≈8h25 → 9h10", desc:"Terminus de la navette, ~45 min depuis le Visitor Center. C'est volontairement la première étape de la journée : moins chaud, moins de monde et moins de risque d'orage/flash flood que plus tard dans la journée." },
    { type:"hike", label:"Riverside Walk (aller)", dur:"9h10 → 9h50", desc:"Sentier qui longe la Virgin River jusqu'au point où le chemin pédestre s'arrête — les falaises se resserrent progressivement. Au bout, il n'y a plus de chemin : le chemin devient la rivière elle-même." },
    { type:"hike", label:"🌊 The Narrows", dur:"9h50 → 11h20 (≈1h30 dans l'eau)", desc:"Objectif : ~45 min en remontant la Virgin River (photos, profiter du canyon entre les immenses parois) puis ~45 min pour revenir — point de demi-tour visé vers 10h35-10h40. Prolongeable jusqu'à 11h40 max si les conditions sont excellentes et que vous adorez ça. Vérifiez impérativement les conditions le matin même (voir alerte ci-dessus).", link: gmaps("The Narrows Riverside Walk Trailhead"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"Riverside Walk (retour)", dur:"11h20 → ≈12h00", desc:"Sortie de l'eau, serviette rapide, retour par le même chemin jusqu'à Temple of Sinawava." },
    { type:"drive", label:"Navette → Zion Lodge (arrêt #5)", dur:"12h00 → ≈12h20", desc:"C'est ici que partent les sentiers des Emerald Pools." },
    { type:"activity", label:"Pique-nique à Zion Lodge", dur:"12h20 → 12h50", desc:"Tables, toilettes, eau, et restauration sur place si besoin en complément. 30 min max — profitez-en pour changer de chaussettes/chaussures si elles sont trempées après The Narrows." },
    { type:"hike", label:"💚 Emerald Pools — Middle, Upper & Lower", dur:"12h50 → ≈15h15 (≈2h15-2h30)", desc:"Le pont d'accès depuis Zion Lodge a rouvert en 2025. Ordre conseillé : Middle Emerald Pools (~3,5 km A/R si fait seul, ~1h30, corniche de grès avec vues sur Zion Canyon) → Upper Emerald Pool (dernier segment ~0,4 km, bassin encaissé au pied d'une immense falaise, à ne pas rater) → redescente par Lower Emerald Pool (au pied des parois, petites cascades selon le débit) → retour à Zion Lodge. ⚠️ Baignade interdite dans les Emerald Pools (milieux fragiles, ressource en eau pour la faune). En septembre après un été sec, les chutes sont souvent discrètes — la balade reste belle pour les falaises et les vues, mais ne vous attendez pas à de grosses cascades.", link: gmaps("Emerald Pools Trailhead Zion"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Navette retour → Visitor Center", dur:"≈15h20 → 15h50", desc:"Récupération de la voiture vers 15h45-16h. Petite pause : toilettes, eau, boutique si souvenir, photo devant le panneau Zion." },
    { type:"drive", label:"Zion → Las Vegas", dur:"≈16h10 → ≈17h55 (heure Vegas)", desc:"Springdale → Hurricane → I-15 → Las Vegas, environ 2h45 de route. Vous gagnez 1h en route : Zion est en Mountain Time, Las Vegas en Pacific Time — un départ à 16h10 (Utah) donne donc une arrivée vers 17h55 (Nevada), avec encore une vraie soirée devant vous sur le Strip.", link: gmaps("36°32'40.8\"N 114°59'20.4\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Las Vegas (Luxor Hotel & Casino)", dur:"", desc:"3 nuits sur place.", link: gmaps("Luxor Hotel and Casino Las Vegas"), linkText:"Voir sur Maps" }
  ],
  highlight: {
    name: "Canyon Overlook Trail & The Narrows (Zion)",
    difficulty: "moderate", diffLabel: "Facile (Canyon Overlook) à modéré (The Narrows)",
    distance: "Canyon Overlook : 1,6 km A/R · The Narrows : jusqu'à ~3 km A/R dans l'eau (1h30 sur place) · Emerald Pools (3 combinés) : ≈4-5 km au total",
    duration: "Canyon Overlook : 1h · The Narrows : 1h30 · Emerald Pools : 2h15-2h30",
    water: "2-3 L d'eau/personne pour toute la journée. Peu de points de ravitaillement une fois dans le canyon — mangez et remplissez les gourdes à Zion Lodge en milieu de journée.",
    gear: "Chaussures fermées à bonne adhérence que vous acceptez de mouiller pour The Narrows (fond glissant, comparé par le NPS à des \"wet bowling balls\"), idéalement un bâton solide, vêtements qui sèchent vite, serviette, crème solaire, casquette. Chaussures de rechange utiles pour l'après-midi (Emerald Pools).",
    reservation: "Navette : aucune réservation, aucun coût. The Narrows et Emerald Pools : accès libre, mais The Narrows peut fermer selon le débit de la rivière ou une alerte flash flood — à vérifier le matin même.",
    tips: [
      "Le parking de Canyon Overlook est le vrai goulot d'étranglement de la matinée : arrivez avant 6h40 pour être sûrs d'avoir une place.",
      "Dans le tunnel Zion–Mount Carmel : interdiction de s'arrêter ou de marcher, on le vit uniquement depuis la voiture.",
      "The Narrows est placé en premier volontairement : moins chaud, moins de monde, et le risque d'orage/crue éclair grimpe en général plus tard dans la journée.",
      "Si vous adorez The Narrows, vous pouvez pousser jusqu'à 2h30-3h dans l'eau en réduisant la part des Emerald Pools — à décider sur place selon l'envie du groupe.",
      "En septembre après un été sec, les cascades des Emerald Pools sont souvent discrètes — n'en attendez pas trop, le plus intéressant reste les falaises et les points de vue."
    ]
  }
},
// ---------------------------------------------------------------- JOUR 8
{
  id: 8, date: "12 sept.", weekday: "Samedi", region: "Nevada",
  title: "Valley of Fire Express + Las Vegas (piscine, Strip, Bellagio)",
  wake: "6h45", wakeType:"calc",
  wakeReason: "Reste tôt pour profiter de Valley of Fire avant la chaleur et être revenus à Vegas pour le déjeuner, mais rien à voir avec un réveil à 5h — vous avez ensuite tout l'après-midi pour récupérer à la piscine. Réveil 6h45, préparation 6h45-7h10, départ du Luxor 7h15.",
  breakfast: { included:false, note:"Pas de petit-déjeuner inclus au Luxor — de toute façon le départ est à 7h15, pas le temps pour un vrai petit-déj. Café ou snack rapide sur le pouce avant de partir, vous mangerez un vrai repas au retour (In-N-Out vers midi)." },
  photo: WIKI("Valley of Fire State Park, Nevada 01.jpg"),
  photoCap: "Valley of Fire State Park, Nevada — Wikimedia Commons",
  hotel: { name: "Las Vegas — Luxor", link: null, price: "inclus dans les 3 nuits" },
  alert: [
    { tone:"mustard", title:"Fire Wave et White Domes fermés à vos dates", text:"Ces deux trails emblématiques sont fermés en ce moment — le programme ci-dessous est donc volontairement un \"Valley of Fire Express\" en voiture avec de courts arrêts photo, sans grande randonnée, plutôt qu'une demi-journée de marche." },
    { tone:"mustard", title:"Pas de frigo dans la chambre", text:"Votre chambre Luxor (Pyramid Premier Two Queen) n'a pas de frigo inclus (location possible à 25 $/nuit). Donc pas de \"sandwichs achetés au supermarché et stockés 2 jours\" sans glacière — en revanche rien n'empêche d'acheter à manger et de le consommer le soir même (le Luxor Market, près du passage vers Excalibur, est ouvert 6h-1h45)." }
  ],
  timeline: [
    { type:"activity", label:"Réveil + préparation", dur:"6h45 → 7h10", desc:"Café ou snack rapide, pas de vrai petit-déjeuner ce matin." },
    { type:"drive", label:"Départ du Luxor → Valley of Fire (entrée Ouest)", dur:"7h15 → ≈8h15", desc:"", link: gmaps("Valley of Fire State Park West Entrance"), linkText:"Itinéraire Google Maps" },
    { type:"hike", label:"Beehives", dur:"8h20 → 8h30", desc:"Formations de grès arrondies et striées, arrêt photo rapide juste après l'entrée." },
    { type:"drive", label:"Mouse's Tank Road / White Domes Road + arrêts photos", dur:"8h40 → 9h15", desc:"La route elle-même est le clou du spectacle ici : formations rouges spectaculaires défilant des deux côtés, plusieurs pull-outs pour s'arrêter." },
    { type:"activity", label:"Rainbow Vista", dur:"9h15 → 9h35", desc:"Point de vue sur un dégradé de couleurs dans la roche (rouge, rose, blanc, jaune) — un des plus beaux arrêts rapides du parc.", link: gmaps("Rainbow Vista Valley of Fire"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Fire Canyon / Silica Dome", dur:"9h40 → 9h55", desc:"Vue plongeante sur un canyon de grès rouge intense.", link: gmaps("Fire Canyon Silica Dome Overlook"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Elephant Rock", dur:"≈10h15 → 10h30", desc:"Arche rocheuse en forme de tête d'éléphant, courte marche depuis le petit parking.", link: gmaps("Elephant Rock Valley of Fire"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Sortie Est du parc → retour secteur Luxor", dur:"≈10h30 → 11h40-12h00", desc:"" },
    { type:"activity", label:"Déjeuner — In-N-Out Burger", dur:"≈11h50 → 12h25", desc:"Dean Martin Drive, juste à l'ouest du Strip, pratique en revenant par l'I-15. Pas cher, rapide, et suffisamment iconique pour un road trip américain — pas la peine de viser un \"restaurant mythique de Vegas\" à midi, ça ferait perdre l'intérêt du programme express.", link: gmaps("In-N-Out Burger Dean Martin Drive Las Vegas"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Retour au Luxor", dur:"≈12h35 → 13h00", desc:"Douche rapide, maillot, crème solaire — vous ne pensez plus au programme pendant quelques heures." },
    { type:"activity", label:"Piscine + chill — Luxor Oasis Pool", dur:"13h00 → 15h15", desc:"Ouverte 9h-19h tous les jours, sièges gratuits pour les clients dans la limite des disponibilités. La vraie pause récup après Zion la veille et Valley of Fire ce matin.", link: gmaps("Luxor Oasis Pool Las Vegas"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Douche / préparation", dur:"15h15 → 15h45", desc:"Retour chambre, douche, changement — départ vers 16h, pas d'obligation de tenir pile cette heure-là." },
    { type:"activity", label:"New York-New York", dur:"16h00 → 16h45", desc:"À pied depuis le Luxor, en traversant rapidement Excalibur. 30-40 min pour traverser le casino, voir les décors NYC, la Statue of Liberty/façade, profiter de l'ambiance — pas besoin du roller coaster sauf si l'envie est là.", link: gmaps("New York-New York Hotel and Casino"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Remontée tranquille du Strip vers Bellagio", dur:"≈16h45 → 17h15", desc:"À pied, sans obligation de \"visiter\" chaque hôtel sur le chemin." },
    { type:"activity", label:"Bellagio Conservatory & Botanical Gardens", dur:"17h15 → 18h00", desc:"Bonne raison de le faire précisément ce jour-là : le décor d'été 2026 \"Paradise: Nature's Most Beautiful Creations\" se termine le 12 septembre — vous y êtes le dernier jour. Accès gratuit, ouvert 24h/24. 17h15-17h45 : lobby, plafond Chihuly, Conservatory. 17h45-18h : casino/intérieur Bellagio.", link: gmaps("Bellagio Conservatory Botanical Gardens"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Fontaines du Bellagio", dur:"18h00 / 18h30", desc:"Le samedi, spectacle toutes les 30 min de midi à 19h puis toutes les 15 min après 19h. Gratuit — largement suffisant comme grosse attraction de l'après-midi.", link: gmaps("Bellagio Fountains Las Vegas"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Dîner — Secret Pizza (ou repas budget)", dur:"18h30 → 19h30", desc:"Depuis Bellagio, direction le Cosmopolitan : Secret Pizza, petite pizzeria cachée au 3e étage du Boulevard Tower, sans grosse enseigne, pizza new-yorkaise à la part, ouverte tard. Option plus économique : sandwich/snack au Luxor Market (6h-1h45), à manger le soir même vu l'absence de frigo en chambre.", link: gmaps("Secret Pizza The Cosmopolitan Las Vegas"), linkText:"Ouvrir dans Maps" },
    { type:"sleep", label:"Soirée libre à Las Vegas", dur:"Après 19h30", desc:"Rien de programmé volontairement : casino, un verre, retour au Luxor, continuer à marcher sur le Strip, dormir... Aucune heure de coucher imposée, le lendemain (13 sept.) est votre vraie journée 100% Vegas (Venetian, Caesars, Wynn/Sphere, Fremont Street, éventuellement Peppermill)." }
  ],
  highlight: {
    name: "Valley of Fire Express (en voiture)",
    difficulty: "easy", diffLabel: "Très facile — pas de vraie randonnée",
    distance: "Quelques centaines de mètres à chaque arrêt (Beehives, Rainbow Vista, Fire Canyon/Silica Dome, Elephant Rock)",
    duration: "≈2h15 sur place (8h15-10h30) + 2×1h de route",
    water: "Aucun point d'eau dans le parc — partez avec vos réserves (1-1,5 L/pers suffisent pour ce format express, sans grande marche).",
    gear: "Chapeau, crème solaire — sentiers très courts et exposés mais aucune marche longue aujourd'hui, Fire Wave et White Domes étant fermés.",
    reservation: "Aucune réservation nécessaire, juste l'entrée à payer au poste (cash conseillé). Bellagio Conservatory et fontaines : gratuits, sans réservation.",
    tips: [
      "Fire Wave et White Domes sont fermés à vos dates : ce format \"express en voiture\" avec arrêts courts est donc le bon choix, pas une demi-mesure.",
      "Le format de la journée (retour avant le déjeuner + vraie pause piscine) est pensé pour ne pas cumuler la fatigue de Zion la veille — gardez cet équilibre plutôt que d'essayer de tout faire.",
      "Bellagio Conservatory : vous tombez pile le dernier jour du décor d'été \"Paradise\" (se termine le 12 septembre) — bon timing à ne pas manquer.",
      "Chambre Luxor sans frigo : n'achetez de quoi manger que pour le consommer le soir même, sauf si vous avez une glacière avec vous.",
      "Le vrai \"restaurant mythique\" de Vegas (Peppermill Restaurant and Fireside Lounge, néon/Old Vegas depuis 1972) est plutôt à caser le lendemain (13 sept.), trop excentré pour cette journée express."
    ]
  }
},
// ---------------------------------------------------------------- JOUR 9
{
  id: 9, date: "13 sept.", weekday: "Dimanche", region: "Nevada",
  title: "Las Vegas — Strip, hôtels mythiques, Fremont & casinos",
  wake: "9h00", wakeType:"free",
  wakeReason: "Journée 100% Vegas, réveil tranquille sans contrainte — 9h00-9h30, douche, préparation, et vous descendez directement dans le casino du Luxor.",
  breakfast: { included:false, note:"Petit-déjeuner \"décidé par le casino\" ce matin (voir alerte ci-dessous) — pas de petit-déj classique inclus au Luxor. Dans tous les cas, gardez de la place : le vrai brunch au Peppermill est prévu vers 11h." },
  photo: WIKI("Las Vegas Strip at sunset.JPG"),
  photoCap: "Las Vegas Strip — Wikimedia Commons",
  hotel: { name: "Las Vegas — Luxor", link: null, price: "inclus (3e et dernière nuit)" },
  alert: [
    { tone:"mustard", title:"Règle du matin : 20 $ chacun, pas un cent de plus", text:"9h30-10h00, casino du Luxor : 20 $ maximum par personne (machines à sous, roulette électronique, blackjack électronique). Si les 20 $ disparaissent, terminé — pas de \"encore 20 $ pour se refaire\". 🟢 Positifs : petit-déjeuner léger autorisé au Luxor (café, viennoiserie, fruit, bagel — restez léger, Peppermill arrive à 11h). 🔴 Perdus : pas de petit-déj payant, vous patientez jusqu'à Peppermill." },
    { tone:"mustard", title:"Règle du soir : budget casino fixe", text:"Définissez une limite avant de commencer, par exemple 50 $ chacun pour toute la soirée (à prendre en cash pour que la limite soit simple à suivre). Perdu = stop pour la soirée. Si vous montez à 80 $, mettez les 30 $ de gain de côté et continuez uniquement avec la mise de départ. Le casino reste une activité du voyage, pas un budget qui déborde sur les jours suivants." }
  ],
  timeline: [
    { type:"activity", label:"Réveil tranquille", dur:"9h00 → 9h30", desc:"Pas de réveil agressif aujourd'hui : douche, préparation, puis direction le casino du Luxor." },
    { type:"activity", label:"Challenge petit-déj — casino du Luxor", dur:"9h30 → 10h00", desc:"20 $ chacun maximum. Voir la règle complète dans l'alerte ci-dessus — le résultat détermine simplement si vous prenez un petit-déj léger au Luxor ou si vous patientez jusqu'à Peppermill." },
    { type:"activity", label:"Welcome to Fabulous Las Vegas Sign", dur:"10h15 → 10h40", desc:"Juste au sud du Luxor. 20-25 min max, quelques photos et vous repartez — si c'est bondé, une photo légèrement décalée suffit, inutile de perdre 45 min pour être parfaitement centrés.", link: gmaps("Welcome to Fabulous Las Vegas Sign"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"🍳 Peppermill Restaurant & Fireside Lounge — TOUJOURS prévu", dur:"11h00 → 12h15", desc:"Casino gagné ou perdu, vous y allez dans tous les cas : énorme décor néon, banquettes américaines, ambiance old-school, Fireside Lounge, grosses portions. Comptez 20-35 $/pers selon la commande. Le repas un peu emblématique de Las Vegas.", link: gmaps("Peppermill Restaurant and Fireside Lounge Las Vegas"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Wynn Las Vegas", dur:"12h20 → 13h15", desc:"Le Vegas ultra-luxe : fleurs, grands halls, décor, boutiques, casino. 45-55 min suffisent, pas la peine d'y passer deux heures — gardez le vrai budget casino pour ce soir.", link: gmaps("Wynn Las Vegas"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Venetian + Grand Canal", dur:"13h20 → 14h40", desc:"Incontournable pour une première visite à Vegas : façade inspirée de Venise, place Saint-Marc, plafonds peints, canaux, gondoles, Grand Canal Shoppes, casino. La visite de l'hôtel est déjà une attraction en soi, pas besoin de payer une balade en gondole sauf réelle envie.", link: gmaps("The Venetian Resort Las Vegas"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Sphere (extérieur)", dur:"14h45 → 15h15", desc:"Juste à côté du Venetian. Objectif : voir la Sphere de l'extérieur, regarder les animations, quelques photos. 30 min max, pas d'attraction payante obligatoire.", link: gmaps("Sphere Las Vegas"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Retour Luxor + gros chill", dur:"15h30 → 18h00", desc:"Stop visites, vous en avez déjà fait suffisamment aujourd'hui. 15h30-16h retour Luxor → 16h-17h30 piscine/sieste/chambre → 17h30-18h douche + préparation soirée. Le but est d'arriver frais pour la soirée casino, pas de forcer le programme." },
    { type:"activity", label:"🌃 OPTION A — Fremont Street + casinos Downtown", dur:"18h15 → 23h00", desc:"Pour les motivés. Uber/Lyft plutôt que la voiture (pas de parking à gérer, on peut boire tranquillement). 18h45-19h30 : premier tour de Fremont Street (Golden Nugget → Binion's → Four Queens → The D → Plaza, sans circuit strict) sous le plafond Viva Vision (gratuit, plusieurs shows dans la soirée). 19h30-20h : dîner à Evel Pie (pizza à la part sur Fremont, 10-20 $/pers) ou solution encore plus économique (sandwich/snack/fast-food). 20h-23h : soirée casino Downtown en alternant Golden Nugget → Binion's (ambiance historique/Old Vegas) → Four Queens ou The D, entrecoupée de passages sous Viva Vision. Retour Luxor vers 23h en Uber." },
    { type:"activity", label:"🎰 OPTION B — Soirée 100% Luxor (flemme totale, totalement valide)", dur:"18h00 → 22h30+", desc:"Si à 18h vous êtes rincés et n'avez aucune envie de reprendre un Uber : 18h-19h dîner sur place (sandwich/fast-food), 19h-19h30 petit tour du casino, 19h30-22h30 vraie soirée casino au Luxor, puis bar/chambre ou vous continuez si vous êtes bien. Avantages : zéro Uber, zéro temps perdu, vous remontez en chambre quand vous voulez. Inconvénient : vous ratez l'ambiance très différente de Fremont Street." },
    { type:"sleep", label:"Dodo — Las Vegas (Luxor)", dur:"", desc:"3e et dernière nuit. Réservé." }
  ],
  highlight: null
},
// ---------------------------------------------------------------- JOUR 10
{
  id: 10, date: "14 sept.", weekday: "Lundi", region: "Nevada → Californie",
  title: "Death Valley — traversée du parc vers Lindsay",
  wake: "7h15", wakeType:"calc",
  wakeReason: "Après deux soirées à Las Vegas, un réveil à 6h serait inutilement violent. Réveil 7h15, checkout tranquille, objectif de ne pas dépasser 8h au départ du Luxor — au-delà, la journée devient vraiment longue jusqu'à Lindsay (voir alerte sur les seuils horaires).",
  breakfast: { included:false, note:"Pas de petit-déjeuner à Vegas ce matin — direction le Walmart Supercenter de Pahrump (300 S Highway 160, ouvert 6h-23h) pour un petit-déj simple sur place (café, viennoiseries, bagel, fruits) et le gros ravitaillement Death Valley en même temps. Un Subway est aussi disponible sur place dès 7h si vous préférez plus consistant." },
  photo: WIKI("Boardwalk at Badwater Basin, Death Valley National Park, California.jpg"),
  photoCap: "Badwater Basin, Death Valley — Wikimedia Commons",
  hotel: { name: "Hôtel Lindsay", link: "https://www.booking.com/Share-Q6a43Ew", price: "43 $ / pers." },
  alert: [
    { tone:"rust", title:"Chaleur extrême — Death Valley ne pardonne pas", text:"En septembre, le maximum moyen historique à Furnace Creek tourne autour de 41°C (106°F). Sorties de voiture courtes uniquement à partir de Zabriskie Point : Badwater Basin se limite à 20-30 min dehors grand maximum (réduisez à 10-15 min si la voiture affiche 45°C ou plus), aucune randonnée dans les dunes de Mesquite Flat. Le NPS recommande au moins 4 L d'eau par personne et par jour, plus une réserve en cas de panne — visez 10-12 L disponibles dans la voiture pour vous deux. Vérifiez les conditions/restrictions sur le site du NPS juste avant le départ, elles peuvent changer rapidement après un orage." },
    { tone:"mustard", title:"Règle selon l'heure de départ du Luxor", text:"✅ Départ avant 8h → programme complet. 🟠 Départ 8h-8h30 → encore faisable, mais soyez efficaces sur chaque arrêt. 🔴 Départ après 8h30 → supprimez Mesquite Flat Sand Dunes plutôt que de courir toute la journée et d'arriver à Lindsay à 22h. Mieux vaut faire Zabriskie + Badwater + Artists Palette correctement que tout vouloir caser." }
  ],
  timeline: [
    { type:"activity", label:"Réveil + checkout Luxor", dur:"7h15 → 7h45", desc:"Douche rapide, affaires dans la voiture, checkout définitif. Pas de petit-déjeuner à Vegas — direction Pahrump par NV-160." },
    { type:"drive", label:"Las Vegas → Walmart Supercenter Pahrump", dur:"7h45 → ≈8h50 (1h-1h10)", desc:"300 S Highway 160, Pahrump — ouvert tous les jours 6h-23h.", link: gmaps("Walmart Supercenter 300 S Highway 160 Pahrump NV"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Petit-déj + gros ravitaillement Death Valley", dur:"8h50 → 9h35 (40-45 min)", desc:"Dernier arrêt logistique avant le désert. Petit-déj simple sur place (café, viennoiseries/muffins, bagel, fruits, jus). Ravitaillement : gourdes remplies + stock d'eau visant 10-12 L dans la voiture, sac de glace pour la glacière (boissons, sandwichs, fruits à remettre au frais), 2 sandwichs/wraps par personne pour le midi (rayon deli sur place) + fruits, crackers, noix, barres, électrolytes, quelques boissons froides. Vous ne cherchez aucun restaurant dans Death Valley aujourd'hui." },
    { type:"activity", label:"Plein d'essence", dur:"≈9h35 → 9h45", desc:"Plein complet avant de quitter Pahrump, même avec un demi-réservoir — ne comptez pas sur Death Valley pour trouver de l'essence à bon prix." },
    { type:"drive", label:"Pahrump → Zabriskie Point", dur:"≈9h45 → 11h00", desc:"Entrée progressive dans le désert via Death Valley Junction et CA-190. Clim, eau, musique — pas de raison de se presser sur cette portion.", link: gmaps("Zabriskie Point Death Valley"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Zabriskie Point", dur:"11h00 → 11h25", desc:"Très peu de marche : parking → courte montée goudronnée → panorama sur les badlands jaunes et bruns caractéristiques de Death Valley. Il fera déjà chaud à cette heure — aucune randonnée supplémentaire ici." },
    { type:"drive", label:"Zabriskie → Badwater Basin", dur:"11h25 → ≈12h00", desc:"Vous descendez au fond de Death Valley, la température monte nettement. À partir de maintenant : sorties de voiture courtes uniquement." },
    { type:"activity", label:"Badwater Basin", dur:"12h00 → 12h35", desc:"-86 m sous le niveau de la mer, le point le plus bas d'Amérique du Nord — et vous y êtes probablement au pire moment niveau chaleur. Pas de 800 m ni 3 km aujourd'hui : sortez juste du boardwalk, marchez un peu sur le sel, photos, et c'est tout. 20-30 min dehors grand maximum, réduisez à 10-15 min si la voiture affiche 45°C+.", link: gmaps("Badwater Basin Death Valley"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Badwater → Artists Drive", dur:"12h35 → ≈12h50", desc:"Le meilleur rapport spectacle/marche de la journée arrive." },
    { type:"activity", label:"Artists Drive + Artists Palette", dur:"12h50 → 13h35", desc:"Route panoramique à sens unique de 9 miles/14,5 km entre les formations rocheuses. Arrêt principal à Artists Palette : 10-15 min dehors pour les photos des montagnes aux couleurs vert/violet/jaune/rouge/rose, puis retour dans la clim.", link: gmaps("Artists Palette Death Valley"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Pique-nique — Furnace Creek Visitor Center", dur:"13h45 → 14h20", desc:"Sandwichs achetés au Walmart, boissons de la glacière, eau, électrolytes. Toilettes, climatisation et possibilité de remplir les bouteilles sur place — le bon endroit pour récupérer après plusieurs arrêts dans la chaleur. 30-35 min, pas de restaurant à chercher.", link: gmaps("Furnace Creek Visitor Center Death Valley"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Furnace Creek → Mesquite Flat Sand Dunes", dur:"14h20 → ≈14h50", desc:"CA-190 vers l'ouest — c'est aussi le début de la route naturelle vers Lindsay." },
    { type:"activity", label:"Mesquite Flat Sand Dunes", dur:"14h50 → 15h10", desc:"Très court : parking → quelques dizaines/centaines de mètres maximum → photos des dunes avec les montagnes derrière → voiture. Aucune randonnée dans les dunes à cette heure-là en septembre. 15-20 min et c'est terminé pour Death Valley — vous aurez vu Zabriskie, Badwater, Artists Drive/Palette, Furnace Creek et les dunes.", link: gmaps("Mesquite Flat Sand Dunes Death Valley"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Départ pour Lindsay", dur:"≈15h10 → 20h-20h30", desc:"Environ 5h de route, plus les pauses. Vers 17h-17h30, vraie pause de 10-15 min (toilettes, café, marcher un peu) — changez de conducteur si l'un de vous fatigue. Une arrivée à 20h-20h30 est tout à fait normale : Lindsay n'est qu'une étape dodo avant Sequoia, pas besoin d'arriver à 18h.", link: gmaps("35°51'41.1\"N 119°25'41.1\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Lindsay", dur:"", desc:"Réservé. Dîner rapide si besoin, douche, hydratation, sommeil — pas d'activité à chercher ce soir. Le lendemain : Sequoia National Park.", link:"https://www.booking.com/Share-Q6a43Ew", linkText:"Voir la réservation" }
  ],
  highlight: {
    name: "Zabriskie Point → Badwater Basin → Artists Drive → Mesquite Flat Dunes",
    difficulty: "easy", diffLabel: "Facile, mais chaleur extrême — arrêts volontairement courts",
    distance: "Quelques dizaines à quelques centaines de mètres à chaque arrêt, aucune vraie randonnée aujourd'hui",
    duration: "≈4h15 réparties sur la journée (11h-15h10), routes comprises",
    water: "Minimum 4 L d'eau par personne et par jour selon le NPS, plus une réserve en cas de panne — visez 10-12 L disponibles dans la voiture pour vous deux, remplis/rechargés au Walmart de Pahrump.",
    gear: "Lunettes de soleil (réverbération très forte sur le sel de Badwater), chapeau, chaussures fermées, crème solaire indice élevé, glacière rechargée en glace le matin même.",
    reservation: "Aucune, entrée incluse dans le pass America the Beautiful ou payable au poste (~30 $/véhicule).",
    tips: [
      "Le programme est volontairement \"chill\" après deux nuits à Vegas : pas de randonnée nulle part aujourd'hui, uniquement des arrêts courts et climatisés entre deux.",
      "Ne laissez jamais un animal ou un enfant seul dans la voiture, même quelques minutes.",
      "Si le départ du Luxor dépasse 8h30, sacrifiez plutôt Mesquite Flat Dunes que de rogner sur Zabriskie/Badwater/Artists Palette.",
      "Le Walmart de Pahrump est le dernier vrai arrêt logistique (eau, glace, nourriture, essence) avant plusieurs heures de désert — ne le zappez pas."
    ]
  }
},
// ---------------------------------------------------------------- JOUR 11
{
  id: 11, date: "15 sept.", weekday: "Mardi", region: "Californie",
  title: "Sequoia & Kings Canyon — Moro Rock, General Sherman & General Grant",
  wake: "7h30", wakeType:"calc",
  wakeReason: "Matinée relativement tranquille : vous aurez fini Death Valley assez tard la veille, donc pas de réveil à 6h. Mais pas de grasse matinée jusqu'à 10h non plus — la montée vers Giant Forest est longue et très sinueuse. Petit-déj 7h30-8h15, départ de Lindsay visé 8h15-8h30.",
  breakfast: { included:true, note:"Petit-déjeuner à l'Hôtel Lindsay (nuit précédente) — profitez-en tranquillement (café, petit-déj, fruits) et remplissez les gourdes avant de partir." },
  photo: WIKI("General Sherman.jpg"),
  photoCap: "General Sherman Tree, Sequoia National Park — Wikimedia Commons",
  hotel: { name: "Hôtel Oakhurst", link: "https://www.booking.com/Share-k3TA9f", price: "53,55 $ / pers." },
  alert: [
    { tone:"ok", title:"Bonne nouvelle : pas de navette le 15 septembre", text:"Les navettes estivales de Sequoia & Kings Canyon fonctionnent seulement du 22 mai au 7 septembre 2026. Le 15 septembre, vous vous déplacez avec votre propre voiture partout dans le parc. Conditions actuellement publiées : Wolverton Road, Sherman Main Parking et Grant Tree Road tous ouverts — à revérifier juste avant le départ (incendies, fumées ou fermetures ponctuelles possibles)." },
    { tone:"mustard", title:"Courses pour Yosemite ce soir — ne pas zapper", text:"À Oakhurst, entre l'hôtel et le dîner, prévoyez un vrai arrêt supermarché pour le déjeuner ET le petit-déjeuner du lendemain à Yosemite (le petit-déj de l'hôtel Oakhurst ne commence qu'à 7h, trop tard pour un départ à 6h30 — voir jour 12), plus fruits, snacks, eau, électrolytes et glace pour la glacière. Objectif : partir directement à Yosemite le matin sans aucun arrêt nourriture. Vons (40044 Hwy 49) a un bon rayon deli mais ferme vers 19h ; Grocery Outlet (40301 Junction Dr, jusqu'à 22h) est l'option moins chère." }
  ],
  timeline: [
    { type:"activity", label:"Petit-déjeuner + checkout", dur:"7h30 → 8h15", desc:"À l'hôtel Lindsay. Toutes les valises restent dans la voiture — vous dormez à Oakhurst ce soir, pas de retour prévu." },
    { type:"drive", label:"Lindsay → Ash Mountain Entrance", dur:"8h20 → ≈9h15", desc:"Via Three Rivers. Première partie tranquille, puis la route commence à grimper sérieusement vers la Sierra Nevada une fois dans le parc.", link: gmaps("Ash Mountain Entrance Sequoia National Park"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Ash Mountain → Giant Forest", dur:"≈9h15 → 10h00 (≈45 min)", desc:"Generals Highway est très sinueuse, étroite par endroits, pleine d'épingles, avec beaucoup de dénivelé — ne vous fiez pas qu'aux kilomètres. Pas d'arrêt au Visitor Center aujourd'hui, on monte directement vers les endroits intéressants." },
    { type:"hike", label:"Moro Rock", dur:"10h00 → 10h50", desc:"Plus de 350 marches taillées dans le granite, ~90 m de montée sur une distance très courte. Vue panoramique spectaculaire sur la Great Western Divide et la Sierra Nevada depuis le sommet. Difficulté modérée : escaliers raides, altitude, vide important par endroits (rambardes présentes). 10h00 parking → 10h05-10h25 montée → 10h25-10h35 sommet/photos → 10h35-10h50 descente.", link: gmaps("Moro Rock Sequoia National Park"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Tunnel Log", dur:"10h55 → 11h15", desc:"Quelques minutes sur Crescent Meadow Road. Un séquoia tombé directement sur la route et creusé pour laisser passer les voitures dessous — pas de randonnée, juste la photo avec la voiture. 10-15 min max, très \"road trip américain\".", link: gmaps("Tunnel Log Sequoia National Park"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"General Sherman Tree", dur:"11h30 → 12h45", desc:"Le plus grand arbre du monde en volume. Depuis le Main Sherman Tree Parking Area, sentier d'environ 0,8 km dans un sens (~1,6 km A/R) qui descend vers l'arbre — la remontée se fait forcément au retour. Prenez le temps de regarder aussi les autres séquoias géants autour, Sherman n'est pas isolé. Pas de Congress Trail aujourd'hui (plusieurs km de plus, pas nécessaire avec General Grant prévu cet après-midi). 11h30 parking → 11h35-11h55 descente → 11h55-12h20 sur place → 12h20-12h45 remontée.", link: gmaps("General Sherman Tree Trailhead"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Pique-nique — Giant Forest / Lodgepole", dur:"12h45 → 13h20", desc:"Sandwich, fruits, snacks, boisson, eau — ce qu'il reste de la glacière. ~30 min, pas de restaurant. Vous êtes en territoire d'ours : ne laissez pas de nourriture accessible ou visible, respectez les consignes de stockage du parc." },
    { type:"drive", label:"Generals Highway vers Kings Canyon", dur:"13h20 → 14h30", desc:"Vous ne revenez PAS vers Lindsay : Ash Mountain → Giant Forest → Grant Grove → Highway 180 → Oakhurst, très peu de retour en arrière. La route entre Giant Forest et Grant Grove est déjà une attraction en soi — arrêtez-vous 5 min à un viewpoint sympa si vous en croisez un, sans obligation." },
    { type:"hike", label:"General Grant Tree", dur:"14h30 → 15h15", desc:"Boucle aménagée d'environ 0,5 km depuis le parking. L'un des plus gros séquoias au monde, plus le Fallen Monarch (énorme séquoia tombé, on peut marcher à l'intérieur) et la Gamlin Cabin. Très faible effort pour un arrêt qui vaut vraiment le coup — pratiquement sur votre route vers Oakhurst.", link: gmaps("General Grant Tree Trail Kings Canyon"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Départ pour Oakhurst", dur:"15h15 → ≈17h30 (2h-2h15)", desc:"Sortie par Big Stump Entrance → Highway 180 → Fresno → CA-41. On ne descend pas jusqu'au fond de Kings Canyon (trop de route en plus, Yosemite vous attend le lendemain). Pause café/toilettes/essence si besoin, sinon direct jusqu'à Oakhurst.", link: gmaps("36°51'39.5\"N 119°39'8.4\"W"), linkText:"Itinéraire Google Maps" },
    { type:"activity", label:"Arrivée hôtel Oakhurst", dur:"≈17h30 → 17h45", desc:"Check-in rapide, valises déposées, toilettes — mais pas encore douche + lit, sinon vous ne ressortez plus. Il reste une mission importante : préparer Yosemite." },
    { type:"activity", label:"Courses pour Yosemite", dur:"18h00 → 18h40", desc:"Vons (40044 Hwy 49, ouvert jusqu'à minuit, rayon deli avec sandwichs/wraps/plats préparés — le deli ferme vers 19h donc une arrivée à 18h tombe bien) ou Grocery Outlet (40301 Junction Dr, jusqu'à 22h, option plus économique). Deux objectifs en un seul arrêt : le déjeuner du lendemain à Yosemite (sandwich/wrap + fruit + chips/crackers + barre + boisson par personne, ou un plat froid type salade/bowl/wrap préparé) ET le petit-déjeuner à emporter pour le manger à Tunnel View vers 8h (bagels/muffins/viennoiseries, bananes ou fruits, café froid/boisson caféinée, jus) — l'hôtel Oakhurst ne sert le petit-déj qu'à partir de 7h, bien trop tard pour un départ à 6h30. Profitez-en aussi pour refaire le stock : eau, glaçons pour la glacière, électrolytes, canettes, fruits, noix, barres.", link: gmaps("Vons 40044 Hwy 49 Oakhurst"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"Dîner à Oakhurst", dur:"18h45 → 19h30", desc:"Budget conseillé : Taco Bell (40020 Hwy 49) avec des box autour de 7-9 $ et burritos/tacos entre 2 et 6 $ — chaud, rapide, moins de 10 $/pers, parfait après une journée de parc. Alternative encore plus économique : repas acheté directement pendant les courses (sandwich, wrap, salade, plat préparé), mangé à l'hôtel pour ~5-10 $/pers. Les restaurants assis du secteur tournent plutôt autour de 14-20 $/plat si vous préférez un vrai resto.", link: gmaps("Taco Bell 40020 Hwy 49 Oakhurst"), linkText:"Ouvrir dans Maps" },
    { type:"sleep", label:"Retour hôtel — soirée tranquille", dur:"19h30 → 20h00", desc:"Douche, préparation de l'itinéraire Yosemite, chargement téléphones/powerbanks, organisation de la glacière, affaires du lendemain prêtes. Demain matin : vous prenez la glacière et vous partez directement à Yosemite, aucun arrêt nourriture nécessaire." }
  ],
  highlight: {
    name: "Moro Rock & General Sherman Tree",
    difficulty: "moderate", diffLabel: "Moro Rock : modéré · General Sherman : facile à modéré",
    distance: "Moro Rock : escaliers taillés dans la roche, 350+ marches sur une distance courte · General Sherman : ~1,6 km A/R (l'aller descend, le retour remonte)",
    duration: "Moro Rock : 40-50 min · General Sherman : 1h-1h15",
    water: "Une bouteille par personne suffit pour chacune de ces deux marches courtes, avec le reste du stock laissé dans la voiture.",
    gear: "Chaussures confortables à bonne adhérence pour les escaliers de Moro Rock (vide important par endroits, rambardes présentes), appareil photo grand angle indispensable pour General Sherman — l'arbre ne tient pas dans le cadre autrement.",
    reservation: "Aucune pour les deux. Pas de navette le 15 septembre (saison estivale terminée le 7 septembre) — tout se fait en voiture personnelle, parkings principaux annoncés ouverts (à revérifier juste avant le départ).",
    tips: [
      "Moro Rock n'est pas une petite promenade plate : escaliers raides + altitude + vide, mais les rambardes sécurisent bien le parcours.",
      "Pas de Congress Trail aujourd'hui : avec Moro Rock, Sherman et Grant prévus, quelques km de plus ne sont pas nécessaires vu qu'il reste de la route jusqu'à Oakhurst.",
      "Territoire d'ours à Giant Forest/Lodgepole : ne laissez jamais de nourriture accessible ou visible pendant le pique-nique.",
      "General Grant Tree (Kings Canyon) est presque sur la route vers Oakhurst : très peu d'effort pour un arrêt qui vaut vraiment le coup, ne le zappez pas.",
      "Le vrai objectif logistique de la soirée est les courses à Oakhurst — sans ça, le lendemain matin à Yosemite devient compliqué côté repas."
    ]
  }
},
// ---------------------------------------------------------------- JOUR 12
{
  id: 12, date: "16 sept.", weekday: "Mercredi", region: "Californie",
  title: "Yosemite — Tunnel View, El Capitan, baignade & Glacier Point",
  wake: "6h00", wakeType:"calc",
  wakeReason: "Le petit-déjeuner de l'hôtel Oakhurst ne commence qu'à 7h — pas question de l'attendre. Réveil 6h00, départ 6h30. Objectif : être dans Yosemite Valley avant 9h. Aucune réservation d'entrée n'est requise en 2026, donc le flux de visiteurs n'est régulé par aucun créneau horaire — l'affluence et le stationnement se compliquent dès la matinée.",
  breakfast: { included:false, note:"Pas de petit-déjeuner à l'hôtel Oakhurst (trop tardif). Il est acheté la veille pendant les courses à Oakhurst — voir jour 11 : bagels/muffins/viennoiseries, bananes ou fruits, café froid ou boisson caféinée, jus. Il se mange face au panorama de Tunnel View vers 8h, ce qui en fait carrément une activité du road trip plutôt qu'une simple formalité." },
  photo: WIKI("Tunnel View, Yosemite Valley, Yosemite NP - Diliff.jpg"),
  photoCap: "Tunnel View, Yosemite National Park — Wikimedia Commons",
  hotel: { name: "Hôtel Fresno", link: "https://www.booking.com/Share-6jU5jpj", price: "33,89 $ / pers." },
  alert: [
    { tone:"mustard", title:"Pas de réservation d'entrée en 2026, mais...", text:"Contrairement aux étés 2024-2025, Yosemite n'exige aucune réservation d'entrée en 2026. Sans ce filtre, les parkings de la vallée se remplissent tôt (souvent avant 9h) — arrivez le plus tôt possible. Pass America the Beautiful ou paiement à l'entrée obligatoire dans tous les cas. Les navettes Valleywide (gratuites) tournent actuellement de 7h à 22h, passages toutes les 12-22 min." },
    { tone:"rust", title:"Baignade dans la Merced : uniquement si les conditions sont bonnes", text:"La baignade est généralement autorisée dans la Merced à Cathedral Beach, mais le NPS rappelle qu'une rivière d'apparence calme peut cacher courant, eau très froide et obstacles immergés. 🟢 Eau basse + courant très calme : pieds, jambes, petite trempette (10-20 min suffisent). 🟠 Eau froide ou courant visible : pieds/jambes seulement. 🔴 Courant fort après pluie/orage : aucune baignade. Décidez sur place selon ce que vous voyez. Aucune eau potable à Cathedral Beach — arrivez avec les gourdes déjà remplies." }
  ],
  timeline: [
    { type:"activity", label:"Réveil + checkout Oakhurst", dur:"6h00 → 6h30", desc:"Préparation tranquille : valises dans la voiture, gourdes, glacière avec le déjeuner ET le petit-déjeuner achetés la veille. Départ 6h30, sans attendre le petit-déj de l'hôtel (service à partir de 7h seulement)." },
    { type:"drive", label:"Oakhurst → Tunnel View", dur:"6h30 → ≈7h45", desc:"CA-41 → South Entrance → Wawona Road. Pas de Mariposa Grove aujourd'hui : vous avez déjà fait General Sherman et General Grant la veille, pas besoin de reconsacrer des heures aux séquoias.", link: gmaps("37°32'14.3\"N 119°56'27.0\"W"), linkText:"Itinéraire Google Maps" },
    { type:"activity", label:"🏔️ Tunnel View + petit-déjeuner", dur:"7h45 → 8h15", desc:"El Capitan, Half Dome, Bridalveil Fall et toute Yosemite Valley d'un coup en sortant du tunnel. 7h45-7h55 photos, puis 7h55-8h10 petit-déjeuner face à la vue (acheté la veille) — largement préférable au petit-déj classique de l'hôtel.", link: gmaps("Tunnel View Yosemite"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"Bridalveil Fall", dur:"8h20 → 8h50", desc:"Courte promenade, ~0,8 km A/R. En septembre le débit est généralement faible (Yosemite Falls est même souvent quasiment à sec à cette période). ⚠️ Pas de baignade ici, ne grimpez pas dans les rochers sous la cascade — la trempette est prévue plus tard, à la Merced.", link: gmaps("Bridalveil Fall Trailhead Yosemite"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Entrée dans Yosemite Valley — parking Yosemite Village", dur:"8h50 → ≈9h05", desc:"Par Southside Drive. Une fois garés, vous ne redéplacez plus la voiture pendant plusieurs heures : navette gratuite Valleywide (7h-22h) pour tout le reste de la matinée.", link: gmaps("Yosemite Village Parking"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"Cook's Meadow + Sentinel Bridge", dur:"9h15 → 10h00", desc:"~1,6 km, très facile, pratiquement aucun dénivelé. Vues sur Half Dome, Sentinel Rock et les grandes parois de la vallée, puis Sentinel Bridge pour la vue emblématique sur Half Dome au-dessus de la Merced River." },
    { type:"activity", label:"Pause — toilettes, gourdes, navette", dur:"10h00 → 10h35", desc:"Retour secteur Yosemite Village : toilettes, remplissage des gourdes (pas d'eau potable plus tard à Cathedral Beach), vérification rapide des conditions. Pas besoin de 40 min au Visitor Center. Puis navette Valleywide vers El Capitan Meadow." },
    { type:"activity", label:"🧗 El Capitan Meadow", dur:"10h35 → 11h05", desc:"Au pied d'une paroi de plus de 900 m. Prenez jumelles ou zoom téléphone : il y a presque toujours des grimpeurs suspendus sur la paroi, invisibles à l'œil nu. 30 min suffisent.", link: gmaps("El Capitan Meadow Yosemite"), linkText:"Ouvrir dans Maps" },
    { type:"hike", label:"🏖️ Cathedral Beach — pique-nique & trempette", dur:"11h15 → 12h15", desc:"Arrêt 10 de la navette Valleywide. Vraie plage sur la Merced avec El Capitan juste en face, tables de pique-nique et toilettes. Sortez la glacière (sandwich/wrap acheté à Oakhurst, fruit, chips, snack, boisson) et mangez au bord de l'eau. Baignade ensuite selon les conditions (voir alerte) : maillot, petite serviette, sandales/chaussures d'eau si vous en avez. Plan B si l'endroit ne convient pas : Sentinel Beach, un peu plus loin, offre le même type d'accès à la rivière.", link: gmaps("Cathedral Beach Yosemite"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Retour vers Yosemite Village (navette)", dur:"12h15 → 12h45", desc:"Comptez large, 30 min environ selon l'attente et la circulation. Retour à la voiture." },
    { type:"activity", label:"Valley View", dur:"13h00 → 13h15", desc:"Par Northside Drive, dernière belle vue de la vallée (El Capitan, Merced River, Cathedral Rocks), parfaitement placée sur la route de sortie. Si le petit parking est plein, ne perdez pas de temps à tourner, continuez.", link: gmaps("Valley View Yosemite"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Vers Glacier Point Road", dur:"13h15 → 14h15", desc:"Wawona Road → Glacier Point Road. Routes toutes indiquées ouvertes (dernier état officiel du 19 août 2026, à revérifier juste avant le voyage)." },
    { type:"activity", label:"Washburn Point", dur:"14h15 → 14h30", desc:"Arrêt simple parking → panorama : Half Dome, Vernal Fall, Nevada Fall, High Sierra. 10-15 min.", link: gmaps("Washburn Point Yosemite"), linkText:"Ouvrir dans Maps" },
    { type:"activity", label:"🏔️ Glacier Point", dur:"14h35 → 15h20", desc:"Environ 980 m au-dessus de Curry Village, panorama immense sur Half Dome, la vallée, Vernal et Nevada Falls, la High Sierra. Courte promenade pavée depuis le parking. Un des grands moments du parc — pas de Sentinel Dome aujourd'hui, la journée est déjà bien remplie entre Cathedral Beach et Glacier Point.", link: gmaps("Glacier Point Yosemite"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Glacier Point → Fresno", dur:"≈15h20 → 18h-18h30", desc:"Glacier Point Road → Wawona Road → CA-41 → Oakhurst → Fresno. Vous ne repassez pas dans Yosemite Valley. Comptez une arrivée plutôt 18h-18h30 que 17h — la pause baignade décale un peu la journée, mais ça vaut largement le coup.", link: gmaps("37°14'14.7\"N 120°34'57.3\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Fresno", dur:"", desc:"Réservé. Check-in, douche, dîner simple (fast-food/tacos ~8-15 $/pers, ou restes de la glacière) — pas de tourisme nécessaire à Fresno, le lendemain c'est la route vers Los Angeles.", link:"https://www.booking.com/Share-6jU5jpj", linkText:"Voir la réservation" }
  ],
  highlight: {
    name: "Cathedral Beach (baignade dans la Merced)",
    difficulty: "easy", diffLabel: "Facile — le seul enjeu est la baignade, pas la marche",
    distance: "Accès direct depuis l'arrêt 10 de la navette Valleywide, pas de marche d'approche",
    duration: "≈1h sur place",
    water: "⚠️ Aucune eau potable à Cathedral Beach (comme la plupart des aires de pique-nique de Yosemite) — remplissez les gourdes avant de quitter le secteur Yosemite Village.",
    gear: "Maillot de bain, petite serviette, sandales/chaussures d'eau si vous en avez, crème solaire. Pique-nique sorti de la glacière (acheté à Oakhurst la veille).",
    reservation: "Aucune. Baignade généralement autorisée dans la Merced, à décider sur place selon le niveau et le courant (voir l'alerte ci-dessus pour les seuils).",
    tips: [
      "Objectif réaliste : tremper les pieds/jambes ou une trempette de 10-20 min, pas une session natation — ça suffit largement pour l'expérience.",
      "El Capitan est juste en face : c'est ce qui rend Cathedral Beach bien meilleure que l'aire de pique-nique classique d'El Capitan pour cette pause.",
      "Plan B si besoin : Sentinel Beach, un peu plus loin sur la même navette, offre un accès similaire à la rivière.",
      "Mirror Lake volontairement écarté : à cette période, il est souvent presque à sec et représente un détour de plusieurs km pour un intérêt moindre que Cathedral Beach.",
      "En sortant, ne cherchez pas absolument une place au mini-parking de Valley View si c'est plein — la vue depuis la route en sortant reste correcte, mieux vaut ne pas perdre 20 min à tourner."
    ]
  }
},
// ---------------------------------------------------------------- JOUR 13
{
  id: 13, date: "17 sept.", weekday: "Jeudi", region: "Californie",
  title: "Route vers Los Angeles",
  wake: "Grasse matinée", wakeType:"free",
  wakeReason: "Pas de rando ni d'horaire imposé aujourd'hui — mais la route Fresno → LA prend 4-5h et il y a le changement de véhicule à LAX ensuite : ne trainez pas trop pour arriver à un horaire raisonnable et gérer ça sereinement.",
  breakfast: { included:true, note:"Petit-déjeuner à l'Hôtel Fresno (nuit précédente) — dernier petit-déj d'hôtel inclus du voyage avant la série d'hôtels Las Vegas/Los Angeles." },
  photo: WIKI("Hollywood Sign.jpg"),
  photoCap: "Hollywood Sign, Los Angeles — Wikimedia Commons",
  hotel: { name: "Hôtel Los Angeles", link: "https://www.booking.com/Share-ARqjQLn", price: "276 $ / pers. (5 nuits)" },
  alert: { tone:"rust", title:"À RÉSERVER DE TOUTE URGENCE — location Mustang LAX", text:"La location de la Mustang à Los Angeles (17-22 sept.) n'est pas encore réservée d'après votre checklist. Les décapotables et modèles \"fun\" partent vite en haute saison à LAX — réservez maintenant pour garantir le modèle et le prix." },
  timeline: [
    { type:"drive", label:"Fresno → Los Angeles", dur:"~4-5 h", desc:"Longue route de transition — prévoyez une pause déjeuner sur le trajet.", link: gmapsDir("Fresno CA","Los Angeles CA"), linkText:"Itinéraire Google Maps" },
    { type:"activity", label:"Changement de véhicule à LAX", dur:"~1-2 h", desc:"Restitution de la première voiture, récupération de la Mustang de location. Vérifiez l'état des lieux avec photos comme au premier jour." },
    { type:"activity", label:"Installation à l'hôtel & première soirée à LA", dur:"Soirée", desc:"Prenez vos marques — Santa Monica Pier ou Venice Beach en fin de journée pour un premier coucher de soleil sur le Pacifique." },
    { type:"sleep", label:"Dodo — Los Angeles", dur:"", desc:"Réservé, 5 nuits.", link:"https://www.booking.com/Share-ARqjQLn", linkText:"Voir la réservation" }
  ],
  highlight: null
},
// ---------------------------------------------------------------- JOUR 14
{
  id: 14, date: "18 sept.", weekday: "Vendredi", region: "Los Angeles",
  title: "Universal Studios Hollywood",
  wake: "7h30", wakeType:"calc",
  wakeReason: "Le parc ouvre généralement vers 9h-10h. Arriver à l'ouverture (\"rope drop\") permet de faire les attractions phares (Harry Potter World, Studio Tour, Jurassic World) avant les grosses files de l'après-midi. Ajustez selon le temps de route + parking depuis votre hôtel LA.",
  breakfast: { included:false, note:"Pas de petit-déjeuner inclus à l'hôtel LA (nuit précédente) — prévoyez de manger en route ou d'acheter de quoi grignoter avant d'arriver à Universal Studios (le parc a des options sur place, mais chères)." },
  photo: WIKI("Griffith observatory 2006.jpg"),
  photoCap: "Griffith Observatory, Los Angeles — Wikimedia Commons",
  hotel: { name: "Hôtel Los Angeles", link: "https://www.booking.com/Share-ARqjQLn", price: "inclus" },
  alert: { tone:"rust", title:"À RÉSERVER — billets Universal Studios", text:"Les billets Universal Studios Hollywood ne sont pas encore achetés. Prenez-les en ligne à l'avance : cela évite la file à l'entrée, garantit l'accès (le parc peut afficher complet certains jours), et coûte souvent moins cher qu'à la billetterie sur place." },
  timeline: [
    { type:"activity", label:"Journée complète — Universal Studios Hollywood", dur:"~12 h", desc:"Arrivez à l'ouverture pour profiter des attractions phares (Harry Potter World, Studio Tour, Jurassic World) avant les grosses files d'attente de l'après-midi. Prévoyez de l'eau et un plan de la journée — l'appli officielle Universal permet de suivre les temps d'attente en direct.", link: null }
  ],
  highlight: null
},
// ---------------------------------------------------------------- JOUR 15
{
  id: 15, date: "19 sept.", weekday: "Samedi", region: "Los Angeles / Malibu",
  title: "Los Angeles, Malibu & Santa Barbara (1/3)",
  wake: "Grasse matinée", wakeType:"free",
  wakeReason: "Journée 100% libre, aucune contrainte horaire.",
  breakfast: { included:false, note:"Pas de petit-déjeuner inclus à l'hôtel LA — débrouillez-vous en ville (énormément de choix pour un brunch à LA/Malibu/Santa Barbara)." },
  photo: WIKI("Mission Santa Barbara01.jpg"),
  photoCap: "Mission Santa Barbara — Wikimedia Commons",
  hotel: { name: "Hôtel Los Angeles", link: null, price: "inclus" },
  alert: null,
  timeline: [
    { type:"activity", label:"Journée libre — côte californienne", dur:"Journée", desc:"Trois jours ouverts pour composer votre programme : Malibu (plages, Malibu Pier, Point Dume), Santa Barbara (Mission historique, State Street, front de mer), ou temps calme à Los Angeles (Griffith Observatory, Getty Center, Venice Beach, Rodeo Drive). Répartissez ces activités sur les jours 15, 16 et 17 selon la météo et l'envie du moment." }
  ],
  highlight: null
},
// ---------------------------------------------------------------- JOUR 16
{
  id: 16, date: "20 sept.", weekday: "Dimanche", region: "Los Angeles / Malibu",
  title: "Los Angeles, Malibu & Santa Barbara (2/3)",
  wake: "Grasse matinée", wakeType:"free",
  wakeReason: "Journée 100% libre, aucune contrainte horaire.",
  breakfast: { included:false, note:"Pas de petit-déjeuner inclus à l'hôtel LA — débrouillez-vous en ville." },
  photo: WIKI("Hollywood Sign.jpg"),
  photoCap: "Hollywood Sign, Los Angeles — Wikimedia Commons",
  hotel: { name: "Hôtel Los Angeles", link: null, price: "inclus" },
  alert: null,
  timeline: [
    { type:"activity", label:"Journée libre — suite du programme californien", dur:"Journée", desc:"Voir jour 15 pour les idées d'activités. Pensez à réserver un restaurant si vous visez une adresse populaire un samedi/dimanche soir." }
  ],
  highlight: null
},
// ---------------------------------------------------------------- JOUR 17
{
  id: 17, date: "21 sept.", weekday: "Lundi", region: "Los Angeles / Santa Barbara",
  title: "Los Angeles, Malibu & Santa Barbara (3/3)",
  wake: "Grasse matinée", wakeType:"free",
  wakeReason: "Journée 100% libre, aucune contrainte horaire — mais pensez à commencer à ranger les bagages en vue du départ du lendemain.",
  breakfast: { included:false, note:"Pas de petit-déjeuner inclus à l'hôtel LA — débrouillez-vous en ville." },
  photo: WIKI("Griffith observatory 2006.jpg"),
  photoCap: "Griffith Observatory, Los Angeles — Wikimedia Commons",
  hotel: { name: "Hôtel Los Angeles", link: null, price: "inclus" },
  alert: { tone:"mustard", title:"Dernière soirée", text:"C'est votre dernière soirée complète du voyage — pensez à commencer à réorganiser les bagages et à repérer où rendre la Mustang le lendemain avant le vol retour." },
  timeline: [
    { type:"activity", label:"Dernière journée libre", dur:"Journée", desc:"Profitez-en pour boucler ce que vous n'avez pas encore vu (Santa Barbara si pas encore fait, ou repos avant le vol retour)." }
  ],
  highlight: null
},
// ---------------------------------------------------------------- JOUR 18
{
  id: 18, date: "22 sept.", weekday: "Mardi", region: "Retour",
  title: "Retour vers Pittsburgh",
  wake: "Selon vol", wakeType:"flight",
  wakeReason: "Réglez le réveil selon l'horaire du vol LA → Pittsburgh, en comptant large avant pour la restitution de la Mustang à LAX (voir alerte ci-dessous).",
  breakfast: { included:false, note:"Pas de petit-déjeuner inclus à l'hôtel LA — prévoyez de manger avant de partir ou sur place à LAX avant le vol." },
  photo: WIKI("Route66 sign.jpg"),
  photoCap: "U.S. Route 66 — Wikimedia Commons",
  hotel: null,
  alert: { tone:"mustard", title:"Restitution de la voiture", text:"Restituez la Mustang à LAX avec le plein d'essence fait (sauf si vous avez pris l'option prépayée) pour éviter les frais de carburant majorés. Comptez de la marge pour le retour véhicule + navette aéroport + enregistrement." },
  timeline: [
    { type:"activity", label:"Restitution du véhicule à LAX", dur:"", desc:"Photos de l'état des lieux, comme à l'aller." },
    { type:"drive", label:"Vol Los Angeles → Pittsburgh", dur:"5 h 00", desc:"Fin du roadtrip — bon retour !" }
  ],
  highlight: null
}
];

// ---------------------------------------------------------------- RÉSERVATIONS
const RESERVATIONS = [
  { date:"5 sept.", label:"Avion Pittsburgh → Oklahoma City", link:null, done:true, price:"145,46 $" },
  { date:"5 → 17 sept.", label:"Location voiture (OKC → LA)", link:null, done:true, price:"389 $" },
  { date:"Tout le séjour", label:"Pass America the Beautiful (parcs nationaux)", link:"https://www.recreation.gov/", done:false, price:"80 $ (US)", urgent:true },
  { date:"5 → 6 sept.", label:"Hôtel Oklahoma City", link:"https://www.booking.com/Share-ckQuly", done:true, price:"35,50 $" },
  { date:"6 → 7 sept.", label:"Hôtel Tucumcari", link:"https://www.booking.com/Share-W7rA1m", done:true, price:"27,78 $" },
  { date:"7 → 8 sept.", label:"Hôtel Bloomfield", link:"https://www.booking.com/Share-BGfTBSx", done:true, price:"35 $" },
  { date:"8 → 9 sept.", label:"Hôtel Tusayan", link:"https://www.booking.com/Share-mp0o9Ru", done:true, price:"85 $" },
  { date:"9 → 10 sept.", label:"Hôtel Page", link:"https://www.booking.com/Share-GNo6a7", done:true, price:"24,04 $" },
  { date:"10 sept.", label:"Antelope Canyon — Upper (randonnée complète HG, GetYourGuide)", link:null, done:true, price:"169,60 € / 2 pers." },
  { date:"10 sept.", label:"Antelope Canyon — kayak (WazSUP Kayaks, tandem)", link:"https://wazsupkayaks.com/rentals/", done:true, price:"≈70 $/jour" },
  { date:"10 → 11 sept.", label:"Hôtel Kanab", link:"https://www.booking.com/Share-bdMry3i", done:true, price:"32,38 $" },
  { date:"11 → 14 sept.", label:"Hôtel Las Vegas (Luxor)", link:null, done:true, price:"245,50 $" },
  { date:"14 → 15 sept.", label:"Hôtel Lindsay", link:"https://www.booking.com/Share-Q6a43Ew", done:true, price:"43 $" },
  { date:"15 → 16 sept.", label:"Hôtel Oakhurst", link:"https://www.booking.com/Share-k3TA9f", done:true, price:"53,55 $" },
  { date:"16 → 17 sept.", label:"Hôtel Fresno", link:"https://www.booking.com/Share-6jU5jpj", done:true, price:"33,89 $" },
  { date:"17 → 22 sept.", label:"Location Mustang (LAX)", link:null, done:false, price:"—", urgent:true },
  { date:"17 → 22 sept.", label:"Hôtel Los Angeles", link:"https://www.booking.com/Share-ARqjQLn", done:true, price:"276 $" },
  { date:"18 sept.", label:"Billets Universal Studios LA", link:"https://www.universalstudioshollywood.com/", done:false, price:"—", urgent:true },
  { date:"22 sept.", label:"Avion Los Angeles → Pittsburgh", link:null, done:true, price:"134 $" }
];
const BUDGET_TOTAL = 1560.10;

// ---------------------------------------------------------------- LISTE DE COURSES
const SHOPPING = [
  { cat:"Route & snacking (jour 1, avant le départ d'OKC)", items:[
    "Eau en bouteille (pack de 24, plusieurs fois pendant le trip)","Barres de céréales / noix / fruits secs","Chips / crackers","Fruits faciles à transporter (pommes, bananes)","Café soluble / thermos si besoin le matin","Glacière souple + pains de glace"
  ]},
  { cat:"Randonnées (Grand Canyon, Antelope, Zion, Death Valley...)", items:[
    "Gourdes/poches à eau grande contenance (2-3 L/pers)","Pastilles ou poudre d'électrolytes","Crème solaire indice 50+","Casquettes / chapeaux à large bord","Lunettes de soleil","Snacks énergétiques (barres, fruits secs)"
  ]},
  { cat:"Pharmacie / premiers secours", items:[
    "Pansements & désinfectant","Anti-douleur (paracétamol/ibuprofène)","Anti-diarrhéique","Crème après-soleil / apaisante","Répulsif anti-moustiques","Médicaments personnels habituels"
  ]},
  { cat:"Divers / confort route", items:[
    "Chargeurs voiture + câbles","Powerbank","Lingettes / gel hydroalcoolique","Sacs poubelle (déchets voiture)","Oreiller de voyage / plaid pour les longues routes","Espèces en dollars (petits parcs, guides Navajo, pourboires)"
  ]}
];
