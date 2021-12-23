from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from accounts.models import Client


# Create your models here.
class Produit(models.Model):
    typeProduit = (('Cosmetique', 'Cosmetique'),
                   ('Produit interieur', 'Produit interieur'),
                   ('Vetement', 'Vetement'))
    nom = models.CharField(max_length=50)
    description = models.CharField(max_length=150)
    stockMin = models.IntegerField()
    stockMax = models.IntegerField()
    stockDisponible = models.IntegerField()
    poid = models.DecimalField(max_digits=6, decimal_places=3)
    typeProd = models.CharField(max_length=50, choices=typeProduit , blank=True, null=True)
    favoris = models.ManyToManyField(User, related_name='favoris', blank=True)
    produitActif = models.BooleanField(default=True)
    nomFichier = models.ImageField(blank=True, null=True)

    def get_absolute_url(self): ## à rechercher
        return reverse('index', args=[str(self.id)])
    
    # Source : https://stackoverflow.com/questions/43179875/when-to-use-django-get-absolute-url-method
    # Sources : https://stackoverflow.com/questions/13503645/what-is-permalink-and-get-absolute-url-in-django
    # Pour éviter d'aller dans tout les templates et de les modifier
    # le principe de DRY --> Don't repeat yourself
    # à chaque fois on modifie l'URL.
    # Et pour générer un url unique pour chaque produit
    # Cette méthode est là --> pour dire à django comment calculer les URLS canoniques
    ## --> Donc cette méthode retourne un String qui fait référence à un objet par l'URL
    ## Cette méthode dis à django ou aller quand une nouvelle instance est créee

    ## reverse --> C'est une méthode qui prend 2 paramètre

    # Source : https://newbedev.com/what-is-reverse-in-django
    ## L'idée est quand on veut par exemple modifier les urls dans le futur
    ## Donc au lieu de modifier par tout les urls, on le modifie seulement dans l'url.py
    ## C'est grace à la méthode de reverse et le concept de DRY
    ## L'idée est --> de modifier une seule place



    def __str__(self):
        return self.nom


class Vetement(Produit):
    sexe = models.CharField(max_length=20)
    typeTissu = models.CharField(max_length=50)
    couleur = models.CharField(max_length=20)
    taille = models.CharField(max_length=20)

    def __str__(self):
        return self.nom + " " + self.sexe + " " + self.taille + " " + self.couleur


class ProduitInterieur(Produit):
    type = models.CharField(max_length=20)

    def __str__(self):
        return self.nom + " " + self.type


class Cosmetique(Produit):
    ingredient = models.CharField(max_length=100)
    gamme = models.CharField(max_length=50)
    categorie = models.CharField(max_length=50)

    def __str__(self):
        return self.nom + " " + self.gamme + " " + self.categorie


class Atelier(models.Model):
    titre = models.CharField(max_length=30)
    description = models.CharField(max_length=150)
    nbrPersonneMax = models.IntegerField()
    dateDebut = models.DateField(auto_now_add=False)
    heureDebut = models.TimeField(auto_now_add=False)
    heureFin = models.TimeField(auto_now_add=False)
    adresse = models.CharField(max_length=150)
    prix = models.FloatField()
    AtelierActif = models.BooleanField(default=True)
    nomFichier = models.ImageField(blank=True, null=True)
    favorisAtelier = models.ManyToManyField(User, related_name='favorisAtelier', blank=True)

    def __str__(self):
        return self.titre


class Prix(models.Model):
    montant = models.FloatField()
    reduction = models.IntegerField()
    date = models.DateField(auto_now_add=False)
    produit = models.ForeignKey(Produit, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.montant)


class Commande(models.Model):
    statutCommande = (('Envoyé', 'Envoyé'),
                      ('En attente', 'En attente'),
                      ('Annulé', 'Annulé')
                      )
    comNumero = models.IntegerField()
    comTotal = models.FloatField()
    # comStaut = models.PositiveSmallIntegerField(choices=StatutChoix)
    comDate = models.DateField(auto_now_add=False)
    comPoidsFinal = models.DecimalField(max_digits=4, decimal_places=2,blank=True, null=True, )
    envoye = models.BooleanField(default=True)
    enAttente = models.BooleanField(default=False)
    produit = models.ManyToManyField(Produit, through='LigneProduitCommande')
    atelier = models.ManyToManyField(Atelier, through='LigneAtelierCommande')
    clientId = models.ForeignKey(Client, on_delete=models.SET_NULL, blank=True, null=True, )
    statut = models.CharField(max_length=10, choices=statutCommande, default='')

    def __str__(self):
        return str(self.comNumero) + " " + str(self.comTotal) + " " + str(self.comDate)


class LigneProduitCommande(models.Model):
    produit = models.ForeignKey(Produit, on_delete=models.CASCADE)
    commande = models.ForeignKey(Commande, on_delete=models.CASCADE)
    quantite = models.IntegerField()

    class Meta:
        unique_together = [['produit', 'commande']]

    # def __str__(self):
    #     return str(self.produit) + " " + str(self.commande) + " " + str(self.quantite)


class LigneAtelierCommande(models.Model):
    atelier = models.ForeignKey(Atelier, on_delete=models.CASCADE)
    commande = models.ForeignKey(Commande, on_delete=models.CASCADE)
    nbrPersonne = models.IntegerField()

    class Meta:
        unique_together = [['atelier', 'commande']]

    # def __str__(self):
    #     return str(self.atelier) + " " + str(self.commande) + " " + str(self.nbrPersonne)
