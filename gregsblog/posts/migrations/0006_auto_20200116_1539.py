# Generated by Django 2.2.3 on 2020-01-16 04:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("posts", "0005_auto_20200116_0102")]

    operations = [
        migrations.AlterField(
            model_name="post",
            name="slug",
            field=models.SlugField(
                help_text="This field determines the url path of this event. It defaults to the title.",
                null=True,
            ),
        )
    ]
