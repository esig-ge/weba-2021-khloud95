# Generated by Django 3.2.8 on 2021-10-20 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0028_alter_produit_poid'),
    ]

    operations = [
        migrations.AddField(
            model_name='produit',
            name='typeProd',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
