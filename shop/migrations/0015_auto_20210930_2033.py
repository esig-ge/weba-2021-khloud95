# Generated by Django 3.2.7 on 2021-09-30 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0014_auto_20210930_2028'),
    ]

    operations = [
        migrations.AlterField(
            model_name='commande',
            name='atelier',
            field=models.ManyToManyField(to='shop.Atelier'),
        ),
        migrations.AlterField(
            model_name='commande',
            name='produit',
            field=models.ManyToManyField(to='shop.Produit'),
        ),
    ]