# Generated by Django 3.2.7 on 2021-09-20 08:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='produitId',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='shop.produit'),
        ),
    ]
