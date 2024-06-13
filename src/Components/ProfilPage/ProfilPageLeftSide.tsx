const ProfilPageLeftSide = () => {
  return (
    <>
      <div className="left-side-profil-page">
        Paramètre de visibilité de nos informations : <br />
        Qui peut voir toutes mes informations : <br />
        Tout le monde (coché de base) <br /> Uniquement mes amis <br /> Personne
        (aucune catégorie visiblement ni le bandeau rose <br /> ni la phrase
        d’accroche. Il reste l’avatar, le contour d’avatar, <br /> le pseudo, le
        titre et une phrase à la place de la signature - <br /> “Blidnight ne
        souhaite pas montrer les informations de son profil”) <br />
        <br /> Le bandeau <br /> □ afficher l’xp (obligatoire) - grisé, ne pas
        intéragir avec <br /> □ afficher les médailles <br /> □ afficher les
        supercoins <br />
        □ afficher le nombre de visite <br /> □ afficher le nombre de likes du
        profil <br /> □ ne rien afficher (le bandeau n’est plus visible) <br />{" "}
        <br />
        Les catégories <br /> - Pouvoir changer l’ordre, drag and drop <br /> -
        et afficher / masquer des catégories <br /> <br />
        La signature n’apparaît pas si on n’a rien mis dedans. Les tags n’ont
        plus. <br />
        Les médailles n’ont plus si on n’en a aucune ça ne sert <br />
        à rien d’afficher un espace VIDE. <br /> PERSONNALISATION : <br />
        Changer l’image de profil (taille, poids, le type de fichier) <br />{" "}
        Changer le contour de l’image de profil <br />
        Changer le background du profil <br />
        Changer les images qui flottent (masquer/afficher) <br />
        Changer le background de notre “étiquette ami”
      </div>
    </>
  );
};

export default ProfilPageLeftSide;
