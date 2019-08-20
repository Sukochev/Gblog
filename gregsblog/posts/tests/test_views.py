from django.test import TestCase
from django.urls import reverse_lazy
from posts.tests.factories import PostFactory


class ViewsTestCase(TestCase):
    def setUp(self):
        super().setUp()
        self.post = PostFactory.create(title="Test Post", body="Testing Body")

    def test_home(self):
        dashboard_path = reverse_lazy("home")
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Welcome to Greg's Tech Blog!")

    def test_post_details(self):
        dashboard_path = reverse_lazy(f"post_detail", args=[self.post.pk])
        response = self.client.get(dashboard_path)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Test Post")
