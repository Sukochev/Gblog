from django.test import TestCase
from sitepages.tests.factories import SitepagesFactory


class SitepagesModelTestCase(TestCase):
    def setUp(self):
        super().setUp()
        self.sitepage = SitepagesFactory.create(title="Test Post", body="Testing Body")

    def test_sitepage_attributes(self):
        self.assertTrue(hasattr(self.sitepage, "title"))
        self.assertTrue(hasattr(self.sitepage, "body"))
        self.assertEqual(self.sitepage.title, "Test Post")
        self.assertEqual(self.sitepage.body, "Testing Body")

    def test_name_refers_to_event_instance(self):
        self.assertEqual(str(self.sitepage), self.sitepage.title)
