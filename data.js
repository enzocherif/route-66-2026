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
    { tone:"rust", title:"Kayak — À RÉSERVER DE TOUTE URGENCE", text:"C'est la seule grosse réservation qui reste à verrouiller pour cette journée. Réservez chez WazSUP Kayaks (Antelope Point Launch Ramp WazSUP Kayaks Rentals) : 1× \"Sit On Top Kayak | Tandem\" pour vous deux (un seul tandem, pas deux kayaks). Environ 70 $/jour, gilets et pagaies inclus. Récupération idéale vers 14h-14h15 si le site demande une heure. Annulation gratuite jusqu'à 48h avant. Retour impératif avant 18h00 — ne visez surtout pas cette limite, prévoyez d'avoir fini vers 17h15-17h30." },
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
    { type:"hike", label:"🛶 LOWER ANTELOPE CANYON EN KAYAK", dur:"≈14h15 → 17h15 (À RÉSERVER)", desc:"Récupération kayak tandem + 2 pagaies + 2 gilets sur place (pas besoin de le transporter). Mise à l'eau ~14h15. Comptez 1h-1h30 à l'aller, un temps sur place pour profiter/photos, puis 1h-1h30 au retour — le vent peut forcir l'après-midi, gardez de la marge. Vous entrez par l'eau dans la partie basse de Lower Antelope Canyon : une expérience différente de la visite pédestre classique." },
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
    reservation: "Upper Antelope Canyon : RÉSERVÉ (GetYourGuide, 10h40). Kayak WazSUP : à réserver d'urgence, tandem unique, retour impératif avant 18h00 — voir les alertes ci-dessus.",
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
  title: "Zion National Park → Las Vegas",
  wake: "5h00", wakeType:"calc",
  wakeReason: "Premier départ de navette vers 7h en pleine saison — pour en attraper une des toutes premières (essentiel pour faire The Narrows ou Angels Landing avant l'afflux), comptez 1h de route Kanab → Zion + 15-20 min pour rejoindre l'arrêt navette depuis le parking. Départ de Kanab visé vers 5h45.",
  breakfast: { included:true, note:"Petit-déjeuner à l'Hôtel Kanab (nuit précédente) — avec un départ visé à 5h45, vérifiez l'horaire d'ouverture de la salle de petit-déj en arrivant la veille ; prévoyez un plan B à emporter si elle ouvre trop tard." },
  photo: WIKI("Angels Landing and the Great White Throne.jpg"),
  photoCap: "Zion National Park, Utah — Wikimedia Commons",
  hotel: { name: "Las Vegas — Luxor Hotel & Casino", link: null, price: "245,50 $ / pers. (3 nuits)" },
  alert: { tone:"mustard", title:"Angels Landing : loterie la veille", text:"Si vous voulez tenter Angels Landing (la randonnée avec chaînes, vue à couper le souffle), un permis est obligatoire au-delà de Scout Lookout. La loterie saisonnière de septembre est déjà fermée (elle ouvrait le 1er juillet), mais une loterie \"day-before\" (la veille pour le lendemain) reste ouverte sur recreation.gov — tentez votre chance le 10 septembre au soir. Sans permis, la randonnée s'arrête à Scout Lookout, ce qui reste une belle vue." },
  timeline: [
    { type:"drive", label:"Kanab → Zion National Park", dur:"1 h 00", desc:"", link: gmaps("37°9'18.4\"N 112°54'25.7\"W"), linkText:"Itinéraire Google Maps" },
    { type:"hike", label:"Randonnée dans Zion Canyon", dur:"Matinée", desc:"La route panoramique du canyon est fermée aux véhicules privés (navette gratuite obligatoire, pas de réservation nécessaire pour la navette elle-même, 1er départ ~7h). Selon votre niveau : The Narrows (marcher dans la rivière, sensations garanties, prévoir chaussures fermées qui peuvent être mouillées), Angels Landing (avec permis, voir alerte), ou Emerald Pools (familial, sans permis).", link: gmaps("The Grotto Zion National Park Shuttle Stop 6"), linkText:"Ouvrir l'arrêt navette (The Grotto)" },
    { type:"drive", label:"Zion → Las Vegas", dur:"2 h 51", desc:"", link: gmaps("36°32'40.8\"N 114°59'20.4\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Las Vegas (Luxor Hotel & Casino)", dur:"", desc:"3 nuits sur place.", link: gmaps("Luxor Hotel and Casino Las Vegas"), linkText:"Voir sur Maps" }
  ],
  highlight: {
    name: "The Narrows / Angels Landing (Zion)",
    difficulty: "moderate", diffLabel: "Modéré à difficile selon le choix",
    distance: "The Narrows (aller simple depuis le fond, sans permis) : jusqu'à ~5 km A/R faisable en demi-journée · Angels Landing : 7,6 km A/R",
    duration: "2 à 4 h",
    water: "Peu de points d'eau sur les sentiers de Zion — partez avec vos réserves. Pour The Narrows, vous marcherez dans l'eau de la rivière Virgin (fraîche même en septembre).",
    gear: "Pour The Narrows : chaussures fermées avec bonne adhérence que vous acceptez de mouiller (ou location de chaussures/bâtons de rando à Springdale). Pour Angels Landing : gants recommandés pour les chaînes, aucune peur du vide.",
    reservation: "Navette : aucune réservation. Angels Landing : permis obligatoire au-delà de Scout Lookout (voir alerte ci-dessus).",
    tips: [
      "La saison des navettes 2026 tourne toutes les 5-10 minutes en haute saison — comptez large pour le trajet en navette lui-même.",
      "Angels Landing n'est pas recommandé en cas de vertige : les 150 derniers mètres se font à la chaîne sur une arête étroite avec du vide des deux côtés.",
      "Pas de restauration dans le canyon lui-même — mangez à Springdale avant ou après."
    ]
  }
},
// ---------------------------------------------------------------- JOUR 8
{
  id: 8, date: "12 sept.", weekday: "Samedi", region: "Nevada",
  title: "Excursion à la Valley of Fire",
  wake: "6h30", wakeType:"calc",
  wakeReason: "1h10 de route depuis Las Vegas. Partir avant que la chaleur ne monte (souvent dès 10h-11h en septembre) permet de profiter des sentiers (Fire Wave, White Domes) dans de bonnes conditions et d'être de retour à Vegas pour l'après-midi.",
  breakfast: { included:false, note:"Pas de petit-déjeuner inclus au Luxor — comptez sur un café/resto du Strip ou de l'hôtel (payant), ou emportez de quoi grignoter avant de partir pour Valley of Fire." },
  photo: WIKI("Valley of Fire State Park, Nevada 01.jpg"),
  photoCap: "Valley of Fire State Park, Nevada — Wikimedia Commons",
  hotel: { name: "Las Vegas — Luxor", link: null, price: "inclus dans les 3 nuits" },
  alert: { tone:"mustard", title:"Chaleur", text:"Début septembre au Nevada, il peut encore faire 38-40 °C dans le désert en journée. Partez tôt le matin pour profiter du parc avant la grosse chaleur, et évitez toute rando longue entre 12h et 16h." },
  timeline: [
    { type:"drive", label:"Las Vegas → Valley of Fire", dur:"1 h 10", desc:"", link: gmaps("36°22'39.2\"N 115°9'17.7\"W"), linkText:"Itinéraire Google Maps" },
    { type:"hike", label:"Valley of Fire State Park", dur:"Demi-journée", desc:"Formations de grès rouge spectaculaires (le plus vieux parc d'État du Nevada). Incontournables : Fire Wave, Mouse's Tank, White Domes. Entrée : environ 15 $/véhicule (parc d'État, le pass America the Beautiful ne s'applique pas ici non plus).", link: gmaps("Valley of Fire State Park Visitor Center"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Retour Valley of Fire → Las Vegas", dur:"1 h 38", desc:"", link: gmaps("36°22'59.2\"N 115°9'19.2\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Soirée libre à Las Vegas", dur:"", desc:"Le Strip, un show, un restaurant à thème... Si vous voulez un spectacle ou une table dans un lieu couru, réservez dès maintenant, certains shows affichent complet plusieurs jours à l'avance." }
  ],
  highlight: {
    name: "Fire Wave & White Domes (Valley of Fire)",
    difficulty: "easy", diffLabel: "Facile",
    distance: "Fire Wave : ~2 km A/R · White Domes Loop : ~2 km",
    duration: "1 à 2 h au total pour les deux",
    water: "Aucun point d'eau dans le parc — partez avec toutes vos réserves (minimum 1,5 L/pers pour la demi-journée).",
    gear: "Chapeau, crème solaire, chaussures de marche légères — sentiers courts et faciles mais très exposés au soleil.",
    reservation: "Aucune réservation nécessaire, juste l'entrée à payer au poste (cash conseillé).",
    tips: ["Vue superbe sur Lake Mead depuis la route d'accès.", "Un léger 4x4 n'est pas nécessaire, une berline classique passe partout dans le parc."]
  }
},
// ---------------------------------------------------------------- JOUR 9
{
  id: 9, date: "13 sept.", weekday: "Dimanche", region: "Nevada",
  title: "Journée libre à Las Vegas",
  wake: "Grasse matinée", wakeType:"free",
  wakeReason: "Journée 100% libre, aucune contrainte — largement mérité après plusieurs matinées matinales. Faites la grasse matinée sans remords.",
  breakfast: { included:false, note:"Pas de petit-déjeuner inclus au Luxor — débrouillez-vous en ville (énormément de choix sur le Strip) ou au buffet de l'hôtel (payant)." },
  photo: WIKI("Las Vegas Strip at sunset.JPG"),
  photoCap: "Las Vegas Strip — Wikimedia Commons",
  hotel: { name: "Las Vegas — Luxor", link: null, price: "inclus" },
  alert: null,
  timeline: [
    { type:"activity", label:"Journée libre", dur:"Journée", desc:"Le Strip de jour et de nuit, Fremont Street Experience (centre historique, spectacle de lumières gratuit toutes les heures le soir), piscine à l'hôtel, casinos, ou une excursion optionnelle (Hoover Dam à ~45 min si vous voulez varier)." },
    { type:"sleep", label:"Dodo — Las Vegas (Luxor)", dur:"", desc:"Dernière nuit sur place." }
  ],
  highlight: null
},
// ---------------------------------------------------------------- JOUR 10
{
  id: 10, date: "14 sept.", weekday: "Lundi", region: "Nevada → Californie",
  title: "Death Valley",
  wake: "6h00", wakeType:"calc",
  wakeReason: "Deux raisons de ne pas trainer : 2h12 de route pour arriver à Badwater Basin avant le plus fort de la chaleur (l'endroit le plus chaud d'Amérique du Nord), puis une très longue étape de 4h59 l'après-midi jusqu'à Lindsay. Partir tôt évite de cumuler chaleur et fatigue de conduite en fin de journée.",
  breakfast: { included:false, note:"Pas de petit-déjeuner inclus au Luxor — prévoyez d'acheter de quoi manger/grignoter avant la longue route vers Death Valley (peu d'options une fois dans le désert)." },
  photo: WIKI("Boardwalk at Badwater Basin, Death Valley National Park, California.jpg"),
  photoCap: "Badwater Basin, Death Valley — Wikimedia Commons",
  hotel: { name: "Hôtel Lindsay", link: "https://www.booking.com/Share-Q6a43Ew", price: "43 $ / pers." },
  alert: { tone:"rust", title:"Chaleur extrême", text:"Death Valley est l'endroit le plus chaud d'Amérique du Nord — encore 38-43 °C facilement en septembre. Vérifiez le niveau d'essence et l'état de la clim avant d'entrer dans le parc (peu de stations sur la route), emportez largement plus d'eau que d'habitude, et limitez toute marche à moins de 20-30 min en pleine journée." },
  timeline: [
    { type:"drive", label:"Las Vegas → Death Valley", dur:"2 h 12", desc:"", link: gmaps("36°20'52.8\"N 117°3'56.0\"W"), linkText:"Itinéraire Google Maps" },
    { type:"hike", label:"Death Valley — Furnace Creek / Badwater Basin", dur:"2-3 h", desc:"Badwater Basin : le point le plus bas d'Amérique du Nord (-86 m), étendue de sel à perte de vue, marche facile sur le boardwalk puis sur le sel. Zabriskie Point pour un panorama sur les badlands si vous avez le temps.", link: gmaps("Badwater Basin Death Valley"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Death Valley → Lindsay", dur:"4 h 59", desc:"Longue route de fin de journée, prévoir des pauses fréquentes.", link: gmaps("35°51'41.1\"N 119°25'41.1\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Lindsay", dur:"", desc:"Réservé.", link:"https://www.booking.com/Share-Q6a43Ew", linkText:"Voir la réservation" }
  ],
  highlight: {
    name: "Badwater Basin",
    difficulty: "easy", diffLabel: "Facile (mais chaleur extrême)",
    distance: "Jusqu'à ~3 km A/R sur le sel si vous marchez loin",
    duration: "30 min à 1 h",
    water: "Aucun point d'eau — la règle NPS est d'emporter au minimum 4 L d'eau par personne pour toute activité en extérieur ici en été/début d'automne.",
    gear: "Lunettes de soleil (réverbération très forte sur le sel blanc), chapeau, chaussures fermées (le sel peut être coupant), crème solaire indice élevé.",
    reservation: "Aucune, entrée incluse dans le pass America the Beautiful ou payable au poste (~30 $/véhicule).",
    tips: ["Ne laissez jamais un animal ou un enfant seul dans la voiture, même quelques minutes.", "Le matin tôt ou la fin d'après-midi sont bien plus supportables que midi."]
  }
},
// ---------------------------------------------------------------- JOUR 11
{
  id: 11, date: "15 sept.", weekday: "Mardi", region: "Californie",
  title: "Sequoia National Forest",
  wake: "Grasse matinée", wakeType:"free",
  wakeReason: "Pas de vraie randonnée aujourd'hui (juste une marche facile jusqu'au General Sherman Tree), donc pas d'obligation stricte. Seule nuance : un départ pas trop tardif (avant 9h-9h30) évite de tourner pour se garer au parking du General Sherman Tree, très fréquenté en pleine journée.",
  breakfast: { included:true, note:"Petit-déjeuner à l'Hôtel Lindsay (nuit précédente)." },
  photo: WIKI("General Sherman.jpg"),
  photoCap: "General Sherman Tree, Sequoia National Park — Wikimedia Commons",
  hotel: { name: "Hôtel Oakhurst", link: "https://www.booking.com/Share-k3TA9f", price: "53,55 $ / pers." },
  alert: null,
  timeline: [
    { type:"drive", label:"Lindsay → Sequoia National Park", dur:"45 min", desc:"", link: gmaps("36°20'42.4\"N 119°8'34.9\"W"), linkText:"Itinéraire Google Maps" },
    { type:"hike", label:"Sequoia National Park — Giant Forest", dur:"Demi-journée", desc:"Le fameux General Sherman Tree, l'arbre le plus volumineux du monde (2200 ans, 84 m de haut). Marche facile depuis le parking principal (chemin pavé, léger dénivelé). Prolongez avec Moro Rock (escaliers taillés dans la roche, vue à 360°) si vous avez de l'énergie.", link: gmaps("General Sherman Tree Trailhead"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Sequoia Park → Oakhurst", dur:"3 h 35", desc:"", link: gmaps("36°49'38.5\"N 119°58'31.2\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Oakhurst", dur:"", desc:"Réservé.", link:"https://www.booking.com/Share-k3TA9f", linkText:"Voir la réservation" }
  ],
  highlight: {
    name: "General Sherman Tree",
    difficulty: "easy", diffLabel: "Facile",
    distance: "~0,8 à 2,5 km A/R selon le parking utilisé",
    duration: "45 min à 1 h30",
    water: "Peu de dénivelé, une petite bouteille suffit pour cette marche courte.",
    gear: "Chaussures confortables, appareil photo grand angle indispensable (l'arbre ne tient pas dans le cadre autrement !).",
    reservation: "Vérifiez avant de partir si le parc applique une restriction de circulation saisonnière sur la route de Giant Forest (système en place certaines années en haute saison) — consultez nps.gov/seki juste avant le départ.",
    tips: ["Le parking du General Sherman Tree se remplit vite en pleine journée — un arrivée en matinée est plus tranquille.", "Combinez avec Moro Rock si le temps le permet : vue exceptionnelle sur la Sierra Nevada."]
  }
},
// ---------------------------------------------------------------- JOUR 12
{
  id: 12, date: "16 sept.", weekday: "Mercredi", region: "Californie",
  title: "Yosemite & El Capitan",
  wake: "5h30", wakeType:"calc",
  wakeReason: "Sans réservation d'entrée en 2026, les parkings de la vallée (dont Tunnel View et Yosemite Village) se remplissent tôt en haute saison — souvent avant 9h. Avec 1h23 de route depuis Oakhurst, un départ vers 6h garantit une arrivée avant l'affluence.",
  breakfast: { included:true, note:"Petit-déjeuner à l'Hôtel Oakhurst (nuit précédente) — avec un départ dès 6h, vérifiez l'horaire d'ouverture en arrivant la veille." },
  photo: WIKI("Tunnel View, Yosemite Valley, Yosemite NP - Diliff.jpg"),
  photoCap: "Tunnel View, Yosemite National Park — Wikimedia Commons",
  hotel: { name: "Hôtel Fresno", link: "https://www.booking.com/Share-6jU5jpj", price: "33,89 $ / pers." },
  alert: { tone:"mustard", title:"Pas de réservation d'entrée en 2026, mais...", text:"Bonne nouvelle : contrairement aux étés 2024-2025, Yosemite n'exige aucune réservation d'entrée en 2026. En revanche, sans ce filtre, les parkings de la vallée se remplissent tôt (souvent avant 9h le matin en haute saison) — arrivez le plus tôt possible pour ne pas tourner en rond. Pass America the Beautiful ou paiement à l'entrée obligatoire dans tous les cas." },
  timeline: [
    { type:"drive", label:"Oakhurst → Yosemite / El Capitan", dur:"1 h 23", desc:"", link: gmaps("37°32'14.3\"N 119°56'27.0\"W"), linkText:"Itinéraire Google Maps" },
    { type:"hike", label:"Tunnel View + Yosemite Valley + El Capitan", dur:"Journée", desc:"Premier arrêt : Tunnel View, le panorama d'ouverture le plus célèbre du parc (El Capitan à gauche, Half Dome au fond, la cascade Bridalveil Fall à droite). Ensuite descente dans la vallée : admirez El Capitan (paroi verticale de 900 m, spot mondial de l'escalade — scrutez la falaise aux jumelles, il y a presque toujours des grimpeurs dessus) et si le débit le permet encore en septembre, les chutes Yosemite Falls.", link: gmaps("Tunnel View Yosemite"), linkText:"Ouvrir dans Maps" },
    { type:"drive", label:"Yosemite → Fresno", dur:"2 h 19", desc:"", link: gmaps("37°14'14.7\"N 120°34'57.3\"W"), linkText:"Itinéraire Google Maps" },
    { type:"sleep", label:"Dodo — Fresno", dur:"", desc:"Réservé.", link:"https://www.booking.com/Share-6jU5jpj", linkText:"Voir la réservation" }
  ],
  highlight: {
    name: "Tunnel View & Yosemite Valley",
    difficulty: "easy", diffLabel: "Facile (point de vue en voiture)",
    distance: "Point de vue directement accessible en voiture ; comptez 2-5 km de marche si vous flânez dans la vallée",
    duration: "2 à 4 h pour bien profiter",
    water: "Fontaines dans la vallée (Yosemite Village) — pas indispensable pour cette étape courte, mais utile si vous ajoutez une rando.",
    gear: "Jumelles pour repérer les grimpeurs sur El Capitan, appareil photo grand angle.",
    reservation: "Aucune en 2026 pour l'entrée générale — seuls certains treks spécifiques (Half Dome, permis de bivouac) nécessitent un permis séparé, non concernés par votre programme.",
    tips: ["En septembre, les chutes d'eau (Yosemite Falls, Bridalveil) sont souvent bien réduites voire à sec par rapport au printemps — ne soyez pas surpris.", "Septembre reste l'un des mois les plus fréquentés de l'année : privilégiez une arrivée matinale."]
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
  { date:"10 sept.", label:"Antelope Canyon — kayak (WazSUP Kayaks, tandem)", link:"https://wazsupkayaks.com/rentals/", done:false, price:"≈70 $/jour", urgent:true },
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
