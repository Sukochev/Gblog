# Generated by Django 2.2.3 on 2020-01-15 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("posts", "0002_auto_20180520_2335")]

    operations = [
        migrations.AlterModelOptions(
            name="post",
            options={
                "ordering": ["-pub_date"],
                "verbose_name": "Post",
                "verbose_name_plural": "Posts",
            },
        ),
        migrations.AddField(
            model_name="post",
            name="posted",
            field=models.BooleanField(
                default=True,
                help_text="Unchecking this box will put the post into draft mode and it will not appear on the site.",
                verbose_name="Published",
            ),
        ),
        migrations.AddField(
            model_name="post",
            name="slug",
            field=models.SlugField(
                default="Default",
                help_text="This field determines the url path of this event. It defaults to the title.",
            ),
        ),
    ]
