# Generated by Django 2.2.3 on 2020-01-15 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("posts", "0003_auto_20200116_0045")]

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
