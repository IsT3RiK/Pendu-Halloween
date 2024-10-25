async function getRandomWord() {
    try {
        const response = await fetch("https://random-word-api.herokuapp.com/word?lang=fr&number=1");
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Erreur lors de la récupération du mot :", error);
        
        // Liste de mots par défaut
        const defaultWords = [
            "abandon", "abaisser", "abandonner", "abattre", "abdou", "abonner", "aboutir", "aboutissement", "absence",
"absolu", "absolument", "abstrait", "accident", "accroitre", "accueillir", "accusation", "achat", "achever", "acquerir",
"acte", "acteur", "actrice", "action", "activite", "adequat", "adjoint", "admirable", "admiration", "adolescent",
"adulte", "affaire", "affection", "afficher", "agence", "agriculture", "aider", "aiguille", "air", "ajouter",
"alimentation", "allemand", "amateur", "ameliorer", "amitie", "ampleur", "ancien", "anniversaire", "annoncer", "anomalie",
"annee", "appartenance", "appeler", "apprentissage", "approfondir", "approche", "approximatif", "arbre", "arranger", "arrivee",
"art", "artiste", "assistance", "association", "assurer", "attraction", "aujourd'hui", "auteur", "autre", "autonomie",
"avantage", "aventure", "avenue", "beau", "beaute", "bien", "bizarre", "bloc", "boire", "bonheur",
"boulanger", "bruit", "cacher", "calcul", "campagne", "candidat", "capacite", "caractere", "carte", "cas",
"cause", "celebration", "champ", "changer", "chaos", "chaud", "chemin", "choisir", "ciel", "circulation",
"citoyen", "climat", "cognition", "collectif", "collectivite", "collision", "combat", "comedie", "communication", "communaute",
"concentration", "conclusion", "condition", "connaissance", "construire", "contact", "contexte", "convention", "corps", "courage",
"courrier", "culture", "decouverte", "decroitre", "defendre", "definir", "dejeuner", "demarche", "democratie", "demande",
"devoir", "developper", "developpement", "dialogue", "difficulte", "diligence", "discours", "discuter", "distance", "diversite",
"diviser", "docteur", "document", "domaine", "dormir", "droit", "economie", "ecole", "effort", "elan",
"elever", "element", "energie", "engagement", "environnement", "equipe", "essayer", "etablir", "etat", "eternel",
"etude", "evaluation", "eveiller", "evolution", "exercice", "experience", "expliquer", "expression", "facon", "familier",
"famille", "fantome", "farce", "femme", "fermer", "fete", "film", "finir", "flamme", "fleur",
"foi", "formation", "fort", "francais", "franchement", "futur", "gagner", "garantie", "garde", "general",
"generation", "groupe", "habitude", "histoire", "hiver", "impression", "informer", "initiative", "instant", "institution",
"instruction", "intelligence", "interet", "investir", "invitation", "jeune", "joie", "jouer", "juin", "jus",
"jour", "journey", "lien", "livre", "logique", "maitre", "marcher", "marche", "matin", "materiel",
"memoire", "melange", "metier", "mettre", "monde", "montrer", "moral", "musique", "nature", "nourriture",
"nombre", "observation", "offrir", "objectif", "oeuvre", "ombre", "opinion", "ordre", "organisation", "oublier",
"ouverture", "pays", "parler", "partage", "particulier", "partie", "passer", "patience", "paysage", "penseur",
"peur", "philosophie", "phrase", "pierre", "plan", "plante", "plat", "pouvoir", "pratiquer", "preferer",
"presenter", "processus", "produit", "profession", "projet", "proposer", "protection", "qualite", "quantite", "question",
"rarete", "realite", "reaction", "reduire", "recemment", "repondre", "reussir", "rien", "risque", "rouge",
"sacre", "savoir", "scene", "sensible", "serenite", "service", "sincerite", "societe", "solution", "son",
"soulager", "souvenir", "special", "spectacle", "spiritualite", "sujet", "systeme", "table", "tache", "telephone",
"temps", "terrain", "terrible", "tete", "texture", "tradition", "trouver", "tuer", "unite", "univers",
"urgent", "valeur", "valoir", "vendre", "vent", "verite", "vetement", "vibrer", "voix", "voler",
"yoga", "absolue", "accorder", "accro", "accompagner", "adresser", "affronter", "agressif", "alerte", "analyser",
"approfondi", "arbitraire", "article", "artistique", "atypique", "attractionnel", "barriere", "batir", "bonification", "caprice",
"carte", "caverne", "celebrer", "celerite", "certificat", "chaine", "charte", "cheminement", "clarte", "concentration",
"confirmer", "conseil", "contact", "convergence", "croyance", "culturel", "debat", "declin", "deformation", "depart",
"determine", "detail", "detonation", "ecrire", "effectif", "efficace", "emotion", "enchantement", "energie", "engager",
"etablir", "etat", "etudiant", "evaluation", "eveiller", "exemplarite", "exploration", "facilite", "fascination", "felicite",
"fermete", "fierte", "force", "fraction", "generation", "guerre", "harmonie", "hierarchie", "imagination", "implication",
"inclure", "independance", "inspiration"
        ];
        
        return defaultWords[Math.floor(Math.random() * defaultWords.length)];
    }
}

module.exports = { getRandomWord };
