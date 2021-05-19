/*** DOM ***/
let domInfo = document.getElementById('infos');
let domSachen = document.getElementById('sachen');

/*** Variablen ***/
let array = sessionStorage;


class zuHause {
    titel;
    hause;
    ort;
    bild;
    model;

    constructor(titel, hause, ort, bild, model) {
        this.titel = titel;
        this.hause = hause;
        this.ort = ort;
        this.bild = bild;
        this.model = model;
    }
  }

let objects = [ new zuHause("Gepflegtes Anwesen in begehrter Wohnlage an der Oberinnviertler Seenplatte", "Haus", "Salzburg", "./img/GepflegtesAnweseninbegehrterWohnlageanderOberinnviertlerSeenplatte.jpg", "modell/modell2.html"), 
                new zuHause("Zinshaus Wohn u. Geschäftshaus in gut frequentierter Lage Dachbodenausbau möglich", "Haus", "Salzburg", "./img/ZinshausWohnu.GeschäftshausingutfrequentierterLageDachbodenausbaumöglich.jpg", ""),
                new zuHause("Luxuriöse Villa mit großem Garten Ruhelage Festungsblick", "Haus", "Salzburg", "./img/LuxuriöseVillamitgroßemGartenRuhelageFestungsblick.jpg", ""),
                new zuHause("Domizil Heuberg Villa 1 neue Einfamilienvilla mit Gaisberg und Nocksteinblick", "Haus", "Salzburg", "./img/DomizilHeubergVilla1neueEinfamilienvillamitGaisbergundNocksteinblick.jpg", ""),
                new zuHause("Haushälfte in Toplage Salzburg Thumegg", "Haus", "Salzburg", "./img/HaushälfteinToplageSalzburgThumegg.jpg", ""),
                new zuHause("WimbergerHaus Ziegelmassivhaus", "Haus", "Salzburg", "./img/WimbergerHausZiegelmassivhaus.jpg", ""),
                new zuHause("WimbergerHaus Ziegelmassivhaus Darius", "Haus", "Salzburg", "./img/WimbergerHausZiegelmassivhausDarius.jpg", ""),
                new zuHause("Erstbezug nach Kernsanierung Stadtwohnung Nähe Linzergasse Provisionsfrei", "Wohnung", "Salzburg", "./img/ErstbezugnachKernsanierungStadtwohnungNäheLinzergasseProvisionsfrei.jpg", ""),
                new zuHause("WUNDERSCHÖNE DACHGESCHOSSWOHNUNG AM HELLBRUNNER GRÜNLAND", "Wohnung", "Salzburg", "./img/WUNDERSCHÖNEDACHGESCHOSSWOHNUNGAMHELLBRUNNERGRÜNLAND.jpg", ""),
                new zuHause("Morzg 2 Zimmer Wohnung nahe der Hellbrunner Allee", "Wohnung", "Salzburg", "./img/Morzg2ZimmerWohnungnahederHellbrunnerAllee.jpg", ""),
                new zuHause("Attraktive 2 Zimmer Architektenwohnung inkl.TG in Hallein im Süden von Salzburg", "Wohnung", "Salzburg", "./img/Attraktive2ZimmerArchitektenwohnunginkl.TGinHalleinimSüdenvonSalzburg.jpg", ""),
                new zuHause("Glücksmomente Gediegene Großgarconniere mit XL Sonnenbalkon", "Wohnung", "Salzburg", "./img/GlücksmomenteGediegeneGroßgarconnieremitXLSonnenbalkon.jpg", ""),
                new zuHause("Ganz oben auf der Wohngenuss Skala", "Wohnung", "Salzburg", "./img/GanzobenaufderWohngenussSkala.jpg", ""),
                new zuHause("GEMÜTLICHES WOHNEN", "Wohnung", "Salzburg", "./img/GEMÜTLICHESWOHNEN.jpg", ""),
                new zuHause("Geräumiges Reihenhaus mit 4,5 Zimmern, Vollunterkellerung, Terrasse und Eigengarten samt Parkplatz.", "Haus", "Wien", "./img/GeräumigesReihenhausmit4,5Zimmern,Vollunterkellerung,TerrasseundEigengartensamtParkplatz..jpg", ""),
                new zuHause("Provisionsfrei ziegelmassives Reihenhaus mit 4,5 Zimmern, Hobbykeller, Eigengarten, Dachterrasse und Parkplatz", "Haus", "Wien", "./img/ProvisionsfreiziegelmassivesReihenhausmit4,5Zimmern,Hobbykeller,Eigengarten,DachterrasseundParkplatz.jpg", ""),
                new zuHause("Haus 2 Einfamilienhaus Neubau in Aspern mit Wohnkeller PROVISIONSFREI", "Haus", "Wien", "./img/Haus2EinfamilienhausNeubauinAspernmitWohnkellerPROVISIONSFREI.jpg", ""),
                new zuHause("1210, Georgistraße, Beim Aupark Jedlesee, Doppelhaus", "Haus", "Wien", "./img/1210,Georgistraße,BeimAuparkJedlesee,Doppelhaus.jpg", ""),
                new zuHause("1230, Speisinger Straße, Beim Rosenhügel in Grünruhelage, Einzelhaus", "Haus", "Wien", "./img/1230,SpeisingerStraße,BeimRosenhügelinGrünruhelage,Einzelhaus.jpg", ""),
                new zuHause("CROWND by Chipperfield", "Wohnung", "Wien", "./img/CROWNDbyChipperfield.jpg", ""),
                new zuHause("Alice im Cumberland 2 Zimmer Wohnung mit Balkon provisionsfrei zu kaufen in 1140 Wien", "Wohnung", "Wien", "./img/AliceimCumberland2ZimmerWohnungmitBalkonprovisionsfreizukaufenin1140Wien.jpg", ""),
                new zuHause("EXQUISIT & MONDÄN NEUBAUVILLENETAGE MIT PENTHOUSE ATELIER UND TERRASSE in HADERSDORF", "Wohnung", "Wien", "./img/EXQUISIT&MONDÄNNEUBAUVILLENETAGEMITPENTHOUSEATELIERUNDTERRASSEinHADERSDORF.jpg", ""),
                new zuHause("Single Wohnung mit großer Terrasse in Aspern Provisionsfrei f. Käufer Single apartment with large terrace in Aspern", "Wohnung", "Wien", "./img/SingleWohnungmitgroßerTerrasseinAspernProvisionsfreif.KäuferSingleapartmentwithlargeterraceinAspern.jpg", ""),
                new zuHause("1220, Heustadelgasse, Idyllische Grünruhelage nahe U2, 5 Zimmer Eigentums Maisonette", "Wohnung", "Wien", "./img/1220,Heustadelgasse,IdyllischeGrünruhelagenaheU2,5ZimmerEigentumsMaisonette.jpg", ""),
                new zuHause("1220, Leutholdgasse, 2 Gehminuten zur U2, 2 Zimmer Eigentumswohnung", "Wohnung", "Wien", "./img/1220,Leutholdgasse,2GehminutenzurU2,2ZimmerEigentumswohnung.jpg", ""),
                new zuHause("1220, Heustadelgasse, Idyllische Grünruhelage nahe U2, 3 Zimmer Penthouse", "Wohnung", "Wien", "./img/1220,Heustadelgasse,IdyllischeGrünruhelagenaheU2,3ZimmerPenthouse.jpg", ""),
                new zuHause("Villa 17 Keine Käuferprovision Exklusive Gartenwohnung mit großem Gartenhaus", "Wohnung", "Wien", "./img/Villa17KeineKäuferprovisionExklusiveGartenwohnungmitgroßemGartenhaus.jpg", ""),
                new zuHause("Reihenhaus in bevorzugter und vor allem idyllischer Lage Urfahr", "Haus", "Linz", "./img/ReihenhausinbevorzugterundvorallemidyllischerLageUrfahr.jpg", ""),
                new zuHause("Linz Keferfeld Moderne DHH mit Garten", "Haus", "Linz", "./img/LinzKeferfeldModerneDHHmitGarten.jpg", ""),
                new zuHause("Kleines Bauträgerobjekt Sanierungsbedürftiges Haus am Steinbühel in Linz zu verkaufen", "Haus", "Linz", "./img/KleinesBauträgerobjektSanierungsbedürftigesHausamSteinbühelinLinzzuverkaufen.jpg", ""),
                new zuHause("Moderne Doppelhaushälfte in Ruhelage", "Haus", "Linz", "./img/ModerneDoppelhaushälfteinRuhelage.jpg", ""),
                new zuHause("Rarität Uriges Tiroler Alpenjuwel in sonniger Lage von St. Jakob", "Haus", "Linz", "./img/Rarität! Uriges Tiroler AlpenjuwelinsonnigerLagevonSt.Jakob.jpg", ""),
                new zuHause("Eleganter Altbau als Büro Atelier Landstraße 14 Top 2D", "Wohnung", "Linz", "./img/EleganterAltbaualsBüroAtelierLandstraße14Top2D.jpg", ""),
                new zuHause("PENTHOUSE", "Wohnung", "Linz", "./img/PENTHOUSE.jpg", ""),
                new zuHause("2,5 Zimmer mit Top Ausstattung im Zentrum", "Wohnung", "Linz", "./img/2,5ZimmermitTopAusstattungimZentrum.jpg", ""),
                new zuHause("das levels Premium Wohnen im Sompark Villa DUKE-ERSTBEZUG", "Wohnung", "Linz", "./img/daslevelsPremiumWohnenimSomparkVillaDUKEERSTBEZUG.jpg", ""),
                new zuHause("NEU renovierte Mietwohnung mit hochwertiger Ausstattung", "Wohnung", "Linz", "./img/NEUrenovierteMietwohnungmithochwertigerAusstattung.jpg", ""),
                new zuHause("Wunderschöne Mietwohnungen in NEUBAU Wohnanlage in Linz zu vermieten", "Wohnung", "Linz", "./img/WunderschöneMietwohnungeninNEUBAUWohnanlageinLinzzuvermieten.jpg", ""),
                new zuHause("PENTHOUSE im LINZER ZENTRUM WOHNEN und ARBEITEN", "Wohnung", "Linz", "./img/PENTHOUSEimLINZERZENTRUMWOHNENundARBEITEN.jpg", ""),
                new zuHause("VORANKÜNDIGUNG Exklusiver Wohntraum in vorzüglicher Lage", "Haus", "Wels", "./img/VORANKÜNDIGUNGExklusiverWohntrauminvorzüglicherLage.jpg", ""),
                new zuHause("WimbergerHaus Ziegelmassivhaus CUBIC PUR", "Haus", "Wels", "./img/WimbergerHausZiegelmassivhausCUBICPUR.jpg", ""),
                new zuHause("Doppelhaus WELS Noitzmühle", "Haus", "Wels", "./img/DoppelhausWELSNoitzmühle.jpg", ""),
                new zuHause("Einzelhaus WELS Noitzmühle", "Haus", "Wels", "./img/EinzelhausWELSNoitzmühle.jpg", ""),
                new zuHause("Doppelhaus Ziegelmassiv PROVISIONSFREI", "Haus", "Wels", "./img/DoppelhausZiegelmassivPROVISIONSFREI.jpg", ""),
                new zuHause("ZINSHAUS ZENTRUM WELS", "Haus", "Wels", "./img/ZINSHAUSZENTRUMWELS.jpg",""),
                new zuHause("Wohnparadies in Wels perfekt für Singles und Kleinfamilien", "Wohnung", "Wels", "./img/WohnparadiesinWelsperfektfürSinglesundKleinfamilien.jpg", ""),
                new zuHause("Klein aber fein vollmöblierte Wohnung in 4600 Wels zu vermieten", "Wohnung", "Wels", "./img/KleinaberfeinvollmöblierteWohnungin4600Welszuvermieten.jpg", ""),
                new zuHause("Großzügige 3 Zi Wohnung mit Loggia und Parkplatz", "Wohnung", "Wels", "./img/Großzügige3ZiWohnungmitLoggiaundParkplatz.jpg", ""),
                new zuHause("Sonnige Galeriewohnung im Schloss Lichtenegg Top W025", "Wohnung", "Wels", "./img/SonnigeGaleriewohnungimSchlossLichteneggTopW025.jpg", ""),
                new zuHause("Gemütliche Single Wohnung in Wels", "Wohnung", "Wels", "./img/GemütlicheSingleWohnunginWels.jpg", ""),
                new zuHause("Exklusive 2 Zimmer Wohnung im Zentrum von Wels", "Wohnung", "Wels", "./img/Exklusive2ZimmerWohnungimZentrumvonWels.jpg", ""),
                new zuHause("Gemütliche 3 Zimmer Wohnung im Zentrum von Wels", "Wohnung", "Wels", "./img/Gemütliche3ZimmerWohnungimZentrumvonWels.jpg",""),
                new zuHause("NEUBAU EXKLUSIVES REIHENHAUS IN RUHIGER LAGE IN STEYR ZU VERKAUFEN", "Haus", "Steyr", "./img/NEUBAUEXKLUSIVESREIHENHAUSINRUHIGERLAGEINSTEYRZUVERKAUFEN.jpg", ""),
                new zuHause("NEUBAU WOHNEN UND WOHLFÜHLEN IN DER LEBENSWERTEN STADT STEYR HOCHWERTIGES REIHENHAUS ZU VERKAUFEN", "Haus", "Steyr", "./img/NEUBAUWOHNENUNDWOHLFÜHLENINDERLEBENSWERTENSTADTSTEYRHOCHWERTIGESREIHENHAUSZUVERKAUFEN.jpg", ""),
                new zuHause("NEUBAU Belagsfertige Luxus Villa mit Weitblick!", "Haus", "Steyr", "./img/NEUBAUBelagsfertigeLuxusVillamitWeitblick.jpg", ""),
                new zuHause("Doppelhaus", "Haus", "Steyr", "./img/Doppelhaus.jpg", ""),
                new zuHause("Bungalow mit Doppelcarport", "Haus", "Steyr", "./img/BungalowmitDoppelcarport.jpg", ""),
                new zuHause("Steyr Herrliches Einfamilienhaus mit Pool in Top Lage", "Haus", "Steyr", "./img/SteyrHerrlichesEinfamilienhausmitPoolinTopLage.jpg", ""),
                new zuHause("Riesiger Garten und Haus mit 3 Wohneinheiten", "Haus", "Steyr", "./img/RiesigerGartenundHausmit3Wohneinheiten.jpg", ""),
                new zuHause("Wohnung mit herrlichem Ausblick Erstbezug", "Wohnung", "Steyr", "./img/WohnungmitherrlichemAusblickErstbezug.jpg", ""),
                new zuHause("2 Raum Wohnung", "Wohnung", "Steyr", "./img/2RaumWohnung.jpg", ""),
                new zuHause("Exklusive Dachgeschosswohnung mit extravaganter Küche im Villengebiet", "Wohnung", "Steyr", "./img/ExklusiveDachgeschosswohnungmitextravaganterKücheimVillengebiet.jpg", ""),
                new zuHause("4400 Steyr, Blumauergasse 26 Studentenwohnheim", "Wohnung", "Steyr", "./img/4400Steyr,Blumauergasse26Studentenwohnheim.jpg", ""),
                new zuHause("4400 Steyr, Blumauergasse 26 Studentenwohnheim", "Wohnung", "Steyr", "./img/4400Steyr,Blumauergasse26Studentenwohnheim2.jpg", ""),
                new zuHause("4400 Steyr, Blumauergasse 26 Studentenwohnheim3", "Wohnung", "Steyr", "./img/4400Steyr,Blumauergasse26Studentenwohnheim3.jpg", ""),
                new zuHause("Pendlerzimmer in verschiedenen Größen", "Wohnung", "Steyr", "./img/PendlerzimmerinverschiedenenGrößen.jpg", ""),
                new zuHause("Ruhige 2 Raumwohnung Provisionsfrei für den Mieter", "Wohnung", "Steyr", "./img/Ruhige2RaumwohnungProvisionsfreifürdenMieter.jpg", ""),
                new zuHause("IM BIRNFELD schlüsselfertige Doppelhaushälfte inkl. Vollkeller, Garage und Grundstück", "Haus", "Enns", "./img/IMBIRNFELDschlüsselfertigeDoppelhaushälfteinkl.Vollkeller,GarageundGrundstück.jpg", ""),
                new zuHause("BAUSTART erfolgt IM BIRNFELD schlüsselfertige Doppelhaushälfte inkl. Keller und Garage", "Haus", "Enns", "./img/BAUSTARTerfolgtIM BIRNFELDschlüsselfertigeDoppelhaushälfteinkl.KellerundGarage.jpg"),
                new zuHause("Enns Altbaumietwohnung im Herzen von Enns", "Wohnung", "Enns", "./img/EnnsAltbaumietwohnungimHerzenvonEnns.jpg", ""),
                new zuHause("Provisionsfrei 3 ZI Wohnung inkl. Loggia und Garage", "Wohnung", "Enns", "./img/Provisionsfrei3ZIWohnunginkl.LoggiaundGarage.jpg", ""),
                new zuHause("Sonnige 2 Zimmer Wohnung mit Wintergarten in der Wiener Straße 2 Top 8", "Wohnung", "Enns", "./img/Sonnige2ZimmerWohnungmitWintergarteninderWienerStraße2Top8.jpg", "")
            ];
domInfo.innerHTML = `<h2>${array.zuhause}; ${array.ort}</h2>`;

let x = " ";
for (i = 0; i < objects.length; i++) {
    if (objects[i].hause == array.zuhause && objects[i].ort == array.ort) {
        x += `<img  class="bilder" title="${objects[i].titel}" src = "${objects[i].bild}" onclick = "model(this)" />`;
    }
}
domSachen.innerHTML = x;

function model(element){
    window.location.href = "./model/model.html";
    /*
    for(i = 0; i < objects.length; i++){
        if(objects[i].titel == element.title){
            window.location.href = objects[i].model;    
        }
    }
    */
}