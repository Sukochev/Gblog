from django.apps import apps
from django.test import TestCase
from sitepages.apps import SitepagesConfig


class SitepagesConfigTest(TestCase):
    def test_apps(self):
        self.assertEqual(SitepagesConfig.name, "sitepages")
        self.assertEqual(apps.get_app_config("sitepages").name, "sitepages")
