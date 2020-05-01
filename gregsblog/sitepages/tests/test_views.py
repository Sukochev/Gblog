from django.test import TestCase
from django.urls import reverse_lazy
from sitepages.tests.factories import SitepagesFactory


class ViewsTestCase(TestCase):
    def setUp(self):
        super().setUp()
        self.sitepage = SitepagesFactory.create(title="Test Post", body="Testing Body")

    def test_about(self):
        dashboard_path = reverse_lazy("sitepages:about")
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "About This Blog")

    def test_cover(self):
        dashboard_path = reverse_lazy("cover")
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Click for Night")

    def test_view1(self):
        dashboard_path = reverse_lazy("sitepages:view1")
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Surprise")

    def test_view2(self):
        dashboard_path = reverse_lazy("sitepages:view2")
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Surprise II")

    def test_view3(self):
        dashboard_path = reverse_lazy("sitepages:view3")
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Surprise III")

    def test_cover_triangles(self):
        dashboard_path = reverse_lazy("sitepages:cover_triangles")
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Click to Restart")

    def test_cover_rainbow_circles(self):
        dashboard_path = reverse_lazy("sitepages:cover_rainbow_circles")
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)

    def test_cover_coswaves(self):
        dashboard_path = reverse_lazy("sitepages:cover_coswaves")
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)

    def test_starshower(self):
        dashboard_path = reverse_lazy("sitepages:starshower")
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Blog")

    def test_spinstars(self):
        dashboard_path = reverse_lazy("sitepages:spinstars")
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Spin to Win")
