# Generated by Django 3.2.7 on 2021-10-01 07:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20210929_0908'),
        ('shop', '0017_auto_20211001_0955'),
    ]

    operations = [
        migrations.CreateModel(
            name='Commande',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comNumero', models.IntegerField()),
                ('comTotal', models.DecimalField(decimal_places=3, max_digits=5)),
                ('comDatePaiement', models.DateField()),
                ('comPoidsFinal', models.DecimalField(decimal_places=2, max_digits=4)),
                ('envoye', models.BooleanField(default=True)),
                ('enAttente', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='LigneProduitCommande',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantite', models.IntegerField()),
                ('commande', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.commande')),
                ('produit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.produit')),
            ],
            options={
                'unique_together': {('produit', 'commande')},
            },
        ),
        migrations.CreateModel(
            name='LigneAtelierCommande',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nbrPersonne', models.IntegerField()),
                ('atelier', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.atelier')),
                ('commande', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.commande')),
            ],
            options={
                'unique_together': {('atelier', 'commande')},
            },
        ),
        migrations.AddField(
            model_name='commande',
            name='atelier',
            field=models.ManyToManyField(blank=True, null=True, through='shop.LigneAtelierCommande', to='shop.Atelier'),
        ),
        migrations.AddField(
            model_name='commande',
            name='clientId',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.client'),
        ),
        migrations.AddField(
            model_name='commande',
            name='produit',
            field=models.ManyToManyField(blank=True, null=True, through='shop.LigneProduitCommande', to='shop.Produit'),
        ),
    ]
