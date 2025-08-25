import './App.css'

export default function App() {
    return (
        <>
            <header className="site-header">
                <nav className="nav">
                    <a href="#accueil" className="logo">
                        Alesium
                    </a>
                    <div className="spacer"></div>
                    <a href="#presentation">Qui je suis</a>
                    <a href="#projets">Projets</a>
                    <a href="#tarifs">Tarifs</a>
                    <a href="#faq">FAQ</a>
                    <a href="#contact" className="cta">
                        Parlons de votre projet
                    </a>
                </nav>
            </header>

            <main id="accueil">
                <section className="hero">
                    <div className="hero-inner">
                        <h1>Du concept a la production fiable et rentable</h1>
                        <p>
                            Etude → prototype → mise en place. Solutions pretes
                            a fabriquer, testees, adaptees a votre capacite
                            reelle de production.
                        </p>
                        <a className="btn" href="#contact">
                            Demarrer un echange (15 min)
                        </a>
                    </div>
                </section>

                <section id="presentation" className="section">
                    <div className="grid-2">
                        <div>
                            <h2>Qui je suis</h2>
                            <p>
                                Ingenieur-concepteur et faiseur. Atelier
                                rentable monte from scratch, experience
                                multi-materiaux et multi-procedes, operationnel
                                immediatement.
                            </p>
                            <ul className="bullets">
                                <li>Conception robuste, pensee atelier</li>
                                <li>Multi-materiaux et multi-procedes</li>
                                <li>Alignement etude/terrain permanent</li>
                            </ul>

                            <div className="cv-interactive">
                                <h3>Mon parcours detaille</h3>

                                <div className="cv-section">
                                    <button
                                        className="cv-question"
                                        aria-expanded="false"
                                    >
                                        <span>
                                            12 annees d'experience : de
                                            l'ingenieur au chef d'entreprise
                                        </span>
                                        <span className="cv-icon">+</span>
                                    </button>
                                    <div className="cv-answer">
                                        <p>
                                            Fort d'une formation d'ingenieur en
                                            genie industriel et de 12 annees
                                            d'experience, j'ai su allier rigueur
                                            technique et gestion efficace dans
                                            des environnements exigeants.
                                        </p>
                                        <h4>Mes qualites cles :</h4>
                                        <ul>
                                            <li>
                                                <strong>
                                                    Rigueur technique
                                                </strong>{' '}
                                                : Nature reflechie et calme,
                                                capacite d'adaptation
                                            </li>
                                            <li>
                                                <strong>
                                                    Communication efficace
                                                </strong>{' '}
                                                : Collaboration
                                                interdisciplinaire
                                            </li>
                                            <li>
                                                <strong>
                                                    Approche inventive
                                                </strong>{' '}
                                                : Recherche de concepts
                                                pragmatiques
                                            </li>
                                            <li>
                                                <strong>
                                                    Autonomie analytique
                                                </strong>{' '}
                                                : Esprit cartesien et structure
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="cv-section">
                                    <button
                                        className="cv-question"
                                        aria-expanded="false"
                                    >
                                        <span>Expertise technique avancee</span>
                                        <span className="cv-icon">+</span>
                                    </button>
                                    <div className="cv-answer">
                                        <div className="expertise-grid">
                                            <div>
                                                <h4>Ingenierie mecanique</h4>
                                                <ul>
                                                    <li>
                                                        Maitrise Solidworks
                                                        Professional 2019
                                                    </li>
                                                    <li>
                                                        CAO
                                                        mecano-soudure/assemblage
                                                    </li>
                                                    <li>
                                                        Conception machines
                                                        speciales
                                                    </li>
                                                    <li>
                                                        Dimensionnement et RDM
                                                    </li>
                                                    <li>Depot de brevets</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4>
                                                    Production et Fabrication
                                                </h4>
                                                <ul>
                                                    <li>
                                                        Soudure TIG/MIG/MAG/Arc
                                                    </li>
                                                    <li>
                                                        Usinage
                                                        conventionnel/CNC
                                                    </li>
                                                    <li>
                                                        Fabrication additive
                                                        metal
                                                    </li>
                                                    <li>
                                                        Decoupe laser/jet d'eau
                                                    </li>
                                                    <li>
                                                        Maintenance MTBF/MTBO
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>
                                            <strong>Mon atelier :</strong>{' '}
                                            Equipement complet (tour, fraiseuse,
                                            postes soudure, presse 50T,
                                            fabrication additive...)
                                        </p>
                                    </div>
                                </div>

                                <div className="cv-section">
                                    <button
                                        className="cv-question"
                                        aria-expanded="false"
                                    >
                                        <span>
                                            Parcours entrepreneurial et projets
                                            marquants
                                        </span>
                                        <span className="cv-icon">+</span>
                                    </button>
                                    <div className="cv-answer">
                                        <div className="timeline">
                                            <div className="timeline-item">
                                                <h4>
                                                    2023 - Aujourd'hui : Maxence
                                                    Pereira Metallerie / Atelier
                                                    Gracz
                                                </h4>
                                                <p>
                                                    <strong>
                                                        President et Fondateur
                                                    </strong>{' '}
                                                    - Metallerie haut de gamme
                                                </p>
                                                <ul>
                                                    <li>
                                                        Optimisation marge
                                                        brute, automatisation
                                                        operations
                                                    </li>
                                                    <li>
                                                        CAO/etudes
                                                        statiques/RDM, expertise
                                                        decoupe laser
                                                    </li>
                                                    <li>
                                                        Principe low-tech :
                                                        produits robustes,
                                                        simples, maintenables
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="timeline-item">
                                                <h4>
                                                    2020-2022 : Easymov Robotics
                                                </h4>
                                                <p>
                                                    <strong>
                                                        Responsable conception
                                                        et production
                                                    </strong>{' '}
                                                    - AGV autonomes
                                                </p>
                                                <ul>
                                                    <li>
                                                        Management transversal
                                                        (programmeurs, UI/UX,
                                                        roboticiens)
                                                    </li>
                                                    <li>
                                                        Methodes d'iterations
                                                        rapides : conception →
                                                        fabrication → test
                                                    </li>
                                                    <li>
                                                        Integration normes
                                                        machines (directive
                                                        2006/42/CE)
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="timeline-item">
                                                <h4>2015-2019 : WeP3D</h4>
                                                <p>
                                                    <strong>
                                                        Fondateur et Directeur
                                                    </strong>{' '}
                                                    - Impression 3D hautes
                                                    performances
                                                </p>
                                                <ul>
                                                    <li>
                                                        Levee de fonds 260k€,
                                                        pitch investisseurs
                                                    </li>
                                                    <li>
                                                        Developpement procede
                                                        fabrication additive
                                                        metallique
                                                    </li>
                                                    <li>
                                                        Programmation C++,
                                                        regulation PID,
                                                        thermoregulation
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cv-section">
                                    <button
                                        className="cv-question"
                                        aria-expanded="false"
                                    >
                                        <span>
                                            Leadership et gestion de projets
                                            complexes
                                        </span>
                                        <span className="cv-icon">+</span>
                                    </button>
                                    <div className="cv-answer">
                                        <div className="skills-grid">
                                            <div>
                                                <h4>Gestion de projets</h4>
                                                <ul>
                                                    <li>
                                                        Gestion budgetaire et
                                                        ressources
                                                    </li>
                                                    <li>
                                                        Relations clients BtoB
                                                    </li>
                                                    <li>
                                                        Coordination equipes
                                                        pluridisciplinaires
                                                    </li>
                                                    <li>
                                                        Projets simultanes
                                                        multiples
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4>Approvisionnement</h4>
                                                <ul>
                                                    <li>
                                                        Cahiers des charges
                                                        techniques
                                                    </li>
                                                    <li>
                                                        Gestion
                                                        fournisseurs/sous-traitants
                                                    </li>
                                                    <li>
                                                        Solutions cost-effective
                                                    </li>
                                                    <li>
                                                        Optimisation chaine
                                                        production
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cv-section">
                                    <button
                                        className="cv-question"
                                        aria-expanded="false"
                                    >
                                        <span>Formation et certifications</span>
                                        <span className="cv-icon">+</span>
                                    </button>
                                    <div className="cv-answer">
                                        <ul>
                                            <li>
                                                <strong>2012-2015</strong> :
                                                Ingenieur Genie Industriel
                                                IFMA/Constellium
                                            </li>
                                            <li>
                                                <strong>2010-2012</strong> :
                                                CPGE TSI, Lycee Lafayette
                                            </li>
                                            <li>
                                                <strong>2010</strong> : BAC STI
                                                Electrotechnique, mention bien
                                            </li>
                                            <li>
                                                <strong>Langues</strong> :
                                                Francais (natif), Anglais
                                                professionnel (TOEIC 815)
                                            </li>
                                            <li>
                                                <strong>International</strong> :
                                                6 mois UK (We Print Fabric,
                                                Jondo UK)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portrait">
                            <img
                                src="/assets/profil.jpg"
                                alt="Maxence Pereira, ingenieur-concepteur"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                <section id="projets" className="section">
                    <h2>Projets</h2>
                    <div className="carousel">
                        <div
                            className="track auto-scroll"
                            aria-live="polite"
                        ></div>
                    </div>
                    <p className="muted">
                        Cliquez sur un projet pour voir le detail. Glissez pour
                        naviguer manuellement.
                    </p>
                </section>

                <section
                    id="projet-detail"
                    className="section hidden"
                    aria-hidden="true"
                ></section>

                <section id="tarifs" className="section">
                    <h2>Offres et Tarifs</h2>
                    <p className="section-intro">
                        Solutions industrielles concrètes, de l'idée à la
                        production. Expertise tech-indus premium pour PME et
                        artisans.
                    </p>

                    <div className="pricing-subsection">
                        <h3 className="subsection-title">
                            Accompagnement et diagnostique
                        </h3>
                        <div className="pricing-grid">
                            <div
                                className="pricing-card"
                                data-offer="diagnostic"
                            >
                                <div className="card-header">
                                    <h4>Diagnostic Flash</h4>
                                    <div className="card-subtitle">
                                        1 jour sur site
                                    </div>
                                    <div className="price-tag">
                                        1 150 € HT <span>/jour</span>
                                    </div>
                                </div>
                                <div className="card-summary">
                                    Photo nette de l'existant et route vers prod
                                    fiable.
                                </div>
                                <button
                                    className="card-toggle"
                                    aria-expanded="false"
                                >
                                    <span>Voir le détail</span>
                                    <span className="toggle-icon">+</span>
                                </button>

                                <div className="card-detail" aria-hidden="true">
                                    <div className="detail-columns">
                                        <div className="detail-left">
                                            <h5>Ce que je fais réellement</h5>
                                            <ul>
                                                <li>
                                                    Analyse terrain approfondie
                                                </li>
                                                <li>
                                                    Identification
                                                    contraintes/risques
                                                </li>
                                                <li>
                                                    Détection quick wins
                                                    immédiats
                                                </li>
                                                <li>
                                                    Évaluation capacités
                                                    existantes
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="detail-right">
                                            <h5>
                                                Ce que vous recevez concrètement
                                            </h5>
                                            <ul>
                                                <li>
                                                    Rapport synthèse 10-15 pages
                                                </li>
                                                <li>
                                                    Plan d'action 30/60/90 jours
                                                </li>
                                                <li>Estimation CAPEX/OPEX</li>
                                                <li>
                                                    Recommandations priorisées
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="pricing-card"
                                data-offer="industrialisation"
                            >
                                <div className="card-header">
                                    <h4>Conseil industrialisation</h4>
                                    <div className="card-subtitle">
                                        Montée en cadence
                                    </div>
                                    <div className="price-tag">
                                        5 000–12 000 € HT
                                    </div>
                                </div>
                                <div className="card-summary">
                                    Sécuriser une mise en production rapide &
                                    reproductible.
                                </div>
                                <button
                                    className="card-toggle"
                                    aria-expanded="false"
                                >
                                    <span>Voir le détail</span>
                                    <span className="toggle-icon">+</span>
                                </button>

                                <div className="card-detail" aria-hidden="true">
                                    <div className="detail-columns">
                                        <div className="detail-left">
                                            <h5>Ce que je fais réellement</h5>
                                            <ul>
                                                <li>Gammes opératoires</li>
                                                <li>
                                                    Plan de contrôle qualité
                                                </li>
                                                <li>AMDEC light</li>
                                                <li>Optimisation flux</li>
                                            </ul>
                                        </div>
                                        <div className="detail-right">
                                            <h5>
                                                Ce que vous recevez concrètement
                                            </h5>
                                            <ul>
                                                <li>
                                                    Dossier d'industrialisation
                                                    complet
                                                </li>
                                                <li>
                                                    Pack fournisseurs qualifiés
                                                </li>
                                                <li>TRS cibles définies</li>
                                                <li>Procédures production</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="pricing-card"
                                data-offer="accompagnement"
                            >
                                <div className="card-header">
                                    <h4>Accompagnement mensuel</h4>
                                    <div className="card-subtitle">
                                        Suivi continu
                                    </div>
                                    <div className="price-tag">
                                        950 € HT <span>/jour</span>
                                    </div>
                                    <div className="price-alt">
                                        ou 1 250 € HT/mois
                                    </div>
                                </div>
                                <div className="card-summary">
                                    Garder le cap, écraser les dérives,
                                    accélérer montée en cadence.
                                </div>
                                <button
                                    className="card-toggle"
                                    aria-expanded="false"
                                >
                                    <span>Voir le détail</span>
                                    <span className="toggle-icon">+</span>
                                </button>

                                <div className="card-detail" aria-hidden="true">
                                    <div className="detail-columns">
                                        <div className="detail-left">
                                            <h5>Ce que je fais réellement</h5>
                                            <ul>
                                                <li>
                                                    1 journée par mois sur site
                                                </li>
                                                <li>
                                                    Points réguliers téléphone
                                                </li>
                                                <li>
                                                    Support asynchrone email
                                                </li>
                                                <li>
                                                    Veille technique continue
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="detail-right">
                                            <h5>
                                                Ce que vous recevez concrètement
                                            </h5>
                                            <ul>
                                                <li>
                                                    Mises à jour documentation
                                                </li>
                                                <li>
                                                    Corrections rapides process
                                                </li>
                                                <li>
                                                    Suivi KPI industrialisation
                                                </li>
                                                <li>Ajustements temps réel</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-subsection">
                        <h3 className="subsection-title">
                            Machines et prototypes
                        </h3>
                        <div className="pricing-grid">
                            <div className="pricing-card" data-offer="machine">
                                <div className="card-header">
                                    <h4>Machine spéciale</h4>
                                    <div className="card-subtitle">
                                        Industrialisation
                                    </div>
                                    <div className="price-tag">Sur devis</div>
                                    <div className="price-range">
                                        3 000–75 000 €
                                    </div>
                                </div>
                                <div className="card-summary">
                                    Outillage/équipement pour ligne de
                                    production.
                                </div>
                                <button
                                    className="card-toggle"
                                    aria-expanded="false"
                                >
                                    <span>Voir le détail</span>
                                    <span className="toggle-icon">+</span>
                                </button>

                                <div className="card-detail" aria-hidden="true">
                                    <div className="detail-columns">
                                        <div className="detail-left">
                                            <h5>Ce que je fais réellement</h5>
                                            <ul>
                                                <li>
                                                    Cahier des charges technique
                                                </li>
                                                <li>Conception sur-mesure</li>
                                                <li>Fabrication assemblage</li>
                                                <li>Tests de performance</li>
                                            </ul>
                                        </div>
                                        <div className="detail-right">
                                            <h5>
                                                Ce que vous recevez concrètement
                                            </h5>
                                            <ul>
                                                <li>Machine opérationnelle</li>
                                                <li>Docs de maintenance</li>
                                                <li>Formation opérateurs</li>
                                                <li>
                                                    Support post-installation
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="pricing-card"
                                data-offer="prototype"
                            >
                                <div className="card-header">
                                    <h4>Prototype physique</h4>
                                    <div className="card-subtitle">
                                        POC → proto fonctionnel
                                    </div>
                                    <div className="price-tag">Sur devis</div>
                                    <div className="price-range">
                                        3 000–75 000 €
                                    </div>
                                </div>
                                <div className="card-summary">
                                    Valider conception, assemblages, temps de
                                    cycle.
                                </div>
                                <button
                                    className="card-toggle"
                                    aria-expanded="false"
                                >
                                    <span>Voir le détail</span>
                                    <span className="toggle-icon">+</span>
                                </button>

                                <div className="card-detail" aria-hidden="true">
                                    <div className="detail-columns">
                                        <div className="detail-left">
                                            <h5>Ce que je fais réellement</h5>
                                            <ul>
                                                <li>Conception détaillée</li>
                                                <li>Assemblage atelier</li>
                                                <li>Essais fonctionnels</li>
                                                <li>
                                                    Documentation conformité
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="detail-right">
                                            <h5>
                                                Ce que vous recevez concrètement
                                            </h5>
                                            <ul>
                                                <li>
                                                    Prototype fonctionnel testé
                                                </li>
                                                <li>
                                                    Rapport d'essais complet
                                                </li>
                                                <li>Fiches de réglage</li>
                                                <li>Plans de série validés</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pricing-card" data-offer="etude">
                                <div className="card-header">
                                    <h4>Étude & Proto numérique</h4>
                                    <div className="card-subtitle">
                                        Kit prêt à produire
                                    </div>
                                    <div className="price-tag">
                                        700 € HT <span>/jour</span>
                                    </div>
                                    <div className="price-alt">
                                        Forfait 2 100–3 500 €
                                    </div>
                                </div>
                                <div className="card-summary">
                                    Passer de l'idée au kit prêt à produire.
                                </div>
                                <button
                                    className="card-toggle"
                                    aria-expanded="false"
                                >
                                    <span>Voir le détail</span>
                                    <span className="toggle-icon">+</span>
                                </button>

                                <div className="card-detail" aria-hidden="true">
                                    <div className="detail-columns">
                                        <div className="detail-left">
                                            <h5>Ce que je fais réellement</h5>
                                            <ul>
                                                <li>CAO complète assemblage</li>
                                                <li>Plans cotés technique</li>
                                                <li>
                                                    Fichiers découpe/usinage
                                                </li>
                                                <li>Nomenclature détaillée</li>
                                            </ul>
                                        </div>
                                        <div className="detail-right">
                                            <h5>
                                                Ce que vous recevez concrètement
                                            </h5>
                                            <ul>
                                                <li>
                                                    Dossier prêt à fabriquer
                                                </li>
                                                <li>Fichiers STEP, PDF, DXF</li>
                                                <li>BOM (Bill of Materials)</li>
                                                <li>Gamme de fabrication</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-subsection">
                        <h3 className="subsection-title">Consulting</h3>
                        <div className="pricing-grid">
                            <div
                                className="pricing-card"
                                data-offer="consulting"
                            >
                                <div className="card-header">
                                    <h4>Consulting génie industriel</h4>
                                    <div className="card-subtitle">
                                        POC / post-POC / industrialisation
                                    </div>
                                    <div className="price-tag">
                                        À partir de 600 € HT <span>/jour</span>
                                    </div>
                                </div>
                                <div className="card-summary">
                                    Intervention en interne pour déployer un
                                    projet.
                                </div>
                                <button
                                    className="card-toggle"
                                    aria-expanded="false"
                                >
                                    <span>Voir le détail</span>
                                    <span className="toggle-icon">+</span>
                                </button>

                                <div className="card-detail" aria-hidden="true">
                                    <div className="detail-columns">
                                        <div className="detail-left">
                                            <h5>Ce que je fais réellement</h5>
                                            <ul>
                                                <li>Immersion équipe projet</li>
                                                <li>Support méthodes</li>
                                                <li>Cadrage technique</li>
                                                <li>
                                                    Coordination intervenants
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="detail-right">
                                            <h5>
                                                Ce que vous recevez concrètement
                                            </h5>
                                            <ul>
                                                <li>
                                                    Suivi opérationnel projet
                                                </li>
                                                <li>Jalons documentés</li>
                                                <li>Transfert savoir-faire</li>
                                                <li>
                                                    Montée en compétences équipe
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="faq" className="section">
                    <h2>Questions frequentes</h2>
                    <div className="faq-container">
                        <div className="faq-item">
                            <button
                                className="faq-question"
                                aria-expanded="false"
                            >
                                <span>
                                    En quoi Alesium differe d'un bureau d'etudes
                                    classique ?
                                </span>
                                <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <p>
                                    Etude → proto → mise en place. Alignement
                                    constant avec les contraintes atelier ;
                                    livrables prets a fabriquer.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <button
                                className="faq-question"
                                aria-expanded="false"
                            >
                                <span>Pouvez-vous intervenir rapidement ?</span>
                                <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <p>
                                    Oui. Operationnel immediatement (pas de
                                    phase d'apprentissage facturee).
                                </p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <button
                                className="faq-question"
                                aria-expanded="false"
                            >
                                <span>Sur quels materiaux/procedes ?</span>
                                <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <p>
                                    Multi-materiaux et procedes (mecano-soudure,
                                    usinage, CNC, assemblage, etc.).
                                </p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <button
                                className="faq-question"
                                aria-expanded="false"
                            >
                                <span>
                                    Quels sont les delais de redaction des devis
                                    ?
                                </span>
                                <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <p>
                                    Les delais de redaction des devis sont de
                                    48h apres reception des donnees techniques
                                    ou 24h apres rendez-vous sur site.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <button
                                className="faq-question"
                                aria-expanded="false"
                            >
                                <span>
                                    Quels sont les delais de realisation ?
                                </span>
                                <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <p>
                                    Les delais de conception et mise en
                                    production sont generalement de 4 a 8
                                    semaines selon la complexite du projet.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section">
                    <h2>Un projet en tete ?</h2>
                    <p className="contact-intro">
                        Que ce soit pour discuter de votre projet, obtenir des
                        conseils personnalises, ou clarifier vos questions, je
                        suis la pour vous ecouter et vous guider.
                    </p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="contact-label">Email</span>
                            <a
                                href="mailto:contact@alesium.fr"
                                className="contact-value"
                            >
                                contact@alesium.fr
                            </a>
                        </div>
                        <div className="contact-item">
                            <span className="contact-label">Telephone</span>
                            <a
                                href="tel:+33674244314"
                                className="contact-value"
                            >
                                06 74 24 43 14
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" id="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nom *</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Telephone</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Sujet *</label>
                            <select id="subject" name="subject" required>
                                <option value="">Selectionnez un sujet</option>
                                <option value="Audit / Diagnostic rapide">
                                    Audit / Diagnostic rapide
                                </option>
                                <option value="Etude + prototype numerique">
                                    Etude + prototype numerique
                                </option>
                                <option value="Prototype physique / machine speciale">
                                    Prototype physique / machine speciale
                                </option>
                                <option value="Industrialisation express">
                                    Industrialisation express
                                </option>
                                <option value="Autre demande">
                                    Autre demande
                                </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Decrivez votre projet, vos besoins ou vos questions..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="contact-submit">
                            Envoyer le message
                        </button>
                        <div
                            className="form-status"
                            style={{ display: 'none' }}
                        ></div>
                    </form>
                </section>
            </main>

            <div className="lightbox" id="lightbox">
                <div className="lightbox-content">
                    <button className="lightbox-close" aria-label="Fermer">
                        ×
                    </button>
                    <button
                        className="lightbox-nav prev"
                        aria-label="Image precedente"
                    >
                        ‹
                    </button>
                    <img src="" alt="" />
                    <button
                        className="lightbox-nav next"
                        aria-label="Image suivante"
                    >
                        ›
                    </button>
                    <div className="lightbox-counter">1 / 1</div>
                </div>
            </div>

            <footer className="site-footer">
                <p className="small">© 2025 Alesium — Tous droits reserves.</p>
                <nav className="legal-links">
                    <a href="#" id="mentions-link">
                        Mentions legales
                    </a>{' '}
                    ·{' '}
                    <a href="#" id="rgpd-link">
                        RGPD
                    </a>
                </nav>
            </footer>

            <div className="legal-modal" id="legal-modal">
                <div className="modal-overlay"></div>
                <div className="modal-content">
                    <button className="modal-close" aria-label="Fermer">
                        ×
                    </button>
                    <div className="modal-body" id="modal-body"></div>
                </div>
            </div>
        </>
    )
}
