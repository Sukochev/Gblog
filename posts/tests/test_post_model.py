from django.test import TestCase

from posts.tests.factories import PostFactory


class PostModelTestCase(TestCase):
    def setUp(self):
        super().setUp()
        self.post = PostFactory.create(title="Test Post", body="Testing Body")

    def test_post_attributes(self):
        self.assertTrue(hasattr(self.post, "title"))
        self.assertTrue(hasattr(self.post, "image"))
        self.assertTrue(hasattr(self.post, "pub_date"))
        self.assertTrue(hasattr(self.post, "body"))
        self.assertEqual(self.post.title, "Test Post")
        self.assertEqual(self.post.body, "Testing Body")

    def test_name_refers_to_event_instance(self):
        self.assertEqual(str(self.post), self.post.title)


class PostModelSummaryTestCase(TestCase):
    def setUp(self):
        super().setUp()
        self.body = "x" * 150
        self.post = PostFactory.create(title="Test Post", body=self.body)

    def test_summary(self):
        self.assertEqual(100, len(self.post.summary()))
        self.assertEqual("x" * 100, self.post.summary())
